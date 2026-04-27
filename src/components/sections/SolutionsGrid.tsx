"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import s from "./SolutionsGrid.module.scss";

interface SolutionCard {
  title: string;
  description: string;
  href: string;
  image: string;
}

const solutions: SolutionCard[] = [
  {
    title: "Telecommunications",
    description:
      "Advanced secured communications and RF systems engineered for the most demanding environments — from end-to-end network ecosystems to carrier-grade infrastructure.",
    href: "/solutions/telecommunications",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
  },
  {
    title: "Security",
    description:
      "Comprehensive security and technical solutions — layered detection, monitoring, and screening systems alongside specialized platforms for complex operations.",
    href: "/solutions/security",
    image: "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=800&q=80",
  },
];

export default function SolutionsGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.section}>
      {/* Section header */}
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
          What We Do
        </p>
        <h2 className={s.heading}>
          Solutions
        </h2>
      </motion.div>

      <div className={s.grid}>
        {solutions.map((solution, i) => (
          <motion.div
            key={solution.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.8,
              ease: ANIMATION.easeOutExpo,
              delay: i * 0.1,
            }}
          >
            <Link
              href={solution.href}
              className={s.cardLink}
            >
              {/* Image */}
              <div className={s.imageWrap}>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className={s.image}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Dark overlay gradient */}
                <div className={s.imageOverlay} />
              </div>

              {/* Content */}
              <div className={s.content}>
                <div className={s.contentInner}>
                  <div>
                    <h3 className={s.cardTitle}>
                      {solution.title}
                    </h3>
                    <p className={s.cardDescription}>
                      {solution.description}
                    </p>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className={s.arrow}
                    strokeWidth={1.5}
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
