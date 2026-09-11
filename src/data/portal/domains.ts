import "server-only";
import type { PortalDomain } from "@/lib/portal/types";

/**
 * Domain catalogue. Subsection IDs MUST remain stable — vendors and products
 * reference them via `applicableTo` / `appliesToSubsection`.
 *
 * `specialized-platforms` is intentionally abstract — vendor and product
 * details are gated under a separate NDA process.
 */
export const domains: PortalDomain[] = [
  {
    slug: "telecommunications",
    title: "Telecommunications",
    shortDescription:
      "Secured RF, carrier-grade transport, and 24/7 network operations engineered for national infrastructure across Iraq and the broader MENA region.",
    subsections: [
      {
        id: "rf-secured-communications",
        title: "RF & Secured Communications",
        description:
          "End-to-end secured radio infrastructure — HF, VHF, UHF and software-defined platforms — engineered for government, defense, and aviation users. AST plans, deploys, and sustains encrypted backbone, ALE-grade waveforms, and spectrum monitoring capabilities aligned to mission requirements.",
        approach:
          "We start from the radio plan upward: spectrum and propagation modeling, secured key-management architecture, gateway and backbone integration, and operator readiness on R&S secured platforms. Field sustainment is delivered by Iraq-resident engineers operating under direct OEM authorization.",
        vendorIds: ["rs"],
      },
      {
        id: "carrier-infrastructure",
        title: "Carrier Infrastructure",
        description:
          "Mobile and fixed-access network infrastructure for licensed national operators — including 4G/5G radio access, IP/MPLS transport, optical and microwave backhaul, and cloud-native core. AST integrates Nokia and Teledyne platforms with local engineering and lifecycle services.",
        approach:
          "We integrate carrier-grade access, transport, and core as a single design — RAN to backbone to core — with end-to-end timing, segment-routed transport, and MEF/3GPP service modeling. MENA-resident engineering keeps deployment pace and lifecycle quality predictable for operators and government carriers.",
        vendorIds: ["nokia", "teledyne"],
      },
      {
        id: "network-operations",
        title: "Network Operations & Timing",
        description:
          "AST-operated 24/7 NOC services, performance optimization, and precision timing & sync infrastructure for telecom and critical-infrastructure networks. Resilient PTP, GNSS-protected anchors, and structured incident management keep national networks predictable.",
        approach:
          "We run a multi-vendor NOC with rigorous incident, change, and KPI workflows alongside Microchip PTP / cesium timing platforms. Resilience to GNSS interference, holdover quality, and operator escalation paths are designed in from day one — not after the fact.",
        vendorIds: ["nokia", "microchip"],
      },
    ],
  },
  {
    slug: "security",
    title: "Security",
    shortDescription:
      "Layered detection, inspection, and specialized mission platforms securing borders, ports, critical infrastructure, and national programs across Iraq and MENA.",
    subsections: [
      {
        id: "detection-monitoring",
        title: "Detection & Monitoring",
        description:
          "Layered perimeter and wide-area detection combining FLIR thermal and EO/IR sensors, ground-surveillance radar, and Genasys acoustic platforms. Operator workflows are unified through a single command picture with audited escalation and integrated mass notification.",
        approach:
          "We design detection as a system — sensors, fusion, operator UI, and response. Thermal towers, ground radar, EO/IR, and acoustic hailing are integrated into a single VMS-driven workflow with edge analytics tuned to the site's operational reality.",
        vendorIds: ["flir", "genasys"],
      },
      {
        id: "screening-inspection",
        title: "Screening & Inspection",
        description:
          "Cargo, vehicle, parcel, and passenger screening platforms for ports of entry, airports, and high-value sites. AST integrates Leidos VACIS inspection systems and L3Harris ProVision millimeter-wave imaging with structured operator training and reporting.",
        approach:
          "We deploy screening with the operator in mind — site-flow analysis, alarm-handling workflows, image-quality calibration, and structured operator certification — so platforms perform consistently in the field, not just at acceptance test.",
        vendorIds: ["leidos", "l3harris"],
      },
      {
        id: "specialized-platforms",
        title: "Specialized Platforms",
        description:
          "Bespoke mission platforms delivered to a restricted set of authorized stakeholders. Capability covers tailored electro-optical, RF, and integrated mission systems delivered under program-specific scope and discretion.",
        approach:
          "Engagements are scoped under separate NDA with the AST program office. Capability briefings, authorized vendor disclosures, and reference packages are available to qualified stakeholders on request.",
        vendorIds: [],
        isAbstract: true,
      },
    ],
  },
];

export function getDomain(slug: PortalDomain["slug"]): PortalDomain | undefined {
  return domains.find((d) => d.slug === slug);
}

export function getSubsection(subsectionId: string) {
  for (const domain of domains) {
    const match = domain.subsections.find((s) => s.id === subsectionId);
    if (match) return { domain, subsection: match };
  }
  return undefined;
}
