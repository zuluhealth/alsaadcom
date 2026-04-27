"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Building2,
  Shield,
  Radio,
  Landmark,
  Anchor,
  Fuel,
  Wifi,
  Tv,
  type LucideIcon,
} from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import s from "./IndustriesShowcase.module.scss";

const iconMap: Record<string, LucideIcon> = {
  "building-2": Building2,
  shield: Shield,
  radio: Radio,
  landmark: Landmark,
  anchor: Anchor,
  fuel: Fuel,
  wifi: Wifi,
  tv: Tv,
};

interface IndustryItem {
  title: string;
  icon: string;
  description: string;
}

const industries: IndustryItem[] = [
  { title: "Government", icon: "landmark", description: "Critical infrastructure for national communications" },
  { title: "Military & Defense", icon: "shield", description: "Secure tactical communication systems" },
  { title: "Oil & Gas", icon: "fuel", description: "Remote connectivity for energy operations" },
  { title: "Telecom Operators", icon: "wifi", description: "Network infrastructure and optimization" },
  { title: "Marine", icon: "anchor", description: "Maritime communication and navigation" },
  { title: "Police & Public Safety", icon: "radio", description: "Emergency response networks" },
  { title: "Corporate & NGOs", icon: "building-2", description: "Enterprise connectivity solutions" },
  { title: "Media & Broadcasting", icon: "tv", description: "Broadcast infrastructure and satellite" },
];

export default function IndustriesShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.section}>
      <div className={s.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.reveal,
            ease: ANIMATION.easeOutExpo,
          }}
          className={s.header}
        >
          <p className={s.eyebrow}>
            Industries
          </p>
          <h2 className={s.heading}>
            Sectors We Serve
          </h2>
        </motion.div>

        <div className={s.grid}>
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  ease: ANIMATION.easeOutExpo,
                  delay: i * ANIMATION.stagger.fast,
                }}
              >
                <Link
                  href="/industries"
                  className={s.card}
                >
                  {/* Hover glow */}
                  <div
                    className={s.hoverGlow}
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
                    }}
                  />

                  <Icon
                    size={22}
                    className={s.icon}
                    strokeWidth={1.5}
                  />
                  <div className={s.cardContent}>
                    <h3 className={s.cardTitle}>
                      {industry.title}
                    </h3>
                    <p className={s.cardDescription}>
                      {industry.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
