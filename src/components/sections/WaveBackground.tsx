"use client";

import dynamic from "next/dynamic";

const SignalWave = dynamic(() => import("@/components/three/SignalWave"), {
  ssr: false,
  loading: () => null,
});

interface WaveBackgroundProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function WaveBackground({
  className,
  color,
  opacity,
}: WaveBackgroundProps) {
  return <SignalWave className={className} color={color} opacity={opacity} />;
}
