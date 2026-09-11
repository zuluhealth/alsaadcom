import { requirePartnerSession } from "@/lib/portal/session";
import Image from "next/image";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import { vendors } from "@/data/portal/vendors";
import { getSubsection } from "@/data/portal/domains";
import s from "./page.module.scss";

export const metadata = {
  title: "Technology Partners",
};

/**
 * Derive a single grounded domain label for each vendor from the domains it
 * plugs into (via `applicableTo` subsection IDs → owning domain). No
 * deployment or client claims — coverage only, straight from vendors.ts.
 */
function domainCoverageFor(subsectionIds: string[]): string[] {
  const labels = new Set<string>();
  for (const id of subsectionIds) {
    const match = getSubsection(id);
    if (match) labels.add(match.domain.title);
  }
  return Array.from(labels);
}

export default async function TechnologyPartnersPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="PROOF // 07"
          title="Technology Partners"
          description="AST integrates and sustains platforms from the OEMs below under direct authorization. You'd be in good company."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={s.grid}>
          {vendors.map((vendor) => {
            const subsectionIds = vendor.applicableTo.map(
              (a) => a.subsectionId,
            );
            const domains = domainCoverageFor(subsectionIds);
            return (
              <article key={vendor.id} className={s.card}>
                <div className={s.logoWrap}>
                  <Image
                    src={vendor.logo}
                    alt={vendor.name}
                    width={140}
                    height={32}
                    className={s.logo}
                  />
                </div>
                <div className={s.cardBody}>
                  <h3 className={s.cardName}>{vendor.name}</h3>
                  <p className={s.cardBlurb}>{vendor.blurb}</p>
                  <div className={s.chips}>
                    {domains.map((domain) => (
                      <span key={domain} className={s.chip}>
                        {domain}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <p className={s.note}>
          Coverage reflects authorized integration and sustainment scope only.
          Deployment references and client names are disclosed in Tier-2 deal
          rooms.
        </p>
      </FadeIn>
    </div>
  );
}
