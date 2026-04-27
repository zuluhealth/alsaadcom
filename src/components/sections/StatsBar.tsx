"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { ANIMATION } from "@/lib/constants";
import s from "./StatsBar.module.scss";

interface Stat {
  label: string;
  value: number;
  suffix: string;
}

const stats: Stat[] = [
  { label: "Securing Iraqi borders", value: 3750, suffix: "+ km" },
  { label: "Team members", value: 200, suffix: "+" },
  { label: "Hours of operation", value: 700000, suffix: "+" },
  { label: "Hours of training performed", value: 40000, suffix: "+" },
  { label: "People trained", value: 8000, suffix: "+" },
  { label: "Team members who are engineers", value: 80, suffix: "%" },
  { label: "Network elements installed", value: 700, suffix: "+" },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
  delay,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
  delay: number;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("en-US")
  );

  useEffect(() => {
    if (!isInView) return;

    const timeout = setTimeout(() => {
      const controls = animate(count, value, {
        duration: 1.8,
        ease: [0.22, 1, 0.36, 1],
      });
      return () => controls.stop();
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [isInView, value, count, delay]);

  return (
    <span className={s.tabularNums}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.section}>
      {/* Subtle background gradient */}
      <div
        className={s.bgGradient}
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(255,255,255,0.03), transparent)",
        }}
      />

      <div className={s.container}>
        <div className={s.grid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: ANIMATION.easeOutExpo,
                delay: i * 0.08,
              }}
              className={s.stat}
            >
              <div className={s.value}>
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  isInView={isInView}
                  delay={i * 0.08}
                />
              </div>
              <p className={s.label}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
