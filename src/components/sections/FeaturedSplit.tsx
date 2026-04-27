"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ANIMATION } from "@/lib/constants";
import s from "./FeaturedSplit.module.scss";

interface FeaturedSplitProps {
  title: string;
  href: string;
  className?: string;
}

export default function FeaturedSplit({
  title,
  href,
  className,
}: FeaturedSplitProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.9,
        ease: ANIMATION.easeOutExpo,
      }}
      className={className}
    >
      <Link href={href} className={s.link}>
        <div className={s.card}>
          {/* Left: White panel with title */}
          <div className={s.left}>
            <h3 className={s.title}>
              {title}
            </h3>
          </div>

          {/* Right: Dark panel */}
          <div className={s.right}>
            {/* Subtle gradient overlay */}
            <div
              className={s.gradientOverlay}
              style={{
                background:
                  "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.07), transparent 60%)",
              }}
            />

            <div className={s.iconWrap}>
              <ArrowUpRight
                size={20}
                className={s.icon}
                strokeWidth={1.5}
              />
            </div>
            <p className={s.readMore}>
              Read more
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
