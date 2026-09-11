"use client";

import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const shouldUseNativeScroll = window.matchMedia(
      "(prefers-reduced-motion: reduce), (pointer: coarse)"
    ).matches;
    if (shouldUseNativeScroll) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrame = 0;
    let isRunning = !document.hidden;

    function raf(time: number) {
      if (!isRunning) return;
      lenis.raf(time);
      animationFrame = requestAnimationFrame(raf);
    }

    const handleVisibilityChange = () => {
      isRunning = !document.hidden;
      cancelAnimationFrame(animationFrame);
      if (isRunning) animationFrame = requestAnimationFrame(raf);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    animationFrame = requestAnimationFrame(raf);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrame);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
