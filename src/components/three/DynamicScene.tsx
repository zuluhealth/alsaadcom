"use client";

import { Suspense, lazy, useState, useEffect } from "react";
import WebGLFallback from "./WebGLFallback";

type SceneType = "fiber-optic" | "blue-fiber" | "network" | "signal-wave" | "particle-field";

const scenes = {
  "fiber-optic": lazy(() => import("./FiberOpticScene")),
  "blue-fiber": lazy(() => import("./BlueFiberScene")),
  "network": lazy(() => import("./NetworkTopology")),
  "signal-wave": lazy(() => import("./SignalWave")),
  "particle-field": lazy(() => import("./ParticleField")),
};

interface DynamicSceneProps {
  scene: SceneType;
  className?: string;
  fallbackClassName?: string;
}

export default function DynamicScene({
  scene,
  className,
  fallbackClassName,
}: DynamicSceneProps) {
  const [canRender, setCanRender] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Check for WebGL support and device capability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
      if (!gl) {
        setHasError(true);
        return;
      }

      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) {
        setHasError(true);
        return;
      }

      setCanRender(true);
    } catch {
      setHasError(true);
    }
  }, []);

  if (hasError || !canRender) {
    return <WebGLFallback className={fallbackClassName || className} />;
  }

  const SceneComponent = scenes[scene];

  return (
    <Suspense
      fallback={<WebGLFallback className={fallbackClassName || className} />}
    >
      <SceneComponent className={className} />
    </Suspense>
  );
}
