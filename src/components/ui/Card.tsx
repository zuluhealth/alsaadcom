"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import s from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Card({ children, className, href }: CardProps) {
  const cardClasses = `${s.card}${className ? ` ${className}` : ""}`;

  const content = (
    <motion.div
      className={cardClasses}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.2), 0 0 20px rgba(59, 130, 246, 0.05)",
      }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className={s.linkWrapper}>
        {content}
      </Link>
    );
  }

  return content;
}
