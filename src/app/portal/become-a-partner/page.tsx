import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import InquiryForm from "./InquiryForm";
import s from "./page.module.scss";

export const metadata = {
  title: "Become a Partner",
};

export default async function BecomeAPartnerPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="RESOURCES // 12"
          title="Become a Partner"
          description="Introduce your organization to the relevant AST desk. Whether you represent a principal or OEM, run an integration practice, or pursue a specific program in Iraq, this intake routes your inquiry to the team that owns the relationship."
        />
      </FadeIn>

      <div className={s.layout}>
        <FadeIn delay={0.05} className={s.asideWrap}>
          <aside className={s.aside} aria-labelledby="intake-context">
            <span className={s.asideNumber}>{"// 12"}</span>
            <h2 id="intake-context" className={s.asideTitle}>
              What happens next
            </h2>
            <p className={s.asideParagraph}>
              Every submission is logged and routed to the desk responsible for
              the named domain and geography. There is no automated approval —
              inquiries are reviewed by the relevant AST team and answered
              directly.
            </p>
            <ul className={s.asideList}>
              <li className={s.asideListItem}>
                <span className={s.asideMarker}>▸</span>
                Domain routing across telecommunications and security.
              </li>
              <li className={s.asideListItem}>
                <span className={s.asideMarker}>▸</span>
                Named principal / OEM context carried through to the desk.
              </li>
              <li className={s.asideListItem}>
                <span className={s.asideMarker}>▸</span>
                Geography-aware handling for Iraq and the wider region.
              </li>
            </ul>
          </aside>
        </FadeIn>

        <FadeIn delay={0.1} className={s.formWrap}>
          <InquiryForm />
        </FadeIn>
      </div>
    </div>
  );
}
