import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";

import SolutionsGrid from "@/components/sections/SolutionsGrid";
import StatsBar from "@/components/sections/StatsBar";
import PartnersBar from "@/components/sections/PartnersBar";
import CTABanner from "@/components/sections/CTABanner";
import s from "./page.module.scss";
import { createPageMetadata } from "@/lib/seo";
import { SITE_NAME, SITE_TAGLINE } from "@/lib/constants";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    path: "/",
  }),
  title: { absolute: `${SITE_NAME} — ${SITE_TAGLINE}` },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Subtle divider */}
      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      {/* Solutions Grid */}
      <section className={s.solutionsSection}>
        <SolutionsGrid />
      </section>

      {/* Stats */}
      <StatsBar />

      {/* Partners */}
      <PartnersBar />

      {/* Subtle divider */}
      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      {/* CTA */}
      <CTABanner />
    </>
  );
}
