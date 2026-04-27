"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ANIMATION } from "@/lib/constants";

import s from "./TelecomContent.module.scss";

export default function TelecomContent() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-50px" });
  const bodyRef = useRef(null);
  const bodyInView = useInView(bodyRef, { once: true, margin: "-50px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-50px" });

  return (
    <>
      <section ref={heroRef} className={s.hero}>
        <div className={s.heroBgImage}>
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80"
            alt="Telecommunications infrastructure"
            fill
            className={s.heroImage}
            priority
          />
          <div className={s.heroBgOverlay} />
        </div>
        <div className={s.heroInner}>
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: ANIMATION.duration.fast, ease: ANIMATION.easeOutExpo }}
            className={s.breadcrumb}
          >
            <Link href="/solutions" className={s.breadcrumbLink}>Solutions</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span className={s.breadcrumbCurrent}>Telecommunications</span>
          </motion.nav>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo, delay: 0.05 }}
            className={s.heroEyebrow}
          >
            Telecommunications
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: ANIMATION.duration.reveal, ease: ANIMATION.easeOutExpo, delay: 0.1 }}
            className={s.heroTitle}
          >
            Telecommunications Solutions
          </motion.h1>
        </div>
      </section>

      <div className={s.dividerWrap}><div className={s.subtleDivider} /></div>

      <section ref={bodyRef} className={s.bodySection}>
        <div className={s.bodyInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={bodyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: ANIMATION.easeOutExpo }}
            className={s.bodyContent}
          >
            <p>
              AST delivers advanced telecommunications solutions engineered for
              the most demanding and complex operating environments. Our secured
              communications portfolio is built around highly sophisticated RF
              systems and infrastructure designed to maintain reliable,
              resilient connectivity across multiple domains &mdash; land, sea,
              air, and satellite. We design and deploy end-to-end
              communications ecosystems, including network management platforms,
              relay architectures, and cross-domain link systems that perform
              where failure is not an option.
            </p>
            <p>
              Central to our delivery model is a team of technically strong
              Field Service Representatives (FSRs) embedded directly with our
              clients. Trained and certified by leading U.S. companies operating
              in Iraq, our FSRs bring deep technical expertise paired with
              strong on-the-ground local presence &mdash; ensuring rapid
              response, hands-on support, and sustained operational readiness
              wherever our clients need us. This embedded model means our
              clients aren&rsquo;t just buying technology; they&rsquo;re gaining
              a dedicated, highly qualified team working alongside them every
              day.
            </p>
          </motion.div>
        </div>
      </section>

      <div className={s.dividerWrap}><div className={s.subtleDivider} /></div>

      <section ref={ctaRef} className={s.ctaSection}>
        <div className={s.ctaBgDots}>
          <div
            className={s.ctaBgDotsInner}
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className={s.ctaInner}>
          <div className={s.ctaContent}>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo }}
              className={s.ctaEyebrow}
            >
              Let&apos;s Talk
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATION.duration.reveal, ease: ANIMATION.easeOutExpo, delay: 0.1 }}
              className={s.ctaHeading}
            >
              Discuss your requirements
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo, delay: 0.2 }}
              className={s.ctaDesc}
            >
              Whether you need a complete network build-out or targeted
              optimization, our telecommunications team is ready to deliver.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo, delay: 0.3 }}
              className={s.ctaActions}
            >
              <Link href="/contact" className={s.ctaBtnPrimary}>Get in Touch</Link>
              <Link href="/solutions" className={s.ctaBtnSecondary}>
                All Solutions<ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
