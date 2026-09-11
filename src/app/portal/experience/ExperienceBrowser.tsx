"use client";

import { useMemo, useState } from "react";
import PortalSection from "@/components/portal/PortalSection";
import ProgramCard from "@/components/portal/ProgramCard";
import FadeIn from "@/components/ui/FadeIn";
import type { ProgramExperience } from "@/lib/portal/types";
import s from "./page.module.scss";

const ALL_FILTER = "All";

export default function ExperienceBrowser({ programs }: { programs: ProgramExperience[] }) {
  const sectors = useMemo(() => {
    const set = new Set(programs.map((p) => p.sector));
    return [ALL_FILTER, ...Array.from(set).sort()];
  }, [programs]);

  const [activeSector, setActiveSector] = useState<string>(ALL_FILTER);

  const filtered = useMemo(() => {
    if (activeSector === ALL_FILTER) return programs;
    return programs.filter((p) => p.sector === activeSector);
  }, [programs, activeSector]);

  // Featured program: first one matching the filter (or the global first one)
  const featured = filtered[0];
  const rest = filtered.slice(1);

  const counts = useMemo(() => {
    const map = new Map<string, number>();
    map.set(ALL_FILTER, programs.length);
    for (const p of programs) {
      map.set(p.sector, (map.get(p.sector) ?? 0) + 1);
    }
    return map;
  }, [programs]);

  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="PROGRAMS"
          title="Program Experience"
          description="Sanitized briefs from active and completed engagements across Iraq and the broader MENA region. Full program details are available under NDA via the AST program office."
        />
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={s.filterRow}>
          <span className={s.filterLabel}>FILTER BY SECTOR</span>
          <ul className={s.chips} role="tablist" aria-label="Filter by sector">
            {sectors.map((sector) => {
              const isActive = sector === activeSector;
              return (
                <li key={sector}>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${s.chip} ${isActive ? s.chipActive : ""}`}
                    onClick={() => setActiveSector(sector)}
                  >
                    <span>{sector}</span>
                    <span className={s.chipCount}>
                      {String(counts.get(sector) ?? 0).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </FadeIn>

      {!featured ? (
        <p className={s.empty}>
          No programs match the selected sector.
        </p>
      ) : (
        <>
          <FadeIn delay={0.1}>
            <div className={s.featuredBlock}>
              <span className={s.featuredLabel}>FEATURED PROGRAM</span>
              <article className={s.featured}>
                <div className={s.featuredMeta}>
                  <span>{featured.sector.toUpperCase()}</span>
                  <span aria-hidden="true">{"//"}</span>
                  <span>{featured.year}</span>
                  <span aria-hidden="true">{"//"}</span>
                  <span>{featured.client}</span>
                </div>
                <h3 className={s.featuredTitle}>{featured.title}</h3>
                <p className={s.featuredScope}>{featured.scope}</p>
                <p className={s.featuredOutcome}>
                  <span className={s.featuredOutcomeLabel}>OUTCOME —</span>
                  {featured.outcome}
                </p>
                {featured.technologies.length > 0 ? (
                  <ul className={s.featuredTags}>
                    {featured.technologies.map((t) => (
                      <li key={t} className={s.featuredTag}>
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </article>
            </div>
          </FadeIn>

          {rest.length > 0 ? (
            <FadeIn delay={0.15}>
              <div className={s.featuredBlock}>
                <span className={s.gridLabel}>
                  ADDITIONAL PROGRAMS · {String(rest.length).padStart(2, "0")}
                </span>
                <div className={s.grid}>
                  {rest.map((program) => (
                    <ProgramCard key={program.id} program={program} />
                  ))}
                </div>
              </div>
            </FadeIn>
          ) : null}
        </>
      )}
    </div>
  );
}
