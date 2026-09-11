import "server-only";
import type { PartnerVendor } from "@/lib/portal/types";

export const vendors: PartnerVendor[] = [
  {
    id: "nokia",
    name: "Nokia",
    logo: "/images/partners/nokia.svg",
    blurb:
      "Carrier-grade fixed and mobile network infrastructure for national operators and government carriers.",
    applicableTo: [
      {
        subsectionId: "carrier-infrastructure",
        scope:
          "Iraq: authorized integration partner for mobile access, IP/optical transport, and core network lifecycle services.",
      },
      {
        subsectionId: "network-operations",
        scope:
          "Iraq & MENA: managed NOC services, performance optimization, and lifecycle sustainment under direct OEM partnership.",
      },
    ],
  },
  {
    id: "rs",
    name: "Rohde & Schwarz",
    logo: "/images/partners/rohde-schwarz.svg",
    blurb:
      "Authorized distributor for radio communications, spectrum monitoring, and secure test & measurement.",
    applicableTo: [
      {
        subsectionId: "rf-secured-communications",
        scope:
          "Iraq: authorized distribution, deployment, integration & 24/7 sustainment of R&S secured RF systems.",
      },
    ],
  },
  {
    id: "flir",
    name: "FLIR",
    logo: "/images/partners/flir.svg",
    blurb:
      "Thermal imaging, perimeter detection, and force-protection sensors for fixed sites, vehicles, and unmanned platforms.",
    applicableTo: [
      {
        subsectionId: "detection-monitoring",
        scope:
          "Iraq: distribution, system integration, calibration, and field sustainment of FLIR thermal and EO/IR platforms.",
      },
    ],
  },
  {
    id: "genasys",
    name: "Genasys",
    logo: "/images/partners/genasys.svg",
    blurb:
      "Long-range acoustic devices and mass-notification platforms for critical infrastructure and crowd safety.",
    applicableTo: [
      {
        subsectionId: "detection-monitoring",
        scope:
          "Iraq: integration of LRAD acoustic hailing into layered perimeter and crowd-management deployments.",
      },
    ],
  },
  {
    id: "leidos",
    name: "Leidos",
    logo: "/images/partners/leidos.png",
    blurb:
      "Cargo, vehicle, and parcel inspection systems for borders, ports, and high-value-target installations.",
    applicableTo: [
      {
        subsectionId: "screening-inspection",
        scope:
          "Iraq: authorized integration, operator training, and sustainment of Leidos VACIS inspection platforms.",
      },
    ],
  },
  {
    id: "l3harris",
    name: "L3Harris",
    logo: "/images/partners/l3harris.svg",
    blurb:
      "Passenger screening, millimeter-wave imaging, and trusted security platforms for aviation and high-traffic checkpoints.",
    applicableTo: [
      {
        subsectionId: "screening-inspection",
        scope:
          "Iraq: deployment, integration, and lifecycle support of L3Harris ProVision passenger screening systems.",
      },
    ],
  },
  {
    id: "microchip",
    name: "Microchip",
    logo: "/images/partners/microchip.png",
    blurb:
      "Precision timing, synchronization, and secure embedded products powering telecom and critical-infrastructure networks.",
    applicableTo: [
      {
        subsectionId: "network-operations",
        scope:
          "Iraq: distribution, deployment, and lifecycle services for Microchip timing & sync platforms.",
      },
    ],
  },
  {
    id: "teledyne",
    name: "Teledyne",
    logo: "/images/partners/teledyne.png",
    blurb:
      "Optical transport, microwave backhaul, and ruggedized sub-systems engineered for carrier and mission-critical networks.",
    applicableTo: [
      {
        subsectionId: "carrier-infrastructure",
        scope:
          "Iraq: integration of Teledyne optical and microwave transport into carrier and government backhaul programs.",
      },
    ],
  },
];

export function getVendorById(id: string): PartnerVendor | undefined {
  return vendors.find((vendor) => vendor.id === id);
}
