"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { CanvasTexture, ShaderMaterial, DoubleSide, LinearFilter } from "three";
import s from "./IraqiFlag.module.scss";

interface IraqiFlagProps {
  className?: string;
}

// Official Iraqi flag colors
const RED = "#CE1126";
const WHITE = "#FFFFFF";
const BLACK = "#000000";
const GREEN = "#007A3D";

/* Vertex shader: cloth-like displacement using layered sine waves whose
   amplitude grows from the pole (uv.x = 0) toward the free edge (uv.x = 1).
   This mimics how cloth flutters more at the unattached end. */
const vertexShader = /* glsl */ `
  uniform float uTime;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;

    // Amplitude envelope: 0 at the pole, ~1 at the free edge.
    float strength = pow(uv.x, 1.4);

    // Three overlapping waves at different freqs/phases give organic motion.
    float w1 = sin(uv.x *  8.0 - uTime * 2.4) * 0.085;
    float w2 = sin(uv.x *  5.0 - uTime * 1.6 + uv.y * 3.5) * 0.055;
    float w3 = sin(uv.x * 13.0 - uTime * 3.6) * 0.030;

    float displacement = (w1 + w2 + w3) * strength;

    // Gentle vertical lift so the flag rises and falls with the gust.
    float lift = sin(uv.x * 6.0 - uTime * 2.0) * strength * 0.045;

    vWave = displacement;

    vec3 pos = position;
    pos.z += displacement;
    pos.y += lift;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

/* Fragment shader: sample the flag texture and apply faux lighting based on
   the vertex displacement so peaks read as highlights and troughs as shade. */
const fragmentShader = /* glsl */ `
  uniform sampler2D uTexture;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vec4 color = texture2D(uTexture, vUv);

    float shade = 1.0 + vWave * 3.5;
    shade = clamp(shade, 0.65, 1.3);
    color.rgb *= shade;

    gl_FragColor = color;
  }
`;

function makeFlagTexture(): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = 900;
  canvas.height = 600;
  const ctx = canvas.getContext("2d")!;

  // Three horizontal stripes
  ctx.fillStyle = RED;
  ctx.fillRect(0, 0, 900, 200);
  ctx.fillStyle = WHITE;
  ctx.fillRect(0, 200, 900, 200);
  ctx.fillStyle = BLACK;
  ctx.fillRect(0, 400, 900, 200);

  // Takbir (الله أكبر) in green on the white stripe
  ctx.fillStyle = GREEN;
  ctx.font = "bold 110px 'Times New Roman', serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("الله أكبر", 450, 305);

  const texture = new CanvasTexture(canvas);
  texture.minFilter = LinearFilter;
  texture.magFilter = LinearFilter;
  texture.needsUpdate = true;
  return texture;
}

function FlagMesh() {
  const matRef = useRef<ShaderMaterial>(null);

  const texture = useMemo(() => makeFlagTexture(), []);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTexture: { value: texture },
    }),
    [texture]
  );

  useFrame(({ clock }) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  // Plane is centered in the canvas. The DOM pole sits in its own column
  // to the left of the canvas, so the flag visually hangs off the pole.
  return (
    <mesh position={[0, 0, 0]}>
      <planeGeometry args={[1.7, 1.05, 80, 48]} />
      <shaderMaterial
        ref={matRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        side={DoubleSide}
        transparent
      />
    </mesh>
  );
}

export default function IraqiFlag({ className }: IraqiFlagProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={`${s.wrapper} ${className ?? ""}`}
      role="img"
      aria-label="Animated flag of Iraq"
    >
      <div className={s.flagCanvas}>
        {mounted && (
          <Canvas
            camera={{ position: [0, 0, 2.4], fov: 34 }}
            gl={{ alpha: true, antialias: true }}
            dpr={[1, 2]}
            style={{ background: "transparent" }}
          >
            <FlagMesh />
          </Canvas>
        )}
      </div>
    </div>
  );
}
