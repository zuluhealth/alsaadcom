"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";
import { ANIMATION } from "@/lib/constants";

import s from "./SecurityContent.module.scss";

export default function SecurityContent() {
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
            src="https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=1600&q=80"
            alt="Security infrastructure"
            fill
            className={s.heroImage}
            priority
          />
          <div className={s.heroBgOverlay} />
        </div>

        <div className={s.heroBgGrid}>
          <div
            className={s.heroBgGridInner}
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
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
            <span className={s.breadcrumbCurrent}>Security</span>
          </motion.nav>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: ANIMATION.duration.slow, ease: ANIMATION.easeOutExpo, delay: 0.05 }}
            className={s.heroEyebrow}
          >
            Security &amp; Engineered Systems
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: ANIMATION.duration.reveal, ease: ANIMATION.easeOutExpo, delay: 0.1 }}
            className={s.heroTitle}
          >
            Security Solutions
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
              AST provides a comprehensive range of security and technical
              solutions designed to protect critical assets, infrastructure,
              and operations. Our expertise spans both perimeter and internal
              security environments, where we deploy advanced detection,
              monitoring, and screening technologies tailored to each
              client&rsquo;s unique requirements. Whether safeguarding a
              facility&rsquo;s outer boundaries or securing controlled access
              points within, AST delivers layered, integrated systems that
              provide continuous situational awareness and threat
              identification.
            </p>
            <p>
              Beyond conventional security, AST maintains deep capabilities in
              specialized technical systems that support hazardous environment
              operations, high-value asset inspection, and threat
              neutralization. Our engineers work with sophisticated platforms
              and equipment that demand precision, reliability, and rigorous
              operational standards &mdash; ensuring our clients are prepared
              to respond effectively in high-stakes scenarios.
            </p>
            <p>
              AST also brings proven expertise in maintaining, modernizing, and
              managing the lifecycle of complex mechanical and electronic
              platforms. From large-scale vehicle and system overhauls to the
              integration of advanced monitoring and control technologies, we
              support mission-critical operations that require sustained
              performance and regulatory compliance. To ensure long-term
              operational continuity, AST offers tailored Service Level
              Agreements (SLAs) that provide clients with guaranteed response
              times, scheduled preventive maintenance, and ongoing technical
              support &mdash; giving them confidence that their systems will
              perform reliably throughout their operational lifecycle.
            </p>
            <p>
              What ties these capabilities together is AST&rsquo;s ability to
              operate at the intersection of security, engineering, and
              technology, delivering solutions across a wide spectrum of
              environments and challenges. Our multidisciplinary teams bring
              the technical depth and operational understanding needed to take
              on projects of virtually any scale or complexity, wherever
              precision and reliability matter the most.
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
              Secure Infrastructure
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
              Our security and engineering specialists are ready to discuss your
              infrastructure protection and technical requirements.
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
