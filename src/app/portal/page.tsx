import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import { requirePartnerSession } from "@/lib/portal/session";
import { portalNav } from "@/lib/portal/nav";
import s from "./page.module.scss";

function formatSessionTimestamp(date: Date): string {
  const iso = date.toISOString().replace("T", " ").slice(0, 16);
  return `${iso} UTC`;
}

function formatNdaDate(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toISOString().slice(0, 10);
}

// One-line summary per section, keyed by href. Single source of truth for
// card copy; the grid itself is generated from `portalNav`.
const SECTION_SUMMARIES: Record<string, string> = {
  "/portal/overview":
    "What a principal gets by appointing AST as its channel into Iraq.",
  "/portal/why-ast":
    "How a certified, in-country integrator de-risks entry into the Iraqi market.",
  "/portal/telecommunications":
    "Deep panel on secured RF, carrier infrastructure, and 24/7 network operations.",
  "/portal/security":
    "Deep panel on detection, screening, and specialized security platforms.",
  "/portal/proven-delivery":
    "A stat wall of delivery under real operational conditions across Iraq.",
  "/portal/experience":
    "Sanitized program experience and lifecycle outcomes across deployments.",
  "/portal/footprint":
    "On-the-ground presence across Iraq and the sectors we serve.",
  "/portal/technology-partners":
    "The OEM ecosystem of authorized technology partners behind each build.",
  "/portal/compliance":
    "Governance posture led by TRACE due-diligence membership and process discipline.",
  "/portal/training":
    "The lifecycle model: operator readiness, maintainer tracks, and long-term sustainment.",
  "/portal/sectors":
    "Vertical solutions mapped to the sectors and mission needs we operate in.",
  "/portal/documents":
    "Watermarked library of datasheets, authorizations, and reference material.",
  "/portal/become-a-partner":
    "A routed intake to open a working relationship with AST.",
  "/portal/deal-rooms":
    "Tier-2 rooms provisioned per relationship for privileged, gated exchange.",
};

export default async function PortalHubPage() {
  const session = await requirePartnerSession();
  const timestamp = formatSessionTimestamp(new Date());

  // Flatten the nav to individual cards, skipping the Hub item itself, while
  // keeping the group label to use as each card's eyebrow.
  const cards = portalNav.flatMap((group) =>
    group.items
      .filter((item) => item.href !== "/portal")
      .map((item) => ({
        group: group.label,
        index: item.index,
        label: item.label,
        href: item.href,
        badge: item.badge,
        summary: SECTION_SUMMARIES[item.href] ?? "",
      }))
  );

  return (
    <div className={s.page}>
      <FadeIn>
        <div className={s.sessionStrip}>
          <span className={s.sessionItem}>
            <span className={s.sessionLabel}>SESSION</span>
            <span className={s.sessionValue}>{timestamp}</span>
          </span>
          <span className={s.sessionItem}>
            <span className={s.sessionLabel}>{"// OPERATOR"}</span>
            <span className={s.sessionValue}>{session.email}</span>
          </span>
          {session.ndaAcceptedAt ? (
            <span className={s.sessionItem}>
              <span className={s.sessionLabel}>{"// NDA ACK"}</span>
              <span className={s.sessionValue}>
                {formatNdaDate(session.ndaAcceptedAt)}
              </span>
            </span>
          ) : null}
        </div>

        <header className={s.hero}>
          <span className={s.heroEyebrow}>{"// BRIEFING ROOM"}</span>
          <div className={s.heroWordmark}>
            <Image
              src="/logo-ast.svg"
              alt="AST"
              width={683}
              height={270}
              className={s.heroLogo}
              priority
            />
          </div>
          <h1 className={s.heroPositioning}>
            A trusted systems integrator specializing in secured
            communications, security infrastructure, and telecommunications in
            Iraq for 22 years — a channel you plug into, not a market you
            build.
          </h1>
        </header>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className={s.grid} aria-label="Portal sections">
          {cards.map((card) => (
            <Link key={card.href} href={card.href} className={s.card}>
              <div className={s.cardHead}>
                {card.index ? (
                  <span className={s.cardIndex}>{card.index}</span>
                ) : null}
                <span className={s.cardEyebrow}>
                  <span className={s.cardEyebrowMark}>{"//"}</span>
                  {card.group}
                </span>
              </div>
              <h2 className={s.cardTitle}>{card.label}</h2>
              <p className={s.cardSummary}>{card.summary}</p>
              {card.badge === "PROVISIONED" ? (
                <span className={s.cardChip} aria-hidden="true">
                  [ TIER 2 // PROVISIONED PER RELATIONSHIP ]
                </span>
              ) : (
                <span className={s.cardCta} aria-hidden="true">
                  [ ENTER &rarr; ]
                </span>
              )}
            </Link>
          ))}
        </section>
      </FadeIn>
    </div>
  );
}
