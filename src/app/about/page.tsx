"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ANIMATION } from "@/lib/constants";

import StatsBar from "@/components/sections/StatsBar";
import CTABanner from "@/components/sections/CTABanner";
import WaveBackground from "@/components/sections/WaveBackground";
import s from "./page.module.scss";

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */
function AboutHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.hero}>
      <WaveBackground className={s.heroWave} color="#ffffff" opacity={1} />
      <div
        className={s.heroBg}
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 30%, rgba(255,255,255,0.04), transparent)",
        }}
      />

      <div className={s.heroInner}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easeOutExpo,
          }}
          className={s.heroEyebrow}
        >
          Who we are
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.9,
            ease: ANIMATION.easeOutExpo,
            delay: 0.1,
          }}
          className={s.heroTitle}
        >
          About AST
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easeOutExpo,
            delay: 0.2,
          }}
          className={s.heroDesc}
        >
          A trusted systems integrator specializing in secured communications,
          security infrastructure, and telecommunications for over 25 years.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Story                                                     */
/* ------------------------------------------------------------------ */
function Story() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.story}>
      <div className={s.storyInner}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.9,
            ease: ANIMATION.easeOutExpo,
          }}
          className={s.storyContent}
        >
          <div className={s.storyText}>
            <p>
              For over 25 years, AST has been a trusted systems integrator
              specializing in secured communications, security infrastructure,
              and telecommunications. What began as a focused operation has grown
              into a multidisciplinary engineering firm with two offices in Iraq
              and a reputation built on technical excellence, long-term
              partnerships, and an unwavering commitment to getting the job done
              right.
            </p>
            <p>
              At our core, we are engineers. Over 80% of our team members hold
              engineering backgrounds, which means every project we take
              on&mdash;from initial design through deployment and ongoing
              support&mdash;is driven by deep technical understanding rather than
              surface-level implementation. We don&rsquo;t just install
              technology; we engineer, integrate, and sustain it for the long
              term.
            </p>
            <p>
              Our solutions span two primary domains: advanced
              telecommunications and security &amp; engineered systems. On the
              telecom side, we deliver sophisticated RF and communications
              infrastructure built for the most demanding environments. On the
              security side, we provide layered detection, screening, and
              monitoring systems alongside specialized platforms for complex
              technical operations. Across both, we bring the same standard of
              precision and reliability.
            </p>
            <p>
              With over 6,000 users trained on the systems we deploy, AST
              doesn&rsquo;t walk away after installation. We invest in the people
              who operate our solutions, ensuring they have the knowledge and
              confidence to maximize the capabilities we put in their hands. That
              philosophy&mdash;building lasting capacity, not just delivering
              equipment&mdash;is what has kept our clients coming back for over
              two decades.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <Story />

      <StatsBar />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <CTABanner />
    </>
  );
}
