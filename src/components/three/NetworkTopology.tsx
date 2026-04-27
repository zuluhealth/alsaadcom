"use client";

import { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, ThreeEvent } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import {
  BufferGeometry,
  Float32BufferAttribute,
  LineBasicMaterial,
  Color,
  Vector3,
  AdditiveBlending,
} from "three";
import s from "./NetworkTopology.module.scss";

interface NodeData {
  city: string;
  position: [number, number, number];
  isHQ: boolean;
}

const NODES: NodeData[] = [
  { city: "Baghdad", position: [0, 0, 0], isHQ: true },
  { city: "Erbil", position: [1.5, 2.2, 0.3], isHQ: false },
  { city: "Basra", position: [1.8, -2.5, -0.2], isHQ: false },
  { city: "Sulaymaniyah", position: [2.8, 2.8, 0.1], isHQ: false },
  { city: "Kirkuk", position: [1.2, 1.2, -0.1], isHQ: false },
  { city: "Najaf", position: [-1.0, -1.5, 0.2], isHQ: false },
];

const CONNECTIONS: [number, number][] = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],
  [1, 3], [1, 4], [2, 5], [3, 4],
];

function NetworkNode({
  node,
  onHover,
  onLeave,
  isHovered,
}: {
  node: NodeData;
  onHover: () => void;
  onLeave: () => void;
  isHovered: boolean;
}) {
  const meshRef = useRef<{ scale: Vector3 }>(null);
  const glowRef = useRef<{ scale: Vector3; material: { opacity: number } }>(null);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const pulse = 1 + Math.sin(clock.getElapsedTime() * 2 + node.position[0]) * 0.1;
    const targetScale = isHovered ? 1.5 : node.isHQ ? 1.2 : 1.0;
    const sc = targetScale * pulse;
    meshRef.current.scale.setScalar(sc);

    if (glowRef.current) {
      glowRef.current.scale.setScalar(sc * 2.5);
      glowRef.current.material.opacity = isHovered ? 0.4 : 0.15 + Math.sin(clock.getElapsedTime() * 1.5) * 0.05;
    }
  });

  return (
    <group position={node.position}>
      {/* Glow */}
      <mesh ref={glowRef as React.RefObject<never>}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial
          color={node.isHQ ? "#FFFFFF" : "#94A3B8"}
          transparent
          opacity={0.15}
          blending={AdditiveBlending}
        />
      </mesh>

      {/* Core */}
      <mesh
        ref={meshRef as React.RefObject<never>}
        onPointerEnter={(e: ThreeEvent<PointerEvent>) => { e.stopPropagation(); onHover(); }}
        onPointerLeave={onLeave}
      >
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color={node.isHQ ? "#FFFFFF" : "#94A3B8"} />
      </mesh>

      {/* Label */}
      {isHovered && (
        <Html center distanceFactor={5} style={{ pointerEvents: "none" }}>
          <div className={s.tooltip}>
            <span className={s.tooltipCity}>{node.city}</span>
            {node.isHQ && <span className={s.tooltipHQ}>HQ</span>}
          </div>
        </Html>
      )}
    </group>
  );
}

function ConnectionLines() {
  const linesRef = useRef<{ geometry: BufferGeometry }>(null);

  const geometry = useMemo(() => {
    const geo = new BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];

    const white = new Color("#FFFFFF");

    CONNECTIONS.forEach(([from, to]) => {
      const a = NODES[from].position;
      const b = NODES[to].position;

      // Add intermediate points for smoother lines
      const steps = 20;
      for (let i = 0; i < steps; i++) {
        const t1 = i / steps;
        const t2 = (i + 1) / steps;

        positions.push(
          a[0] + (b[0] - a[0]) * t1,
          a[1] + (b[1] - a[1]) * t1,
          a[2] + (b[2] - a[2]) * t1 + Math.sin(t1 * Math.PI) * 0.15,
          a[0] + (b[0] - a[0]) * t2,
          a[1] + (b[1] - a[1]) * t2,
          a[2] + (b[2] - a[2]) * t2 + Math.sin(t2 * Math.PI) * 0.15
        );

        const opacity = 0.3 + Math.sin(t1 * Math.PI) * 0.3;
        colors.push(white.r, white.g, white.b, white.r, white.g, white.b);
      }
    });

    geo.setAttribute("position", new Float32BufferAttribute(positions, 3));
    geo.setAttribute("color", new Float32BufferAttribute(colors, 3));

    return geo;
  }, []);

  useFrame(({ clock }) => {
    if (!linesRef.current) return;
    const colors = linesRef.current.geometry.attributes.color;
    const arr = colors.array as Float32Array;
    const time = clock.getElapsedTime();
    const white = new Color("#FFFFFF");

    let idx = 0;
    CONNECTIONS.forEach((_, connIdx) => {
      for (let i = 0; i < 20; i++) {
        const t = i / 20;
        const pulse = 0.15 + Math.sin(time * 2 + connIdx * 0.5 + t * Math.PI * 2) * 0.15;
        const brightness = 0.3 + pulse;

        arr[idx] = white.r * brightness;
        arr[idx + 1] = white.g * brightness;
        arr[idx + 2] = white.b * brightness;
        arr[idx + 3] = white.r * brightness;
        arr[idx + 4] = white.g * brightness;
        arr[idx + 5] = white.b * brightness;
        idx += 6;
      }
    });

    colors.needsUpdate = true;
  });

  return (
    <lineSegments ref={linesRef as React.RefObject<never>}>
      <primitive object={geometry} attach="geometry" />
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.6}
        blending={AdditiveBlending}
      />
    </lineSegments>
  );
}

function NetworkScene() {
  const groupRef = useRef<{ rotation: { y: number } }>(null);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.1) * 0.15;
  });

  return (
    <group ref={groupRef as React.RefObject<never>}>
      <ConnectionLines />
      {NODES.map((node, i) => (
        <NetworkNode
          key={node.city}
          node={node}
          isHovered={hoveredNode === i}
          onHover={() => setHoveredNode(i)}
          onLeave={() => setHoveredNode(null)}
        />
      ))}
    </group>
  );
}

interface NetworkTopologyProps {
  className?: string;
}

export default function NetworkTopology({ className }: NetworkTopologyProps) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        <NetworkScene />
      </Canvas>
    </div>
  );
}
