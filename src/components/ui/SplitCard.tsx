"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import s from "./SplitCard.module.scss";

interface SplitCardProps {
  title: string;
  href: string;
  className?: string;
}

export default function SplitCard({ title, href, className }: SplitCardProps) {
  return (
    <Link href={href} className={`${s.wrapper}${className ? ` ${className}` : ""}`}>
      <motion.div
        className={s.card}
        whileHover={{
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2)",
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Left panel */}
        <div className={s.leftPanel}>
          <h3 className={s.title}>
            {title}
          </h3>
        </div>

        {/* Right panel */}
        <div className={s.rightPanel}>
          <div
            className={s.glow}
            style={{
              background:
                "radial-gradient(circle at 100% 100%, rgba(255,255,255,0.06), transparent 60%)",
            }}
          />
          <ArrowUpRight
            size={18}
            className={s.arrow}
            strokeWidth={1.5}
          />
          <span className={s.readMore}>
            Read more
          </span>
        </div>
      </motion.div>
    </Link>
  );
}
