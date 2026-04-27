"use client";

import { useRef, useMemo, useEffect, useCallback, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Vector2, DoubleSide } from "three";

/* ─────────────────────────── Shaders ─────────────────────────── */

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  precision mediump float;

  uniform float uTime;
  uniform vec2  uResolution;
  uniform vec2  uMouse;

  varying vec2 vUv;

  /* ──── Simplex 2-D (Ashima / Stefan Gustavson) ──── */
  vec3 mod289(vec3 x){ return x - floor(x*(1.0/289.0))*289.0; }
  vec2 mod289(vec2 x){ return x - floor(x*(1.0/289.0))*289.0; }
  vec3 permute(vec3 x){ return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0,i1.y,1.0))
                            + i.x + vec3(0.0,i1.x,1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                             dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 xn = 2.0*fract(p*C.www) - 1.0;
    vec3 h  = abs(xn) - 0.5;
    vec3 ox = floor(xn + 0.5);
    vec3 a0 = xn - ox;
    m *= 1.79284291400159 - 0.85373472095314*(a0*a0+h*h);
    vec3 g;
    g.x  = a0.x*x0.x   + h.x*x0.y;
    g.yz = a0.yz*x12.xz + h.yz*x12.yw;
    return 130.0*dot(m,g);
  }

  /* ──── Deterministic hash ──── */
  float hash(float n){ return fract(sin(n)*43758.5453123); }

  /* ──── Config ──── */
  #define HERO_LINES    5
  #define TOTAL_LINES  18
  #define SKIP_DIST     0.25

  void main(){
    float aspect = uResolution.x / uResolution.y;
    vec2 uv    = vUv;
    vec2 coord = vec2(uv.x * aspect, uv.y);

    /* ── Fade in over 2.5 s ── */
    float fadeIn = smoothstep(0.0, 2.5, uTime);

    /* ── Mouse field distortion ── */
    vec2 mPos  = vec2((uMouse.x*0.5+0.5)*aspect, uMouse.y*0.5+0.5);
    vec2 mDiff = coord - mPos;
    float mLen = length(mDiff);
    float warp = smoothstep(0.6, 0.0, mLen) * 0.06;
    coord -= mDiff * warp;

    float light = 0.0;

    for(int i = 0; i < TOTAL_LINES; i++){
      float fi  = float(i);
      bool hero = (i < HERO_LINES);

      /* ── Deterministic properties ── */
      float h1 = hash(fi*127.1);
      float h2 = hash(fi*311.7);
      float h3 = hash(fi*78.233);
      float h4 = hash(fi*45.164);

      /* ── Y distribution (clustered bundles) ── */
      float baseY;
      if(hero){
        baseY = 0.52 + (h1 - 0.5) * 0.35;
      } else if(i < 13){
        baseY = 0.5 + (h1 - 0.5) * 0.75;
      } else {
        baseY = h1 * 0.85 + 0.075;
      }

      /* ── Early skip: pixel too far from line's possible range ── */
      if(abs(coord.y - baseY) > SKIP_DIST) continue;

      /* ── Motion ── */
      float speed = 0.6 + h2 * 0.6;
      float amp   = hero ? (0.05 + h3*0.04) : (0.025 + h3*0.06);
      float t     = uTime * speed;

      /* ── Noise warp ── */
      float ny;
      if(hero){
        /* 2 octaves for hero lines */
        ny = snoise(vec2(coord.x*1.0 + t*0.6,   fi*2.7       )) * amp
           + snoise(vec2(coord.x*0.3 + t*0.15,  fi*1.1+ 50.0)) * amp*0.55;
      } else {
        /* 1 octave for ambient lines */
        ny = snoise(vec2(coord.x*0.8 + t*0.5, fi*2.7)) * amp;
      }

      float lineY = baseY + ny;
      float dist  = abs(coord.y - lineY);

      /* ── Glow layers ── */
      float shape;
      if(hero){
        float core  = smoothstep(0.0025, 0.0, dist);
        float bloom = exp(-dist * 120.0);
        float haze  = exp(-dist * 30.0);
        shape = core + bloom * 0.55 + haze * 0.18;
      } else {
        /* Simpler: core + bloom only */
        float core  = smoothstep(0.0012, 0.0, dist);
        float bloom = exp(-dist * 280.0);
        shape = core + bloom * 0.45;
      }

      /* ── Base opacity ── */
      float opacity = hero
        ? 0.40 + h4 * 0.35
        : 0.025 + h4 * 0.055;

      /* ── Traveling data pulses ── */
      float p1 = fract(t*0.3 + fi*0.37);
      float p2 = fract(t*0.2 + fi*0.71 + 0.5);
      float pulse = max(
        smoothstep(0.14, 0.0, abs(uv.x - p1)),
        smoothstep(0.09, 0.0, abs(uv.x - p2)) * 0.65
      );

      /* ── Edge fade ── */
      float fade = smoothstep(0.0, 0.07, uv.x) * smoothstep(1.0, 0.93, uv.x);

      light += shape * opacity * (1.0 + pulse * 3.5) * fade;
    }

    /* ── Vignette ── */
    float vig = 1.0 - length((uv - 0.5) * vec2(1.0, 1.3)) * 0.35;
    light *= clamp(vig, 0.0, 1.0);

    /* ── Apply fade-in ── */
    light *= fadeIn;

    gl_FragColor = vec4(vec3(1.0), light);
  }
`;

/* ────────────────────────── Scene ─────────────────────────── */

function SignalField({ visible }: { visible: boolean }) {
  const mouseRef = useRef(new Vector2(0, 0));
  const invalidateRef = useRef<(() => void) | null>(null);
  const { size } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime:       { value: 0 },
      uResolution: { value: new Vector2(window.innerWidth, window.innerHeight) },
      uMouse:      { value: new Vector2(0, 0) },
    }),
    [],
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent) => {
      mouseRef.current.set(
        (e.clientX / size.width)  * 2 - 1,
        -(e.clientY / size.height) * 2 + 1,
      );
    },
    [size],
  );

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [handlePointerMove]);

  /* Kick-start the render loop when visibility changes to true */
  useEffect(() => {
    if (visible && invalidateRef.current) invalidateRef.current();
  }, [visible]);

  useFrame(({ clock, invalidate }) => {
    invalidateRef.current = invalidate;
    if (!visible) return;
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uMouse.value.copy(mouseRef.current);
    uniforms.uResolution.value.set(size.width, size.height);
    invalidate();
  });

  return (
    <mesh frustumCulled={false}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={DoubleSide}
      />
    </mesh>
  );
}

/* ────────────────────────── Export ─────────────────────────── */

interface FiberOpticSceneProps {
  className?: string;
}

export default function FiberOpticScene({ className }: FiberOpticSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className={className}>
      <Canvas
        frameloop="demand"
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        dpr={[1, 1]}
        style={{ background: "transparent" }}
      >
        <SignalField visible={visible} />
      </Canvas>
    </div>
  );
}
