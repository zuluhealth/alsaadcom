import "server-only";
import type { PartnerProduct } from "@/lib/portal/types";

export const products: PartnerProduct[] = [
  // ─── R&S — RF & Secured Communications ───────────────────────────────
  {
    id: "rs-mr300xh",
    vendorId: "rs",
    productLine: "R&S MR300xH Series HF Radio",
    description:
      "Long-range HF software-defined radios with hardware-rooted encryption, ALE-3G, and resilient waveforms for strategic government and defense communications.",
    capabilityTags: ["HF", "SDR", "Encryption", "ALE-3G"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized distribution, deployment, integration & 24/7 sustainment.",
    appliesToSubsection: ["rf-secured-communications"],
  },
  {
    id: "rs-series4200",
    vendorId: "rs",
    productLine: "R&S Series4200 VHF/UHF Radio",
    description:
      "Air-traffic-grade VHF/UHF radio family for civil aviation, ground-to-air, and tactical voice services with high availability and secure remote management.",
    capabilityTags: ["VHF", "UHF", "ATC", "Secure Voice"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized integration and lifecycle support for civil and government communications networks.",
    appliesToSubsection: ["rf-secured-communications"],
  },
  {
    id: "rs-sdtr",
    vendorId: "rs",
    productLine: "R&S SDTR Software-Defined Tactical Radio",
    description:
      "Multi-band software-defined tactical radios supporting wideband IP, secure voice, and adaptive waveforms for vehicular and dismounted users.",
    capabilityTags: ["SDR", "Wideband IP", "Multi-band", "MANET"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized distribution and integration for defense and homeland-security users.",
    appliesToSubsection: ["rf-secured-communications"],
  },
  {
    id: "rs-spectrum",
    vendorId: "rs",
    productLine: "R&S Spectrum Monitoring & Direction Finding",
    description:
      "Fixed and mobile spectrum monitoring with direction-finding antennas, automated geolocation, and unified COMINT workflows.",
    capabilityTags: ["Spectrum", "DF", "Geolocation", "COMINT"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized deployment and operator readiness across regulator and national security users.",
    appliesToSubsection: ["rf-secured-communications"],
  },
  {
    id: "rs-tmu9",
    vendorId: "rs",
    productLine: "R&S Encrypted Voice & Data Backbone",
    description:
      "End-to-end encrypted voice and data backbone with key management, gateway interoperability, and high-grade certifications for government users.",
    capabilityTags: ["Encryption", "Key Mgmt", "Gateways"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized backbone integration and 24/7 sustainment under direct R&S partnership.",
    appliesToSubsection: ["rf-secured-communications"],
  },

  // ─── Nokia — Carrier Infrastructure ──────────────────────────────────
  {
    id: "nokia-airscale",
    vendorId: "nokia",
    productLine: "Nokia AirScale Baseband & Radio Access",
    description:
      "Modular 4G/5G radio access with multi-band macro and small-cell options, software-upgradeable baseband, and open RAN-ready interfaces for national operators.",
    capabilityTags: ["5G NR", "AirScale BBU", "Multi-band", "Open RAN"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized integration partner for mobile access deployment and lifecycle services.",
    appliesToSubsection: ["carrier-infrastructure"],
  },
  {
    id: "nokia-7750-sr",
    vendorId: "nokia",
    productLine: "Nokia 7750 SR Service Router",
    description:
      "Carrier-grade service router platform for IP/MPLS backbone, mobile transport, and government VPNs with line-rate encryption and segment routing.",
    capabilityTags: ["IP/MPLS", "Segment Routing", "L2/L3 VPN"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized deployment and integration into national carrier and government IP backbones.",
    appliesToSubsection: ["carrier-infrastructure"],
  },
  {
    id: "nokia-lightspan",
    vendorId: "nokia",
    productLine: "Nokia Lightspan Fixed Access",
    description:
      "Multi-service GPON / XGS-PON / 25G access nodes for fiber-to-the-home, business services, and mobile backhaul aggregation.",
    capabilityTags: ["GPON", "XGS-PON", "25G", "FTTx"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized fixed-access deployment partner for national fiber programs.",
    appliesToSubsection: ["carrier-infrastructure"],
  },
  {
    id: "nokia-5g-core",
    vendorId: "nokia",
    productLine: "Nokia Cloud-Native 5G Core",
    description:
      "Service-based 5G core (AMF / SMF / UPF) deployed on cloud-native infrastructure with network slicing and operator-grade SLAs.",
    capabilityTags: ["5G Core", "Cloud-Native", "Slicing"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized integration of cloud-native 5G core deployments for licensed mobile operators.",
    appliesToSubsection: ["carrier-infrastructure"],
  },

  // ─── Teledyne — Carrier Infrastructure (optical / microwave) ─────────
  {
    id: "teledyne-paradise-microwave",
    vendorId: "teledyne",
    productLine: "Teledyne Paradise Microwave Links",
    description:
      "High-capacity microwave and SATCOM modems engineered for long-haul backhaul, broadcast distribution, and resilient government backbones.",
    capabilityTags: ["Microwave", "SATCOM", "Backhaul"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: integration of Teledyne microwave and modem platforms into carrier and government backhaul programs.",
    appliesToSubsection: ["carrier-infrastructure"],
  },
  {
    id: "teledyne-optical-transport",
    vendorId: "teledyne",
    productLine: "Teledyne Optical Transport",
    description:
      "DWDM-grade optical sub-systems and ruggedized fiber transport components for inter-city, metro, and mission-critical networks.",
    capabilityTags: ["DWDM", "Optical", "Long-Haul"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: integration of optical sub-systems into national transport projects.",
    appliesToSubsection: ["carrier-infrastructure"],
  },

  // ─── Microchip — Network Operations & Timing ─────────────────────────
  {
    id: "microchip-timeprovider",
    vendorId: "microchip",
    productLine: "Microchip TimeProvider 4100 PTP Grandmaster",
    description:
      "PTP grandmaster clock with multi-band GNSS, ePRTC capability, and resilient holdover for telecom, power, and broadcast networks.",
    capabilityTags: ["PTP", "ePRTC", "GNSS", "Grandmaster"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized distribution and integration of PTP grandmaster timing infrastructure.",
    appliesToSubsection: ["network-operations"],
  },
  {
    id: "microchip-bluesky",
    vendorId: "microchip",
    productLine: "Microchip BlueSky GNSS Firewall",
    description:
      "GNSS jamming and spoofing protection for critical timing references, with anomaly detection and resilient holdover signaling.",
    capabilityTags: ["GNSS", "Anti-Jam", "Anti-Spoof", "Resilience"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: deployment of GNSS-resilience platforms into critical-infrastructure networks.",
    appliesToSubsection: ["network-operations"],
  },
  {
    id: "microchip-cesium",
    vendorId: "microchip",
    productLine: "Microchip 5071A Cesium Frequency Standard",
    description:
      "Primary cesium reference clock delivering long-term frequency stability for national timing labs and telecom anchor sites.",
    capabilityTags: ["Cesium", "Primary Reference", "Stability"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: lifecycle integration and calibration support for cesium primary references.",
    appliesToSubsection: ["network-operations"],
  },
  {
    id: "ast-noc-platform",
    vendorId: "nokia",
    productLine: "AST 24/7 NOC & Managed Services",
    description:
      "AST-operated NOC delivering 24/7 monitoring, incident management, KPI optimization, and structured escalation across multi-vendor networks.",
    capabilityTags: ["NOC", "Multi-vendor", "SLA", "Optimization"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq & MENA: AST-operated NOC under direct OEM partnerships and customer-specific contracts.",
    appliesToSubsection: ["network-operations"],
  },

  // ─── FLIR — Detection & Monitoring ───────────────────────────────────
  {
    id: "flir-triton-fh",
    vendorId: "flir",
    productLine: "FLIR Triton FH Series Thermal Cameras",
    description:
      "Outdoor-rated multi-spectrum fixed cameras combining thermal, visible, and on-board analytics for perimeter intrusion detection.",
    capabilityTags: ["Thermal", "Multi-spectrum", "Analytics"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: distribution, integration, calibration, and field sustainment of FLIR fixed thermal platforms.",
    appliesToSubsection: ["detection-monitoring"],
  },
  {
    id: "flir-saros",
    vendorId: "flir",
    productLine: "FLIR Saros Dome",
    description:
      "Multi-spectrum perimeter dome with thermal, 4K visible, IR illumination, and on-board AI for high-density site surveillance.",
    capabilityTags: ["PTZ", "AI", "Thermal", "4K"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized deployment for force-protection and critical-infrastructure programs.",
    appliesToSubsection: ["detection-monitoring"],
  },
  {
    id: "flir-ranger-radar",
    vendorId: "flir",
    productLine: "FLIR Ranger Ground Surveillance Radar",
    description:
      "Compact ground surveillance radars for wide-area perimeter and border detection with track-while-scan and slew-to-cue integration.",
    capabilityTags: ["GSR", "Track-while-scan", "Slew-to-cue"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: integration of ground surveillance radar into layered border-detection programs.",
    appliesToSubsection: ["detection-monitoring"],
  },
  {
    id: "flir-united-vms",
    vendorId: "flir",
    productLine: "FLIR United VMS Command Platform",
    description:
      "Operator-grade VMS unifying thermal, radar, and EO/IR feeds with event-driven workflows, video analytics, and audit trails.",
    capabilityTags: ["VMS", "Analytics", "Workflow"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: integration and operator training for unified command-and-control deployments.",
    appliesToSubsection: ["detection-monitoring"],
  },

  // ─── Genasys — Detection & Monitoring (acoustic) ─────────────────────
  {
    id: "genasys-lrad-1000x",
    vendorId: "genasys",
    productLine: "Genasys LRAD 1000X Acoustic Hailing",
    description:
      "Mid-range directed-audio system for site security, perimeter de-escalation, and standoff communication with clear intelligibility at 1.5km+.",
    capabilityTags: ["Acoustic", "Hailing", "De-escalation"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: project-based integration and operator training for LRAD 1000X deployments.",
    appliesToSubsection: ["detection-monitoring"],
  },
  {
    id: "genasys-lrad-2000x",
    vendorId: "genasys",
    productLine: "Genasys LRAD 2000X Long-Range Acoustic",
    description:
      "Long-range acoustic hailing for maritime, border, and large-perimeter sites with extended standoff communication and integration with detection platforms.",
    capabilityTags: ["Long-Range", "Maritime", "Border"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: deployment of LRAD 2000X within border and critical-infrastructure programs.",
    appliesToSubsection: ["detection-monitoring"],
  },
  {
    id: "genasys-mass-notification",
    vendorId: "genasys",
    productLine: "Genasys Mass Notification Platform",
    description:
      "Geo-targeted mass-notification and emergency-warning platform combining acoustic, SMS, and software channels for civil-defense and critical sites.",
    capabilityTags: ["Mass Notification", "Geo-targeting", "Civil Defense"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: integration of mass-notification workflows into national emergency programs.",
    appliesToSubsection: ["detection-monitoring"],
  },

  // ─── Leidos — Screening & Inspection ─────────────────────────────────
  {
    id: "leidos-vacis-xpl",
    vendorId: "leidos",
    productLine: "Leidos VACIS XPL Cargo Inspection",
    description:
      "Large-portal X-ray cargo inspection for trucks and containers with high-energy imaging and operator-assisted threat detection.",
    capabilityTags: ["Cargo X-Ray", "High-Energy", "Portal"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized integration, operator training, and sustainment of VACIS cargo systems.",
    appliesToSubsection: ["screening-inspection"],
  },
  {
    id: "leidos-vacis-mp",
    vendorId: "leidos",
    productLine: "Leidos VACIS MP Mobile Inspection",
    description:
      "Mobile X-ray inspection system for forward-deployable border checkpoints, ports, and rapidly redeployable inspection lanes.",
    capabilityTags: ["Mobile", "Borders", "Rapid Deploy"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: deployment and operator readiness for mobile inspection assets.",
    appliesToSubsection: ["screening-inspection"],
  },
  {
    id: "leidos-parcel",
    vendorId: "leidos",
    productLine: "Leidos Parcel & Baggage X-Ray",
    description:
      "Dual-view X-ray for parcel, baggage, and small-cargo screening at checkpoints, courier facilities, and high-throughput access control.",
    capabilityTags: ["Dual-view", "Baggage", "Parcel"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: distribution and integration of parcel and baggage inspection platforms.",
    appliesToSubsection: ["screening-inspection"],
  },

  // ─── L3Harris — Screening & Inspection ───────────────────────────────
  {
    id: "l3harris-provision-2",
    vendorId: "l3harris",
    productLine: "L3Harris ProVision 2 Millimeter-Wave",
    description:
      "Body-screening millimeter-wave imager with automatic threat detection, aligned to ICAO and TSA standards for aviation and high-traffic checkpoints.",
    capabilityTags: ["AIT", "mmWave", "Auto Detection"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: deployment, integration, and lifecycle support of ProVision 2 passenger screening systems.",
    appliesToSubsection: ["screening-inspection"],
  },
  {
    id: "l3harris-cx-checkpoint",
    vendorId: "l3harris",
    productLine: "L3Harris ClearScan CX Checkpoint",
    description:
      "Computed-tomography checkpoint scanner for cabin baggage with 3D imaging, automated threat detection, and reduced divestment requirements.",
    capabilityTags: ["CT", "3D Imaging", "Checkpoint"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: authorized integration and operator readiness for CT-based checkpoint deployments.",
    appliesToSubsection: ["screening-inspection"],
  },
  {
    id: "l3harris-etd",
    vendorId: "l3harris",
    productLine: "L3Harris Trace Detection",
    description:
      "Explosive trace detection systems for swab-based screening at checkpoints, secure facilities, and mobile inspection lanes.",
    capabilityTags: ["ETD", "Trace", "Mobile"],
    datasheetUrl: "#",
    authorizationScope:
      "Iraq: distribution and integration of trace detection systems within layered screening programs.",
    appliesToSubsection: ["screening-inspection"],
  },
];

export function getProductsForSubsection(subsectionId: string): PartnerProduct[] {
  return products.filter((product) =>
    product.appliesToSubsection.includes(subsectionId)
  );
}

export function getProductsByVendor(vendorId: string): PartnerProduct[] {
  return products.filter((product) => product.vendorId === vendorId);
}
