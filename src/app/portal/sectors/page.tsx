import { requirePartnerSession } from "@/lib/portal/session";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import { industries } from "@/data/industries";
import s from "./page.module.scss";

export const metadata = {
  title: "Solutions by Sector",
};

/**
 * Sector cards are generated from industries.ts. The two sectors whose domain
 * maps to a published solutions page link there directly; every other sector
 * carries a [ BRIEF ON REQUEST ] chip routing to the partner intake. No new
 * deep pages are introduced.
 */
const SECTOR_LINKS: Record<string, string> = {
  "telecom-operators": "/solutions/telecommunications",
  military: "/solutions/security",
  "police-public-safety": "/solutions/security",
};

export default async function SectorsPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="OPERATIONS // 10"
          title="Solutions by Sector"
          description="AST delivers across the sectors below. Published domain briefs link through directly; every other sector is briefed on request through the relevant desk."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={s.grid}>
          {industries.map((industry) => {
            const href = SECTOR_LINKS[industry.id];
            return (
              <article key={industry.id} className={s.card}>
                <h3 className={s.cardTitle}>{industry.title}</h3>
                <p className={s.cardDesc}>{industry.description}</p>
                <div className={s.cardFooter}>
                  {href ? (
                    <Link href={href} className={s.cardLink}>
                      <span>View domain brief</span>
                      <ArrowUpRight size={14} strokeWidth={1.75} />
                    </Link>
                  ) : (
                    <Link
                      href="/portal/become-a-partner"
                      className={s.chipLink}
                    >
                      [ BRIEF ON REQUEST ]
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </FadeIn>
    </div>
  );
}
