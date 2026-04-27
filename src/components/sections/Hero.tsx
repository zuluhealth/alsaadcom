"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import SaferTomorrowTagline from "@/components/ui/SaferTomorrowTagline";
import IraqiFlag from "@/components/ui/IraqiFlag";
import IraqMap from "@/components/ui/IraqMap";
import s from "./Hero.module.scss";

const DynamicScene = dynamic(() => import("@/components/three/DynamicScene"), {
  ssr: false,
  loading: () => <div className={s.scene} style={{ background: `#000000` }} />,
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.4 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: ANIMATION.easeOutExpo },
  },
};

export default function Hero() {
  return (
    <section className={s.section}>
      <DynamicScene scene="fiber-optic" className={s.scene} fallbackClassName={s.scene} />
      <div className={s.gradientBottom} />
      <div className={s.gradientLeft} />
      <div className={s.glow} />

      <div className={s.content}>
        <div className={s.inner}>
          <div className={s.row}>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className={s.copy}>
              <motion.div variants={itemVariants} className={s.eyebrowWrap}>
                <SaferTomorrowTagline size="md" />
              </motion.div>

              <motion.h1 variants={itemVariants} className={s.heading}>
                Critical infrastructure
                <br className={s.hiddenMobile} />
                {" "}for a safer{" "}
                <span className={s.gradientWord}>tomorrow.</span>
              </motion.h1>

              <motion.p variants={itemVariants} className={s.subtitle}>
                As a systems integrator with deep expertise in secured
                communications, security infrastructure, and telecommunications,
                we take a comprehensive approach&mdash;engineering solutions,
                maintaining them, and delivering sustained support throughout
                their lifecycle.
              </motion.p>

              <motion.div variants={itemVariants} className={s.ctas}>
                <Link href="/solutions" className={s.btnPrimary}>
                  Explore Solutions
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
                <Link href="/about" className={s.btnSecondary}>
                  Read More
                </Link>
                <Link href="/contact" className={s.btnSecondary}>
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: ANIMATION.easeOutExpo, delay: 0.35 }}
              className={s.identity}
            >
              <IraqiFlag className={s.identityFlag} />
              <IraqMap className={s.identityMap} />
            </motion.div>
          </div>
        </div>
      </div>

      <div className={s.fadeBottom} />
    </section>
  );
}
