"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, ANIMATION } from "@/lib/constants";
import SaferTomorrowTagline from "@/components/ui/SaferTomorrowTagline";
import s from "./MobileMenu.module.scss";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panelVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      type: "tween" as const,
      duration: ANIMATION.duration.slow,
      ease: ANIMATION.easeOutExpo,
      when: "beforeChildren" as const,
      staggerChildren: ANIMATION.stagger.normal,
    },
  },
  exit: {
    x: "100%",
    transition: {
      type: "tween" as const,
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.ease,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: ANIMATION.duration.normal,
      ease: ANIMATION.easeOutExpo,
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: ANIMATION.duration.fast },
  },
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="mobile-menu-overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: ANIMATION.duration.normal }}
            className={s.overlay}
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            key="mobile-menu-panel"
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className={s.panel}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className={s.header}>
              <button
                type="button"
                onClick={onClose}
                className={s.closeBtn}
                aria-label="Close navigation menu"
              >
                <X className={s.closeIcon} strokeWidth={1.5} />
              </button>
            </div>

            <nav className={s.nav}>
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={s.navLink}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className={s.ctaWrapper}>
                <Link
                  href="/contact"
                  onClick={onClose}
                  className={s.ctaBtn}
                >
                  Get in Touch
                </Link>
              </motion.div>
            </nav>

            <div className={s.footerBar}>
              <SaferTomorrowTagline size="sm" className={s.footerText} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
