"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import s from "./CTABanner.module.scss";

const DynamicScene = dynamic(() => import("@/components/three/DynamicScene"), {
  ssr: false,
  loading: () => <div className={s.scene} />,
});

export default function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.section}>
      {/* Blue fiber optic animation background */}
      <DynamicScene
        scene="blue-fiber"
        className={s.scene}
        fallbackClassName={s.scene}
      />

      {/* Gradient overlays to blend animation with section */}
      <div className={s.bgOverlay} />
      <div className={s.gradientTop} />
      <div className={s.gradientBottom} />

      <div className={s.container}>
        <div className={s.inner}>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.slow,
              ease: ANIMATION.easeOutExpo,
            }}
            className={s.eyebrow}
          >
            Start a conversation
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.9,
              ease: ANIMATION.easeOutExpo,
              delay: 0.1,
            }}
            className={s.heading}
          >
            Ready to discuss your next project?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.slow,
              ease: ANIMATION.easeOutExpo,
              delay: 0.2,
            }}
            className={s.subtitle}
          >
            Our team of specialists is ready to help you find the right
            telecommunications, IT, or defense solution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.slow,
              ease: ANIMATION.easeOutExpo,
              delay: 0.3,
            }}
            className={s.ctaWrap}
          >
            <Link
              href="/contact"
              className={s.ctaButton}
            >
              Get in Touch
              <ArrowRight
                size={15}
                strokeWidth={2}
              />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
