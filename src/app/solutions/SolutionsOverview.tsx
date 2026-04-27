"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { Radio, Shield, ArrowRight, type LucideIcon } from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import WaveBackground from "@/components/sections/WaveBackground";

import s from "./SolutionsOverview.module.scss";

interface SolutionCategory { title: string; slug: string; description: string; icon: LucideIcon; }

const categories: SolutionCategory[] = [
  { title: "Telecommunications", slug: "telecommunications", description: "Advanced secured communications and RF systems engineered for the most demanding environments — from end-to-end network ecosystems to carrier-grade infrastructure.", icon: Radio },
  { title: "Security", slug: "security", description: "Comprehensive security and technical solutions — layered detection, monitoring, and screening systems alongside specialized platforms for complex operations.", icon: Shield },
];

export default function SolutionsOverview() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <>
      <section ref={heroRef} className={s.hero}>
        <WaveBackground className={s.heroWave} color="#dbe4f2" opacity={0.9} />
        <div className={s.heroBgGradient} style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05), transparent)" }} />
        <div className={s.heroBgDots}>
          <div className={s.heroBgDotsInner} style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        </div>
        <div className={s.heroInner}>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo }} className={s.heroEyebrow}>What We Deliver</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: ANIMATION.duration.reveal, ease: ANIMATION.easeOutExpo, delay: 0.1 }} className={s.heroTitle}>Our Solutions</motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={heroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo, delay: 0.2 }} className={s.heroDesc}>AST delivers end-to-end solutions across two core domains — advanced telecommunications and security &amp; engineered systems — built on deep technical expertise and sustained through long-term partnership.</motion.p>
        </div>
      </section>

      <div className={s.dividerWrap}><div className={s.subtleDivider} /></div>

      <section ref={gridRef} className={s.gridSection}>
        <div className={s.gridInner}>
          <div className={s.grid}>
            {categories.map((category, i) => {
              const Icon = category.icon;
              return (
                <motion.div key={category.slug} initial={{ opacity: 0, y: 30 }} animate={gridInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: ANIMATION.duration.reveal, ease: ANIMATION.easeOutExpo, delay: i * ANIMATION.stagger.slow }}>
                  <Link href={`/solutions/${category.slug}`} className={s.cardLink} style={{ backgroundImage: "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)" }}>
                    <div>
                      <div className={s.cardIconBox}>
                        <Icon size={24} className={s.cardIcon} strokeWidth={1.5} />
                      </div>
                      <h2 className={s.cardTitle}>{category.title}</h2>
                      <p className={s.cardDesc}>{category.description}</p>
                    </div>
                    <div className={s.cardCta}>
                      <span>Explore</span>
                      <ArrowRight size={16} className={s.cardCtaArrow} strokeWidth={1.5} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <div className={s.dividerWrap}><div className={s.subtleDivider} /></div>

      <section className={s.ctaSection}>
        <div className={s.ctaInner}>
          <div className={s.ctaContent}>
            <p className={s.ctaEyebrow}>Start a conversation</p>
            <h2 className={s.ctaHeading}>Not sure which solution is right for you?</h2>
            <p className={s.ctaDesc}>Our team of specialists can help you identify the right combination of solutions for your unique requirements.</p>
            <Link href="/contact" className={s.ctaBtn}>Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  );
}
