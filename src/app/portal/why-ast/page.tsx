import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import { MapPin, Landmark, ShieldCheck, GraduationCap, Wrench } from "lucide-react";
import { stats } from "@/data/stats";
import { offices } from "@/data/offices";
import s from "./page.module.scss";

export const metadata = {
  title: "Why AST",
};

const hq = offices.find((office) => office.isHQ);
const cityList = offices.map((office) => office.city).join(", ");

// Training figures — sourced verbatim from src/data/stats.ts
const trainingHoursStat = stats.find(
  (stat) => stat.label === "Hours of training performed",
);
const peopleTrainedStat = stats.find(
  (stat) => stat.label === "People trained",
);
const opsHoursStat = stats.find((stat) => stat.label === "Hours of operation");

const trainingHours = trainingHoursStat
  ? `${trainingHoursStat.value.toLocaleString()}${trainingHoursStat.suffix}`
  : "40,000+";
const peopleTrained = peopleTrainedStat
  ? `${peopleTrainedStat.value.toLocaleString()}${peopleTrainedStat.suffix}`
  : "8,000+";
const opsHours = opsHoursStat
  ? `${opsHoursStat.value.toLocaleString()}${opsHoursStat.suffix}`
  : "700,000+";

// Proof blocks — every claim traces to offices.ts, about/values pages,
// projects.ts, TraceBadge, or stats.ts.
const proofBlocks = [
  {
    icon: MapPin,
    tag: "[ IN-COUNTRY PRESENCE ]",
    title: "Established on the ground in Iraq",
    body: `AST operates from ${offices.length} cities across Iraq${
      hq ? `, headquartered in ${hq.city}` : ""
    }: ${cityList}. Market entry doesn't start from zero — it starts with a partner already embedded in the operating environment.`,
  },
  {
    icon: Landmark,
    tag: "[ TRACK RECORD ]",
    title: "Long-term government & critical-infrastructure delivery",
    body: "For 22 years AST has delivered secured communications and infrastructure for Iraqi government ministries, armed forces, and critical-infrastructure operators — including nationwide secure government networks and tactical communications programs.",
  },
  {
    icon: ShieldCheck,
    tag: "[ DUE DILIGENCE ]",
    title: "TRACE-certified",
    body: "AST is a TRACE-certified company, undergoing rigorous third-party due-diligence review administered by TRACE International — including verification of corporate ownership, leadership, and operational practices, renewed on an annual cycle.",
  },
  {
    icon: GraduationCap,
    tag: "[ CAPACITY BUILDING ]",
    title: "A proven training record",
    body: `AST invests in the people who operate the systems it deploys: ${trainingHours} hours of training performed and ${peopleTrained} people trained. We build lasting operator capacity, not just deliver equipment.`,
  },
  {
    icon: Wrench,
    tag: "[ SUSTAINMENT ]",
    title: "Sustained operations, not one-off installs",
    body: `AST engineers, integrates, and sustains systems for the long term — ${opsHours} hours of operation behind us. Partners get a channel that stays embedded through the full lifecycle.`,
  },
];

export default async function WhyAstPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="BRIEFING // 02"
          title="De-risking entry into the Iraqi market"
          description="Bringing technology into Iraq means navigating an environment that rewards local presence and long-term commitment. AST removes that risk — an established, vetted, in-country partner with a three-decade delivery record."
        />
      </FadeIn>

      <div className={s.proofGrid}>
        {proofBlocks.map((block, index) => {
          const Icon = block.icon;
          return (
            <FadeIn key={block.tag} delay={0.05 + index * 0.05}>
              <article className={s.proof}>
                <div className={s.proofHead}>
                  <span className={s.proofIcon} aria-hidden="true">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span className={s.proofTag}>{block.tag}</span>
                </div>
                <h3 className={s.proofTitle}>{block.title}</h3>
                <p className={s.proofBody}>{block.body}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.1}>
        <section className={s.closing}>
          <span className={s.closingLabel}>THE NET</span>
          <p className={s.closingText}>
            Trust, reliability, and delivering our promises with superior
            performance are the standards by which AST measures every project.
            For a principal weighing Iraq, that translates to a lower-risk path
            to market — carried by a partner who is already there.
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
