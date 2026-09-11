import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import { Building2, Radio, Users, MapPin } from "lucide-react";
import { stats } from "@/data/stats";
import { offices } from "@/data/offices";
import s from "./page.module.scss";

export const metadata = {
  title: "Overview",
};

// Engineer share — sourced verbatim from src/data/stats.ts
const engineerStat = stats.find(
  (stat) => stat.label === "Team members who are engineers",
);

// Positioning pillars — copy grounded in about page + values page + stats.ts.
const pillars = [
  {
    icon: Building2,
    label: "SYSTEMS INTEGRATOR",
    title: "Engineered, integrated, sustained.",
    body: "For 22 years, AST has been a trusted systems integrator specializing in secured communications, security infrastructure, and telecommunications — engineering and sustaining systems for the long term rather than simply installing equipment.",
  },
  {
    icon: Users,
    title: "An engineer-heavy team.",
    label: "TECHNICAL DEPTH",
    body: `At our core, we are engineers. ${
      engineerStat ? `${engineerStat.value}${engineerStat.suffix}` : "80%"
    } of our team members hold engineering backgrounds, so every project — from initial design through deployment and ongoing support — is driven by deep technical understanding rather than surface-level implementation.`,
  },
  {
    icon: Radio,
    label: "MULTIDISCIPLINARY DOMAINS",
    title: "Two domains, one standard.",
    body: "Our solutions span two primary domains: advanced telecommunications and security & engineered systems. Across both, we bring the same standard of precision and reliability — sophisticated RF and communications infrastructure alongside layered detection, screening, and monitoring systems.",
  },
  {
    icon: MapPin,
    label: "IN-COUNTRY DEPTH",
    title: "Depth in the Iraqi environment.",
    body: `AST combines deep local knowledge of the Iraqi operating environment with partnerships alongside the world's leading technology companies. Operations run out of ${offices.length} cities across Iraq, led from our Baghdad headquarters.`,
  },
];

export default async function OverviewPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="BRIEFING // 01"
          title="Your channel into Iraq"
          description="A trusted systems integrator with 22 years of engineering delivery inside Iraq — positioned to carry partner technology into one of the region's most demanding operating environments."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.thesis}>
          <span className={s.thesisLabel}>POSITIONING</span>
          <p className={s.thesisText}>
            AST began as a focused operation and has grown into a
            multidisciplinary engineering firm operating across Iraq, with a
            reputation built on technical excellence, long-term partnerships,
            and an unwavering commitment to getting the job done right. For a
            technology principal, that in-country depth is a channel — a
            local partner that engineers, integrates, and sustains your
            systems on the ground.
          </p>
        </section>
      </FadeIn>

      <div className={s.pillarGrid}>
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <FadeIn key={pillar.label} delay={0.05 + index * 0.05}>
              <article className={s.pillar}>
                <div className={s.pillarHead}>
                  <span className={s.pillarIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className={s.pillarLabel}>{pillar.label}</span>
                </div>
                <h3 className={s.pillarTitle}>{pillar.title}</h3>
                <p className={s.pillarBody}>{pillar.body}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.1}>
        <section className={s.markers}>
          <span className={s.markersLabel}>AT A GLANCE</span>
          <ul className={s.markerList}>
            <li className={s.marker}>
              <span className={s.markerValue}>22</span>
              <span className={s.markerLabel}>Years of excellence</span>
            </li>
            <li className={s.marker}>
              <span className={s.markerValue}>
                {engineerStat
                  ? `${engineerStat.value}${engineerStat.suffix}`
                  : "80%"}
              </span>
              <span className={s.markerLabel}>Engineers on the team</span>
            </li>
            <li className={s.marker}>
              <span className={s.markerValue}>{offices.length}</span>
              <span className={s.markerLabel}>Cities across Iraq</span>
            </li>
          </ul>
        </section>
      </FadeIn>
    </div>
  );
}
