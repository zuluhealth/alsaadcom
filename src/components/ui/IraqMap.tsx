"use client";

import { useRouter } from "next/navigation";
import type { KeyboardEvent } from "react";
import { offices } from "@/data/offices";
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
 * lat/lng bounding box, giving (235.5, 195.1). Every other office is placed
 * by its real geographic offset from that anchor, using the same per-degree
 * scale, so all six markers sit correctly on the outline.
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

// Baghdad is the projection anchor, pinned to its tuned viewBox position so the
// HQ marker and its CSS pulse transform-origin stay pixel-aligned. Per-degree
// scale is derived from Iraq's bounding box fitted to the polygon:
//   px/lng = (397.81 − 22.19) / (48.57 − 38.79) ≈ 38.407
//   px/lat = (380 − 20) / (37.38 − 29.06) ≈ 43.269
const ANCHOR = { lat: 33.3152, lng: 44.3661, x: 235.5, y: 195.1 };
const PX_PER_LNG = 38.407;
const PX_PER_LAT = 43.269;

function project(lat: number, lng: number) {
  return {
    x: ANCHOR.x + (lng - ANCHOR.lng) * PX_PER_LNG,
    y: ANCHOR.y - (lat - ANCHOR.lat) * PX_PER_LAT,
  };
}

// Per-city label placement (offset from the marker + text anchor) tuned to keep
// labels inside the viewBox and clear of neighbouring markers.
const LABELS: Record<
  string,
  { dx: number; dy: number; anchor: "start" | "end" }
> = {
  Erbil: { dx: -10, dy: 3.5, anchor: "end" },
  Sulaymaniyah: { dx: 10, dy: 3.5, anchor: "start" },
  Kirkuk: { dx: -10, dy: 3.5, anchor: "end" },
  Najaf: { dx: -10, dy: 4, anchor: "end" },
  Basra: { dx: -10, dy: 4, anchor: "end" },
};

export default function IraqMap({
  className,
  contactHref = "/contact",
}: IraqMapProps) {
  const router = useRouter();

  const hq = offices.find((o) => o.isHQ) ?? offices[0];
  const hqPos = project(hq.coordinates.lat, hq.coordinates.lng);
  const cities = offices.filter((o) => !o.isHQ);

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
      aria-label="Outline of Iraq with Al Saad Telecom's six offices marked"
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

        {/* Regional offices */}
        {cities.map((office) => {
          const p = project(office.coordinates.lat, office.coordinates.lng);
          const lbl = LABELS[office.city] ?? {
            dx: 10,
            dy: 3.5,
            anchor: "start" as const,
          };
          return (
            <g key={office.city} className={s.cityMarker}>
              <circle
                cx={p.x}
                cy={p.y}
                r="7"
                fill="none"
                stroke="rgba(255,255,255,0.25)"
                strokeWidth="1"
              />
              <circle cx={p.x} cy={p.y} r="3.5" fill="rgba(255,255,255,0.9)" />
              <text
                x={p.x + lbl.dx}
                y={p.y + lbl.dy}
                textAnchor={lbl.anchor}
                fontFamily="var(--font-mono), monospace"
                fontSize="11"
                fontWeight="500"
                letterSpacing="1.4"
                fill="rgba(255,255,255,0.82)"
              >
                {office.city.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Headquarters — visually distinct + links to contact */}
        <g
          className={s.hotspot}
          role="link"
          tabIndex={0}
          aria-label={`Contact us — ${hq.city} headquarters`}
          onClick={goToContact}
          onKeyDown={onKey}
        >
          <g className={s.marker} filter="url(#iraq-glow)">
            <circle cx={hqPos.x} cy={hqPos.y} r="6" fill="#ffffff" />
            <circle
              cx={hqPos.x}
              cy={hqPos.y}
              r="14"
              fill="none"
              stroke="rgba(255,255,255,0.55)"
              strokeWidth="1.5"
            />
          </g>

          <text
            x={hqPos.x + 16}
            y={hqPos.y - 14}
            fontFamily="var(--font-mono), monospace"
            fontSize="16"
            fontWeight="600"
            letterSpacing="2.2"
            fill="#ffffff"
          >
            {hq.city.toUpperCase()}
          </text>
          <text
            x={hqPos.x + 16}
            y={hqPos.y - 1}
            fontFamily="var(--font-mono), monospace"
            fontSize="8.5"
            fontWeight="500"
            letterSpacing="1.6"
            fill="rgba(255,255,255,0.6)"
          >
            HEADQUARTERS
          </text>

          {/* Invisible larger hit area for easier clicking. */}
          <circle
            cx={hqPos.x}
            cy={hqPos.y}
            r="32"
            fill="transparent"
            pointerEvents="all"
          />
        </g>
      </svg>
    </div>
  );
}
