"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import s from "./LoginBackground.module.scss";

const BlueFiberScene = dynamic(() => import("./BlueFiberScene"), {
  ssr: false,
  loading: () => null,
});

/**
 * Full-bleed animated background for the partner / admin auth screens.
 *
 * On screens ≥ 768px we mount the Three.js BlueFiberScene. On small
 * devices we skip Three.js entirely (battery / GPU cost) and render a
 * subtle CSS radial gradient + scanlines as the fallback.
 *
 * Reduced-motion users also get the static fallback.
 */
export default function LoginBackground() {
  const [enableThree, setEnableThree] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mqWidth = window.matchMedia("(min-width: 768px)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setEnableThree(mqWidth.matches && !mqMotion.matches);
    };

    update();
    mqWidth.addEventListener("change", update);
    mqMotion.addEventListener("change", update);
    return () => {
      mqWidth.removeEventListener("change", update);
      mqMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <div className={s.root} aria-hidden="true">
      <div className={s.fallback} />
      {enableThree ? <BlueFiberScene className={s.scene} /> : null}
      <div className={s.vignette} />
    </div>
  );
}
