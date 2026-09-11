import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import TraceBadge from "@/components/ui/TraceBadge";
import s from "./page.module.scss";

export const metadata = {
  title: "Compliance & Governance",
};

/**
 * Governance posture grounded ONLY in existing AST site language — the
 * TRACE certification (values page + TraceBadge) and process discipline
 * evidenced by the sustainment/training record. No invented standards.
 */
const GOVERNANCE_POINTS = [
  {
    label: "DUE DILIGENCE",
    title: "Independent third-party review",
    body: "AST undergoes rigorous third-party due diligence administered by TRACE International, including verification of corporate ownership, leadership, and operational practices, renewed on an annual cycle.",
  },
  {
    label: "TRANSPARENT OPERATIONS",
    title: "Integrity as an operating standard",
    body: "Transparency in pricing, honesty in timelines, and accountability for results define how AST operates. In an industry where trust is paramount, integrity is treated as the company's most valuable asset.",
  },
  {
    label: "CODE OF CONDUCT",
    title: "Documented conduct & reporting",
    body: "AST maintains a documented Code of Conduct, a confidential reporting channel for employees and partners, and a zero-tolerance policy on bribery and corruption.",
  },
  {
    label: "PARTNER VETTING",
    title: "Third-party screening",
    body: "Agents, consultants, and suppliers engaged on behalf of AST are screened against international sanctions lists and assessed for compliance risk before engagement.",
  },
];

const STANDARDS = [
  {
    name: "TRACE Certified",
    detail:
      "TRACE International anti-bribery due diligence certification, recertified annually.",
  },
  {
    name: "FCPA Aligned",
    detail:
      "Policies and procedures aligned with the U.S. Foreign Corrupt Practices Act.",
  },
  {
    name: "UK Anti-Bribery",
    detail:
      "Aligned with the UK Bribery Act 2010, with annual training delivered to every employee.",
  },
];

export default async function CompliancePage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="OPERATIONS // 08"
          title="Compliance & Governance"
          description="AST is a TRACE-certified company that abides by FCPA and UK Anti-Bribery standards and more. Governance is treated as an operating discipline, not a disclosure exercise."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.leadTile}>
          <div className={s.leadBadge}>
            <TraceBadge />
          </div>
          <div className={s.leadCopy}>
            <span className={s.leadTag}>[ LEAD CREDENTIAL ]</span>
            <h3 className={s.leadTitle}>TRACE International Certification</h3>
            <p className={s.leadText}>
              TRACE certification is renewed annually, with each cycle including
              refreshed background checks, updated questionnaires, and
              re-attestation of AST&rsquo;s anti-bribery commitments. Select the
              badge for the full certification breakdown.
            </p>
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.section}>
          <span className={s.sectionLabel}>[ GOVERNANCE POSTURE ]</span>
          <div className={s.postureGrid}>
            {GOVERNANCE_POINTS.map((point) => (
              <article key={point.label} className={s.postureCard}>
                <span className={s.postureBadge}>{point.label}</span>
                <h4 className={s.postureTitle}>{point.title}</h4>
                <p className={s.postureText}>{point.body}</p>
              </article>
            ))}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.section}>
          <span className={s.sectionLabel}>[ STANDARDS ]</span>
          <ul className={s.standardsList}>
            {STANDARDS.map((standard) => (
              <li key={standard.name} className={s.standardRow}>
                <span className={s.standardName}>{standard.name}</span>
                <span className={s.standardDetail}>{standard.detail}</span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.section}>
          <span className={s.sectionLabel}>[ PROCESS DISCIPLINE ]</span>
          <p className={s.disciplineText}>
            Governance discipline extends into delivery. AST-run programs are
            underpinned by structured operator readiness, documented escalation
            and reporting flows, standardized preventive-maintenance and
            calibration routines, and change-control workflows — the same
            process rigor that carries a national network from acceptance test
            through years of sustainment.
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
