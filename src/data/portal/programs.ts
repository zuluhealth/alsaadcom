import "server-only";
import type { ProgramExperience } from "@/lib/portal/types";

/**
 * Sanitized program briefs. Client identifiers are generalized — full
 * details are available under NDA via the AST program office.
 */
export const programs: ProgramExperience[] = [
  {
    id: "prog-001",
    slug: "national-secured-rf-modernization",
    title: "National Secured RF Modernization",
    client: "Government Stakeholder, Iraq",
    sector: "Defense",
    year: "2023",
    scope:
      "Multi-year modernization of national secured RF infrastructure across regional sites — spectrum planning, encrypted backbone integration, ALE-3G HF expansion, and operator readiness for two cohorts of signal officers.",
    outcome:
      "Operational handover on schedule with sustained 24/7 sustainment contract and measured resilience improvements across the national backbone.",
    technologies: ["R&S HF/UHF", "Encrypted Backbone", "Spectrum Planning"],
  },
  {
    id: "prog-002",
    slug: "border-detection-program",
    title: "Border Detection & Monitoring Program",
    client: "National Security Agency",
    sector: "Public Safety",
    year: "2024",
    scope:
      "Deployment of layered FLIR thermal towers, ground-surveillance radar, and EO/IR platforms across high-priority border segments, unified through a single VMS-driven operator workflow with edge analytics and audited escalation.",
    outcome:
      "Reduced response times and unified operator picture across previously fragmented surveillance assets; ongoing sustainment contract under AST 24/7 NOC.",
    technologies: ["FLIR Thermal", "Ground Radar", "EO/IR", "VMS"],
  },
  {
    id: "prog-003",
    slug: "carrier-transport-rollout",
    title: "Tier-1 Operator Transport Rollout",
    client: "Tier-1 Mobile Operator",
    sector: "Carrier",
    year: "2022",
    scope:
      "Nationwide IP/MPLS and microwave transport rollout supporting 4G/5G expansion — Nokia 7750 SR aggregation, Teledyne microwave backhaul, and PTP timing — delivered with local engineering and managed sustainment.",
    outcome:
      "Coverage and capacity targets met on schedule with full NOC handover and ongoing optimization contract.",
    technologies: ["IP/MPLS", "Microwave", "PTP Timing", "7750 SR"],
  },
  {
    id: "prog-004",
    slug: "airport-passenger-screening",
    title: "International Airport Passenger Screening",
    client: "Civil Aviation Authority",
    sector: "Civil Aviation",
    year: "2024",
    scope:
      "Deployment of L3Harris ProVision 2 millimeter-wave imagers, CT-based cabin baggage screening, and trace detection systems across primary and secondary checkpoints with full operator certification.",
    outcome:
      "ICAO-aligned screening throughput targets met; airport-wide operator certification completed in-country with no external dependency.",
    technologies: ["ProVision 2", "CT Checkpoint", "Trace Detection"],
  },
  {
    id: "prog-005",
    slug: "port-cargo-inspection",
    title: "Port of Entry Cargo Inspection",
    client: "Customs & Border Protection Agency",
    sector: "Critical Infrastructure",
    year: "2023",
    scope:
      "Integration of Leidos VACIS XPL cargo portals at primary truck and container lanes with site-flow optimization, image-quality acceptance testing, and structured operator certification.",
    outcome:
      "Cargo throughput uplifted with high operator confidence; sustained acceptance pass rates above program thresholds.",
    technologies: ["VACIS XPL", "Cargo X-Ray", "Operator Cert"],
  },
  {
    id: "prog-006",
    slug: "national-timing-resilience",
    title: "National Timing & Sync Resilience",
    client: "Critical-Infrastructure Operator",
    sector: "Critical Infrastructure",
    year: "2024",
    scope:
      "Deployment of Microchip PTP grandmaster clocks with multi-band GNSS, BlueSky GNSS firewall, and cesium primary references across core sites — engineered for jamming and spoofing resilience.",
    outcome:
      "Timing resilience hardened against measured GNSS interference incidents; holdover quality validated against national-grade requirements.",
    technologies: ["PTP", "GNSS Firewall", "Cesium", "Holdover"],
  },
  {
    id: "prog-007",
    slug: "critical-site-perimeter",
    title: "Critical-Infrastructure Perimeter Hardening",
    client: "Energy Sector Operator",
    sector: "Critical Infrastructure",
    year: "2024",
    scope:
      "Multi-site perimeter hardening combining FLIR Saros multi-spectrum domes, Ranger ground-surveillance radar, Genasys LRAD 1000X acoustic hailing, and unified VMS workflows across critical energy facilities.",
    outcome:
      "Documented reduction in unauthorized perimeter approaches and clear escalation paths handed to in-country operators with AST sustainment.",
    technologies: ["FLIR Saros", "Ground Radar", "LRAD", "VMS"],
  },
  {
    id: "prog-008",
    slug: "managed-noc-multivendor",
    title: "Multi-vendor Managed NOC",
    client: "Government Carrier",
    sector: "Carrier",
    year: "2025",
    scope:
      "AST 24/7 NOC service across a multi-vendor mobile and transport estate — monitoring, optimization, KPI reporting, change management, and structured vendor escalation.",
    outcome:
      "KPI uplift across availability and customer-impact metrics within the first two quarters; predictable change-management cadence established.",
    technologies: ["NOC", "Multi-vendor", "KPI", "Change Mgmt"],
  },
];
