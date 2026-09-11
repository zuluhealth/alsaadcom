import { requirePartnerSession } from "@/lib/portal/session";
import PortalSection from "@/components/portal/PortalSection";
import FadeIn from "@/components/ui/FadeIn";
import { MapPin } from "lucide-react";
import { offices } from "@/data/offices";
import { industries } from "@/data/industries";
import s from "./page.module.scss";

export const metadata = {
  title: "Iraq Footprint",
};

const hqCount = offices.filter((office) => office.isHQ).length;

export default async function FootprintPage() {
  await requirePartnerSession();
  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="PROOF // 06"
          title="Iraq footprint"
          description="AST operations are rooted across Iraq — a national footprint of city offices led from Baghdad, delivering into every sector AST serves."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <section className={s.officesBlock}>
          <span className={s.blockLabel}>
            OFFICES · {offices.length} CITIES · {hqCount} HQ
          </span>
          <ul className={s.officeGrid}>
            {offices.map((office) => (
              <li key={office.city} className={s.office}>
                <div className={s.officeHead}>
                  <span className={s.officeIcon} aria-hidden="true">
                    <MapPin size={16} strokeWidth={1.5} />
                  </span>
                  {office.isHQ ? (
                    <span className={s.officeBadge}>HQ</span>
                  ) : null}
                </div>
                <h3 className={s.officeCity}>{office.city}</h3>
                <span className={s.officeCoords}>
                  {office.coordinates.lat.toFixed(4)}°N,{" "}
                  {office.coordinates.lng.toFixed(4)}°E
                </span>
              </li>
            ))}
          </ul>
        </section>
      </FadeIn>

      <FadeIn delay={0.1}>
        <section className={s.sectorsBlock}>
          <span className={s.blockLabel}>
            SECTOR SPLIT · {industries.length} SECTORS
          </span>
          <p className={s.sectorsLede}>
            AST delivers across the full breadth of Iraq&rsquo;s critical
            sectors — from government and defense to oil &amp; gas, telecom
            operators, and beyond.
          </p>
          <div className={s.sectorGrid}>
            {industries.map((industry, index) => {
              const idx = String(index + 1).padStart(2, "0");
              return (
                <article key={industry.id} className={s.sector}>
                  <span className={s.sectorIndex}>{idx}</span>
                  <h3 className={s.sectorTitle}>{industry.title}</h3>
                </article>
              );
            })}
          </div>
        </section>
      </FadeIn>

      <FadeIn delay={0.15}>
        <section className={s.disclosure}>
          <span className={s.disclosureTag}>
            [ DISCLOSURE // TIER 2 ]
          </span>
          <p className={s.disclosureText}>
            Client names are disclosed in Tier-2 deal rooms only. Provisioned
            per relationship — contact your AST counterpart.
          </p>
        </section>
      </FadeIn>
    </div>
  );
}
