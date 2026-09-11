import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import TrainingCard from "@/components/portal/TrainingCard";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/ui/FadeIn";
import { trainingPrograms } from "@/data/portal/training";
import s from "./page.module.scss";

export const metadata = {
  title: "Training & Sustainment",
};

const sustainmentPillars = [
  {
    index: "01",
    title: "24/7 NOC & Remote Operations",
    text: "AST runs a multi-vendor NOC delivering 24/7 monitoring, KPI-driven optimization, change management, and structured vendor escalation across the customer estate.",
  },
  {
    index: "02",
    title: "On-Site Engineering & Spares",
    text: "Iraq-resident field engineers, regionally distributed spares stock, and structured RMA workflows minimize MTTR and protect uptime targets across distributed sites.",
  },
  {
    index: "03",
    title: "Lifecycle Refresh & Audit",
    text: "Lifecycle planning, firmware and security patch governance, scheduled audits, and capacity-refresh cadence keep deployments aligned with vendor roadmaps and program requirements.",
  },
];

export default async function TrainingPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="SUSTAINMENT"
          title="Training & Sustainment"
          description="Operator and engineer training programs designed for long-horizon mission readiness — built around customer-representative equipment, in-country instructors, and structured certification paths."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={s.intro}>
          <span className={s.introLabel}>PHILOSOPHY</span>
          <p className={s.introParagraph}>
            Sustainment is not a contract clause at AST — it is a design
            constraint. We invest in in-country instructors, customer-representative
            lab environments, and structured certification paths so that
            operators, maintainers, and NOC engineers can carry deployed systems
            forward without external dependency.
          </p>
          <p className={s.introParagraph}>
            Every program we deliver ships with a sustainment backbone:
            documented operator workflows, structured maintainer drills, and a
            measurable certification standard aligned to vendor and program
            requirements. Knowledge transfer is treated as a deliverable, not
            an afterthought.
          </p>
          <p className={s.introParagraph}>
            Programs run in Iraq with field cohorts on customer sites and
            remote tracks for distributed teams. Certifications are audited and
            renewed on a cadence — operator readiness is a state we measure, not
            a one-time event.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div>
          <header className={s.sectionHeader}>
            <span className={s.sectionLabel}>SECTION 01 // TRAINING PROGRAMS</span>
            <h3 className={s.sectionTitle}>
              Operator, maintainer & engineer tracks
            </h3>
          </header>
        </div>
      </FadeIn>

      <FadeIn delay={0.12}>
        <div className={s.grid}>
          {trainingPrograms.map((program) => (
            <TrainingCard key={program.id} program={program} />
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div>
          <header className={s.sectionHeader}>
            <span className={s.sectionLabel}>SECTION 02 // SUSTAINMENT MODEL</span>
            <h3 className={s.sectionTitle}>
              The AST sustainment backbone
            </h3>
          </header>
        </div>
      </FadeIn>

      <FadeIn delay={0.17}>
        <div className={s.pillars}>
          {sustainmentPillars.map((pillar) => (
            <article key={pillar.index} className={s.pillar}>
              <span className={s.pillarIndex}>PILLAR · {pillar.index}</span>
              <h4 className={s.pillarTitle}>{pillar.title}</h4>
              <p className={s.pillarText}>{pillar.text}</p>
            </article>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div className={s.cta}>
          <div className={s.ctaMeta}>
            <span className={s.ctaLabel}>NEXT STEP</span>
            <h4 className={s.ctaTitle}>
              Plan a training calendar for your program.
            </h4>
            <p className={s.ctaSub}>
              Tailored tracks, on-site delivery in Iraq, and structured
              certification paths — built to your operational reality.
            </p>
          </div>
          <Button
            variant="primary"
            size="md"
            href="mailto:training@alsaadtelecom.com?subject=Training%20Calendar%20Request"
          >
            Request Training Calendar
          </Button>
        </div>
      </FadeIn>
    </div>
  );
}
