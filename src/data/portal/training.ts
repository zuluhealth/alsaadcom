import "server-only";
import type { TrainingProgram } from "@/lib/portal/types";

export const trainingPrograms: TrainingProgram[] = [
  {
    id: "training-001",
    title: "Operator Readiness — Secured RF Systems",
    audience: "Network operators, signal officers",
    duration: "5 days",
    format: "in-person",
    description:
      "Hands-on operator readiness for R&S secured RF systems — spectrum planning, encryption handling, key-management workflows, and field troubleshooting on customer-representative equipment.",
    outcomes: [
      "Confident operation of secured RF endpoints and backbone",
      "Field-level diagnostic and recovery proficiency",
      "Aligned procedures with the AST sustainment playbook",
    ],
  },
  {
    id: "training-002",
    title: "Perimeter Detection — Operator & Maintainer Track",
    audience: "Site operators and field maintainers",
    duration: "3 days",
    format: "hybrid",
    description:
      "Combined operator and maintainer training across FLIR thermal, ground-surveillance radar, and EO/IR platforms with practical sessions on AST-deployed reference sites.",
    outcomes: [
      "Daily operations and alarm triage proficiency",
      "Preventive maintenance and calibration competence",
      "Standardized escalation and reporting flows",
    ],
  },
  {
    id: "training-003",
    title: "NOC Operations & Lifecycle Sustainment",
    audience: "NOC engineers and team leads",
    duration: "10 days",
    format: "remote",
    description:
      "Structured NOC operations curriculum covering monitoring, optimization, incident management, change control, and lifecycle sustainment for carrier-grade multi-vendor networks.",
    outcomes: [
      "End-to-end NOC workflow ownership",
      "Optimization and KPI improvement playbooks",
      "Aligned vendor-engagement and escalation paths",
    ],
  },
  {
    id: "training-004",
    title: "Carrier Transport Engineering",
    audience: "Transport engineers, planners",
    duration: "8 days",
    format: "in-person",
    description:
      "Design and operations curriculum for IP/MPLS, segment-routed transport, optical, and microwave backhaul — built around Nokia and Teledyne reference designs with hands-on lab exercises.",
    outcomes: [
      "Confident transport service design and rollout",
      "Hands-on competence on Nokia 7750 SR and supporting platforms",
      "Lifecycle-aligned optimization and KPI tracking",
    ],
  },
  {
    id: "training-005",
    title: "Screening Operator Certification",
    audience: "Checkpoint operators and supervisors",
    duration: "4 days",
    format: "in-person",
    description:
      "Operator certification across Leidos VACIS, L3Harris ProVision 2, and trace-detection platforms with image-quality calibration drills and alarm-handling workflows aligned to national programs.",
    outcomes: [
      "Certified screening operator credentials",
      "Image-recognition and alarm-handling competence",
      "Documented operator readiness for acceptance reviews",
    ],
  },
  {
    id: "training-006",
    title: "Precision Timing & GNSS Resilience",
    audience: "Network engineers, sync owners",
    duration: "3 days",
    format: "hybrid",
    description:
      "Deep-dive on PTP architecture, holdover engineering, and GNSS resilience — including jamming/spoofing mitigation, BlueSky GNSS firewall, and cesium-anchored primary references.",
    outcomes: [
      "Confident PTP design and sync planning",
      "GNSS resilience and holdover validation skills",
      "Aligned playbooks for sync incidents and degradation",
    ],
  },
];
