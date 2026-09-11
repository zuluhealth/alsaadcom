import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import { stats } from "@/data/stats";
import { trainingPrograms } from "@/data/portal/training";
import s from "./page.module.scss";

export const metadata = {
  title: "Proven Delivery",
};

// Stat wall — every entry rendered verbatim from src/data/stats.ts
function formatStat(value: number, suffix: string): string {
  return `${value.toLocaleString()}${suffix}`;
}

export default async function ProvenDeliveryPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="PROOF // 04"
          title="Proven delivery"
          description="22 years of engineering and sustainment inside Iraq, measured. The numbers below are AST's own operating record; the sustainment tracks that follow show the depth behind them."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.wallBlock}>
          <span className={s.blockLabel}>OPERATING RECORD</span>
          <ul className={s.statWall}>
            {stats.map((stat) => (
              <li key={stat.label} className={s.statCell}>
                <span className={s.statValue}>
                  {formatStat(stat.value, stat.suffix)}
                </span>
                <span className={s.statLabel}>{stat.label}</span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className={s.depthBlock}>
          <span className={s.blockLabel}>
            SUSTAINMENT DEPTH · {trainingPrograms.length} TRACKS
          </span>
          <p className={s.depthLede}>
            Delivery doesn&rsquo;t end at installation. AST builds operator
            capacity across every system it deploys through structured
            sustainment programs.
          </p>
          <div className={s.depthList}>
            {trainingPrograms.map((program, index) => {
              const idx = String(index + 1).padStart(2, "0");
              return (
                <article key={program.id} className={s.depthItem}>
                  <div className={s.depthItemHead}>
                    <span className={s.depthIndex}>{idx}</span>
                    <div className={s.depthItemMeta}>
                      <h3 className={s.depthItemTitle}>{program.title}</h3>
                      <span className={s.depthItemAudience}>
                        {program.audience}
                      </span>
                    </div>
                  </div>
                  <ul className={s.outcomeList}>
                    {program.outcomes.map((outcome) => (
                      <li key={outcome} className={s.outcome}>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>
      </FadeIn>
    </div>
  );
}
