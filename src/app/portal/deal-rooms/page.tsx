import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import s from "./page.module.scss";

export const metadata = {
  title: "Deal Rooms",
};

export default async function DealRoomsPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="TIER 2 // DEAL ROOMS"
          title="Deal Rooms"
          description="Per-relationship workspaces provisioned individually per principal or pursuit, with named logins issued to the people working the engagement."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={s.locked}>
          <div className={s.lockGlyph} aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="10.5"
                width="16"
                height="10"
                rx="1"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <path
                d="M7.5 10.5V7.5a4.5 4.5 0 0 1 9 0v3"
                stroke="currentColor"
                strokeWidth="1.25"
              />
              <circle cx="12" cy="15" r="1.25" fill="currentColor" />
              <path
                d="M12 16v2"
                stroke="currentColor"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <span className={s.classification}>[ TIER 2 // RESTRICTED ]</span>

          <div className={s.copy}>
            <p className={s.paragraph}>
              Deal rooms are per-relationship workspaces. Named logins are
              provisioned individually per principal or pursuit — access is
              scoped to the people working that specific engagement, and nothing
              in a deal room is visible from the general portal.
            </p>
            <p className={s.paragraph}>
              Inside, a deal room holds named clients and programs, deployment
              photography, co-branded material, and the live pipeline and
              pricing for that relationship. It is where a specific pursuit is
              worked, not a general reference library.
            </p>
          </div>

          <div className={s.factRow}>
            <div className={s.fact}>
              <span className={s.factLabel}>{"// NAMED LOGINS"}</span>
              <span className={s.factValue}>Provisioned individually</span>
            </div>
            <div className={s.fact}>
              <span className={s.factLabel}>{"// SCOPE"}</span>
              <span className={s.factValue}>Per principal or pursuit</span>
            </div>
            <div className={s.fact}>
              <span className={s.factLabel}>{"// CONTENTS"}</span>
              <span className={s.factValue}>
                Clients, programs, media, pipeline &amp; pricing
              </span>
            </div>
          </div>

          <p className={s.closing}>
            Access is provisioned individually. Contact your AST counterpart.
          </p>
        </div>
      </FadeIn>
    </div>
  );
}
