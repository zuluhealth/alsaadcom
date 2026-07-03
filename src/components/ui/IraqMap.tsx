"use client";

import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import s from "./IraqMap.module.scss";

interface IraqMapProps {
  className?: string;
  contactHref?: string;
}

/*
 * Real Iraq border polygon, sourced from the sirlisko/world-map-country-shapes
 * dataset (MIT-licensed). The original coordinates were in the world-map's
 * native viewBox; we transformed them to fit a 420×400 viewBox with ~20px
 * padding, preserving aspect ratio.
 *
 * Baghdad's real geographic coordinates (33.3152°N, 44.3661°E) are mapped
 * into the same viewBox using an equirectangular projection over Iraq's
 * lat/lng bounding box, giving (235.5, 195.1).
 */
const IRAQ_PATH = [
  "M 183.85,26.11",
  "L 141.74,20.00",
  "L 127.47,26.79",
  "L 113.21,54.64",
  "L 94.87,65.51",
  "L 103.02,97.43",
  "L 96.91,150.42",
  "L 22.19,195.92",
  "L 43.25,248.23",
  "L 88.75,259.77",
  "L 146.49,290.34",
  "L 259.92,376.60",
  "L 329.21,380.00",
  "L 350.94,338.57",
  "L 376.08,341.96",
  "L 397.81,344.68",
  "L 374.72,321.58",
  "L 371.32,299.17",
  "L 359.77,299.17",
  "L 361.13,267.92",
  "L 337.36,234.64",
  "L 289.81,211.55",
  "L 258.57,170.11",
  "L 261.96,136.15",
  "L 277.58,121.21",
  "L 270.79,95.40",
  "L 245.66,82.49",
  "L 213.74,29.51",
  "L 198.11,36.98",
  "L 183.85,26.11",
  "Z",
].join(" ");

const BAGHDAD = { x: 235.5, y: 195.1 };

export default function IraqMap({
  className,
  contactHref = "/contact",
}: IraqMapProps) {
  const router = useRouter();

  const goToContact = () => router.push(contactHref);

  const onKey = (e: KeyboardEvent<SVGGElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goToContact();
    }
  };

  return (
    <div
      className={`${s.wrapper} ${className ?? ""}`}
      role="img"
      aria-label="Outline of Iraq with Baghdad marked"
    >
      <svg
        className={s.svg}
        viewBox="0 0 420 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="iraq-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
          </linearGradient>
          <filter id="iraq-glow">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <path
          d={IRAQ_PATH}
          fill="url(#iraq-fill)"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          pathLength="1"
          className={s.outline}
        />

        <g
          className={s.hotspot}
          role="link"
          tabIndex={0}
          aria-label="Contact us"
          onClick={goToContact}
          onKeyDown={onKey}
        >
          <g className={s.marker} filter="url(#iraq-glow)">
            <circle cx={BAGHDAD.x} cy={BAGHDAD.y} r="6" fill="#ffffff" />
            <circle
              cx={BAGHDAD.x}
              cy={BAGHDAD.y}
              r="14"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.5"
            />
          </g>

          <text
            x={BAGHDAD.x + 20}
            y={BAGHDAD.y - 20}
            fontFamily="'JetBrains Mono', monospace"
            fontSize="18"
            fontWeight="600"
            letterSpacing="2.4"
            fill="#ffffff"
          >
            BAGHDAD
          </text>

          {/* Invisible larger hit area for easier clicking. */}
          <circle
            cx={BAGHDAD.x}
            cy={BAGHDAD.y}
            r="32"
            fill="transparent"
            pointerEvents="all"
          />
        </g>
      </svg>
    </div>
  );
}
