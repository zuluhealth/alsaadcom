"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import s from "./LatestNews.module.scss";

interface NewsPreview {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const latestNews: NewsPreview[] = [
  {
    title: "AST Secures Major Government Communications Contract for National Infrastructure Upgrade",
    date: "2025-01-15",
    category: "Company News",
    slug: "government-communications-contract",
  },
  {
    title: "Expanding Partnership with Nokia for Next-Generation Network Solutions in Iraq",
    date: "2024-12-08",
    category: "Partnerships",
    slug: "nokia-partnership-expansion",
  },
  {
    title: "AST Completes Fiber Optic Deployment Across Three Southern Provinces",
    date: "2024-11-20",
    category: "Projects",
    slug: "fiber-optic-deployment-south",
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function LatestNews() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.section}>
      <div className={s.container}>
        <div className={s.headerRow}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
            }}
          >
            <p className={s.eyebrow}>
              Newsroom
            </p>
            <h2 className={s.heading}>
              Latest Updates
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: ANIMATION.duration.slow, delay: 0.3 }}
          >
            <Link
              href="/newsroom"
              className={s.viewAllDesktop}
            >
              View all news
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </motion.div>
        </div>

        <div className={s.grid}>
          {latestNews.map((article, i) => (
            <motion.div
              key={article.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                ease: ANIMATION.easeOutExpo,
                delay: i * ANIMATION.stagger.normal,
              }}
            >
              <Link
                href={`/newsroom/${article.slug}`}
                className={s.card}
              >
                {/* Hover glow */}
                <div
                  className={s.cardGlow}
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.03), transparent 60%)",
                  }}
                />

                <div className={s.cardBody}>
                  <div className={s.meta}>
                    <span className={s.category}>
                      {article.category}
                    </span>
                    <span className={s.date}>
                      {formatDate(article.date)}
                    </span>
                  </div>
                  <h3 className={s.cardTitle}>
                    {article.title}
                  </h3>
                </div>
                <div className={s.readMore}>
                  Read more
                  <ArrowUpRight
                    size={13}
                    className={s.readMoreArrow}
                    strokeWidth={1.5}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className={s.viewAllMobile}>
          <Link
            href="/newsroom"
            className={s.viewAllMobileLink}
          >
            View all news
            <ArrowUpRight size={13} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
