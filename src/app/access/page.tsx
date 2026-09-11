import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LoginBackground from "@/components/three/LoginBackground";
import { getActiveInvite, verifyToken } from "@/lib/portal/invites";
import AcceptForm from "./AcceptForm";
import s from "./page.module.scss";

export const metadata: Metadata = {
  title: "Access",
  description: "Signed partner access link.",
  robots: { index: false, follow: false },
};

export default async function AccessPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const id = token ? verifyToken(token) : null;
  const invite = id ? await getActiveInvite(id) : null;

  return (
    <div className={s.page}>
      <LoginBackground />

      <div className={s.classification} aria-hidden="true">
        <span>PARTNER ACCESS // SIGNED LINK</span>
      </div>

      <main className={s.main}>
        <section className={s.content}>
          {invite && token ? (
            <>
              <p className={s.eyebrow}>[ SECURE PORTAL // INVITATION VERIFIED ]</p>
              <h1 className={s.title}>Welcome, {invite.name.split(" ")[0]}.</h1>
              <p className={s.lede}>
                Your personal access to the AST partner briefing room has been
                verified. Acknowledge the confidentiality terms below to enter.
              </p>

              <div className={s.divider} aria-hidden="true">
                <span className={s.dividerLine} />
                <span className={s.dividerLabel}>CONFIRM &amp; ENTER</span>
                <span className={s.dividerLine} />
              </div>

              <AcceptForm
                token={token}
                name={invite.name}
                email={invite.email}
              />

              <p className={s.footnote}>
                SECURE TRANSPORT &nbsp;//&nbsp; SESSION-BOUND &nbsp;//&nbsp; MENA
                REGION
              </p>
            </>
          ) : (
            <>
              <p className={s.eyebrow}>[ LINK NO LONGER VALID ]</p>
              <h1 className={s.title}>Access Withdrawn</h1>
              <p className={s.lede}>
                This access link has expired or been withdrawn. Contact your AST
                counterpart.
              </p>

              <Link href="/contact" className={s.contactButton}>
                <span className={s.contactButtonFill} aria-hidden="true" />
                <span className={s.contactButtonContent}>
                  Get in Touch
                  <ArrowRight size={14} strokeWidth={1.75} />
                </span>
              </Link>

              <p className={s.footnote}>
                SECURE TRANSPORT &nbsp;//&nbsp; SESSION-BOUND &nbsp;//&nbsp; MENA
                REGION
              </p>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
