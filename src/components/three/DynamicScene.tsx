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
  const [isPageVisible, setIsPageVisible] = useState(true);

  useEffect(() => {
    const capabilityFrame = requestAnimationFrame(() => {
      try {
        const canvas = document.createElement("canvas");
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;
        const device = navigator as Navigator & {
          connection?: { saveData?: boolean };
        };
        const isConstrainedDevice =
          device.connection?.saveData === true;

        if (!gl || prefersReducedMotion || isConstrainedDevice) {
          setHasError(true);
          return;
        }

        setCanRender(true);
      } catch {
        setHasError(true);
      }
    });

    return () => cancelAnimationFrame(capabilityFrame);
  }, []);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPageVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (hasError || !canRender || !isPageVisible) {
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
