import type { Metadata } from "next";
import {
  inviteModeEnabled,
  isAdminAuthed,
  listInvites,
  makeInviteUrl,
} from "@/lib/portal/invites";
import { getOrigin } from "@/lib/portal/origin";
import AdminLoginForm from "./AdminLoginForm";
import CreateInviteForm from "./CreateInviteForm";
import CopyButton from "./CopyButton";
import { reactivateInviteAction, revokeInviteAction, adminLogout } from "./actions";
import s from "./page.module.scss";

// Admin state depends on request cookies and runtime env — never prerender.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Invite Admin",
  description: "Signed invite administration.",
  robots: { index: false, follow: false },
};

function formatDate(iso?: string): string {
  if (!iso) return "—";
  return new Date(iso).toISOString().slice(0, 10);
}

function readCurrentTimeMs(): number {
  return Date.now();
}

export default async function InvitePage() {
  const enabled = inviteModeEnabled();

  return (
    <div className={s.page}>
      <div className={s.classification} aria-hidden="true">
        <span>INTERNAL // INVITE ADMINISTRATION</span>
      </div>

      <main className={s.main}>
        <section className={s.content}>
          <p className={s.eyebrow}>[ AST // SIGNED INVITE LEDGER ]</p>
          <h1 className={s.title}>Invite Administration</h1>

          {!enabled ? (
            <div className={s.notice}>
              <p className={s.noticeTitle}>INVITE MODE NOT CONFIGURED</p>
              <p className={s.noticeBody}>
                Set the following environment variables and restart the server to
                enable signed invite links:
              </p>
              <ul className={s.envList}>
                <li>
                  <code>INVITE_SECRET</code> — long random string used to sign
                  links.
                </li>
                <li>
                  <code>ADMIN_PASSPHRASE</code> — passphrase protecting this
                  page.
                </li>
              </ul>
              <p className={s.noticeBody}>
                Until configured, deployed portals remain locked. See
                <code> SETUP.md</code> for details.
              </p>
            </div>
          ) : (
            <AuthedOrLogin />
          )}
        </section>
      </main>
    </div>
  );
}

async function AuthedOrLogin() {
  const authed = await isAdminAuthed();

  if (!authed) {
    return (
      <>
        <p className={s.lede}>
          This page is restricted. Enter the admin passphrase to manage signed
          invite links.
        </p>
        <div className={s.divider} aria-hidden="true">
          <span className={s.dividerLine} />
          <span className={s.dividerLabel}>AUTHENTICATE</span>
          <span className={s.dividerLine} />
        </div>
        <AdminLoginForm />
      </>
    );
  }

  const invites = await listInvites();
  const origin = await getOrigin();
  const currentTimeMs = readCurrentTimeMs();

  return (
    <>
      <div className={s.headerRow}>
        <p className={s.lede}>
          Create single-recipient, expiring, individually revocable access
          links. Each row below is one recipient.
        </p>
        <form action={adminLogout}>
          <button type="submit" className={s.ghostButton}>
            [ SIGN OUT ]
          </button>
        </form>
      </div>

      <div className={s.divider} aria-hidden="true">
        <span className={s.dividerLine} />
        <span className={s.dividerLabel}>NEW INVITE</span>
        <span className={s.dividerLine} />
      </div>

      <CreateInviteForm />

      <div className={s.divider} aria-hidden="true">
        <span className={s.dividerLine} />
        <span className={s.dividerLabel}>LEDGER · {invites.length}</span>
        <span className={s.dividerLine} />
      </div>

      {invites.length === 0 ? (
        <p className={s.empty}>No invites issued yet.</p>
      ) : (
        <div className={s.tableWrap}>
          <table className={s.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Expires</th>
                <th>Status</th>
                <th>Opens</th>
                <th>Last opened</th>
                <th className={s.actionsCol}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {invites.map((invite) => {
                const url = makeInviteUrl(invite.id, origin);
                const expired =
                  new Date(invite.expiresAt).getTime() <= currentTimeMs;
                return (
                  <tr key={invite.id}>
                    <td>{invite.name}</td>
                    <td className={s.mono}>{invite.email}</td>
                    <td className={s.mono}>{formatDate(invite.expiresAt)}</td>
                    <td>
                      <span
                        className={`${s.chip} ${
                          invite.status === "revoked"
                            ? s.chipRevoked
                            : expired
                              ? s.chipExpired
                              : s.chipActive
                        }`}
                      >
                        {invite.status === "revoked"
                          ? "REVOKED"
                          : expired
                            ? "EXPIRED"
                            : "ACTIVE"}
                      </span>
                    </td>
                    <td className={s.mono}>{invite.opens}</td>
                    <td className={s.mono}>{formatDate(invite.lastOpenedAt)}</td>
                    <td>
                      <div className={s.rowActions}>
                        <CopyButton value={url} className={s.ghostButton} />
                        {invite.status === "revoked" ? (
                          <form action={reactivateInviteAction}>
                            <input type="hidden" name="id" value={invite.id} />
                            <button type="submit" className={s.ghostButton}>
                              [ REACTIVATE ]
                            </button>
                          </form>
                        ) : (
                          <form action={revokeInviteAction}>
                            <input type="hidden" name="id" value={invite.id} />
                            <button
                              type="submit"
                              className={`${s.ghostButton} ${s.danger}`}
                            >
                              [ REVOKE ]
                            </button>
                          </form>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
