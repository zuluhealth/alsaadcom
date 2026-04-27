"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Color, ShaderMaterial } from "three";

const vertexShader = `
  uniform float uTime;
  uniform float uScrollProgress;
  varying vec2 vUv;
  varying float vElevation;

  // Simplex noise helper
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x * 34.0) + 1.0) * x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vUv = uv;

    float freq = 2.0 + uScrollProgress * 3.0;
    float elevation = snoise(vec2(position.x * freq + uTime * 0.3, position.y * 1.5 + uTime * 0.2)) * 0.15;
    elevation += snoise(vec2(position.x * freq * 2.0 - uTime * 0.5, position.y * 3.0)) * 0.05;

    vElevation = elevation;

    vec3 newPosition = position;
    newPosition.z += elevation;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vec3 dark = vec3(0.0, 0.0, 0.0);

    float intensity = smoothstep(-0.1, 0.15, vElevation);
    vec3 color = mix(dark, uColor, intensity * 0.35);

    float alpha = (0.08 + intensity * 0.12) * uOpacity;

    gl_FragColor = vec4(color, alpha);
  }
`;

function WaveMesh({ color, opacity }: { color: string; opacity: number }) {
  const matRef = useRef<ShaderMaterial>(null);
  const scrollRef = useRef(0);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScrollProgress: { value: 0 },
      uColor: { value: new Color(color) },
      uOpacity: { value: opacity },
    }),
    [color, opacity]
  );

  useFrame(({ clock }) => {
    if (!matRef.current) return;
    matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    matRef.current.uniforms.uScrollProgress.value = scrollRef.current;
  });

  return (
    <mesh rotation={[-Math.PI / 4, 0, 0]} position={[0, -0.5, 0]}>
      <planeGeometry args={[12, 8, 128, 64]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

interface SignalWaveProps {
  className?: string;
  color?: string;
  opacity?: number;
}

export default function SignalWave({
  className,
  color = "#ffffff",
  opacity = 1,
}: SignalWaveProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
      >
        <WaveMesh color={color} opacity={opacity} />
      </Canvas>
    </div>
  );
}
