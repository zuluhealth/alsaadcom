"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATION } from "@/lib/constants";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  /** Direction the element fades in from. Defaults to "up". */
  direction?: Direction;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Additional class names */
  className?: string;
  /** Only animate once (default true) */
  once?: boolean;
  /** Stagger delay between children in seconds (wraps each child in its own animated container) */
  stagger?: number;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
};

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  duration = ANIMATION.duration.reveal,
  className,
  once = true,
  stagger,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: "-60px 0px",
  });

  const offset = directionOffset[direction];

  /* When stagger is provided, animate each child individually with incremental delays. */
  if (stagger != null) {
    const items = Array.isArray(children) ? children : [children];

    return (
      <div ref={ref} className={cn(className)}>
        {items.map((child, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: offset.x, y: offset.y }}
            animate={
              isInView
                ? { opacity: 1, x: 0, y: 0 }
                : { opacity: 0, x: offset.x, y: offset.y }
            }
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: ANIMATION.easeOutExpo,
            }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration,
        delay,
        ease: ANIMATION.easeOutExpo,
      }}
    >
      {children}
    </motion.div>
  );
}
