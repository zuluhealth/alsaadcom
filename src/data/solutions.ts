import type { Solution } from "@/lib/types";

export const solutions: Solution[] = [
  {
    id: "commercial-solutions",
    slug: "commercial-solutions",
    title: "Commercial Solutions",
    category: "commercial",
    description:
      "Comprehensive telecommunications and IT infrastructure solutions designed for enterprise, government, and commercial clients across Iraq. From fiber optic networks to fully managed data centers, AST delivers end-to-end connectivity that powers modern business operations.",
    capabilities: [
      {
        title: "Management Systems",
        description:
          "Centralized network management and monitoring platforms providing real-time visibility, automated diagnostics, and performance analytics across your entire infrastructure.",
        icon: "settings",
      },
      {
        title: "Communications Networks",
        description:
          "Design, deployment, and optimization of multi-technology communications networks including LTE, 5G-ready, and legacy systems to ensure seamless coverage and capacity.",
        icon: "network",
      },
      {
        title: "Network Optimization",
        description:
          "Advanced RF planning, drive testing, and network tuning services to maximize throughput, minimize interference, and improve quality of service across your network.",
        icon: "activity",
      },
      {
        title: "Full IT Connectivity",
        description:
          "Enterprise-grade IT solutions including LAN/WAN design, SD-WAN, cloud connectivity, cybersecurity, and unified communications for complete digital transformation.",
        icon: "globe",
      },
      {
        title: "Infrastructure",
        description:
          "Turnkey infrastructure solutions including tower construction, shelter installation, power systems, and site acquisition to support network expansion across challenging terrain.",
        icon: "building",
      },
      {
        title: "Microwave Networks",
        description:
          "Point-to-point and point-to-multipoint microwave backhaul solutions delivering high-capacity, low-latency connectivity for mobile operators and enterprise clients.",
        icon: "radio",
      },
      {
        title: "VOIP Solutions",
        description:
          "Enterprise Voice over IP systems including SIP trunking, hosted PBX, contact center solutions, and unified communications platforms for cost-effective voice services.",
        icon: "phone",
      },
      {
        title: "VSAT Communications",
        description:
          "Satellite-based connectivity solutions providing reliable broadband access to remote locations, oil fields, and areas beyond terrestrial network coverage.",
        icon: "satellite-dish",
      },
      {
        title: "Broadband Solutions",
        description:
          "High-speed broadband access technologies including fixed wireless, DSL, and hybrid solutions to bridge the digital divide and connect underserved communities.",
        icon: "wifi",
      },
      {
        title: "Fiber Optic Networks",
        description:
          "End-to-end fiber optic design, deployment, and splicing services for metro, backbone, and FTTH networks delivering ultra-high-speed connectivity.",
        icon: "cable",
      },
      {
        title: "Data Centers",
        description:
          "Design, build, and managed services for Tier II-IV data centers including power, cooling, physical security, and environmental monitoring systems.",
        icon: "server",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    ],
  },
  {
    id: "tactical-solutions",
    slug: "tactical-solutions",
    title: "Tactical Solutions",
    category: "tactical",
    description:
      "Mission-critical tactical communications and security systems engineered for defense, law enforcement, and border security operations. AST provides ruggedized, field-proven solutions that perform reliably in the most demanding environments.",
    capabilities: [
      {
        title: "HF/VHF/UHF Communications",
        description:
          "Military-grade radio systems spanning HF, VHF, and UHF frequency bands with encryption, frequency hopping, and interoperability for secure voice and data communications.",
        icon: "radio-tower",
      },
      {
        title: "Tactical VSAT",
        description:
          "Rapidly deployable satellite communication terminals designed for tactical operations, providing secure broadband connectivity in contested or austere environments.",
        icon: "satellite-dish",
      },
      {
        title: "Military Communications",
        description:
          "Integrated military communication systems including tactical data links, secure voice networks, and command-and-control platforms for joint force operations.",
        icon: "shield",
      },
      {
        title: "Border Security Systems",
        description:
          "Comprehensive border surveillance and control systems combining radar, electro-optical sensors, ground sensors, and integrated command centers for perimeter defense.",
        icon: "scan",
      },
      {
        title: "Mobile Command Centers",
        description:
          "Self-contained mobile command and control vehicles equipped with communications, ISR feeds, mapping systems, and battle management tools for field commanders.",
        icon: "truck",
      },
      {
        title: "Surveillance Systems",
        description:
          "Multi-sensor surveillance platforms integrating CCTV, thermal imaging, radar, and analytics for critical infrastructure protection and area monitoring.",
        icon: "eye",
      },
      {
        title: "Traffic Management Systems",
        description:
          "Intelligent traffic monitoring and management solutions including ANPR, speed enforcement, traffic flow analysis, and centralized traffic control centers.",
        icon: "traffic-cone",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
  },
  {
    id: "special-products",
    slug: "special-products",
    title: "Special Products",
    category: "special-products",
    description:
      "A curated portfolio of specialized defense and telecommunications products from world-leading manufacturers. AST serves as the authorized distributor and integrator, providing full lifecycle support including installation, commissioning, and maintenance.",
    capabilities: [
      {
        title: "Software Defined Radios",
        description:
          "Next-generation programmable radio platforms supporting multiple waveforms, enabling interoperability across coalition forces and future-proof communications.",
        icon: "cpu",
      },
      {
        title: "Electronic Warfare Systems",
        description:
          "Counter-IED, signal intelligence, and electronic countermeasure systems designed to protect forces and provide situational awareness in complex threat environments.",
        icon: "shield-alert",
      },
      {
        title: "Encryption Devices",
        description:
          "NSA/NATO-grade encryption solutions for voice, data, and video communications ensuring information security across classified and unclassified networks.",
        icon: "lock",
      },
      {
        title: "Ruggedized Computing",
        description:
          "MIL-STD-810 certified laptops, tablets, and servers designed for extreme temperatures, vibration, dust, and humidity found in field operations.",
        icon: "laptop",
      },
      {
        title: "Unmanned Systems",
        description:
          "Tactical unmanned aerial and ground systems for ISR, perimeter security, and infrastructure inspection with integrated command and control solutions.",
        icon: "plane",
      },
      {
        title: "Night Vision & Thermal",
        description:
          "Advanced night vision goggles, thermal weapon sights, and clip-on systems providing 24/7 operational capability in degraded visual environments.",
        icon: "moon",
      },
      {
        title: "Antenna Systems",
        description:
          "High-performance antenna systems including broadband, direction-finding, and phased array antennas for military and commercial communications applications.",
        icon: "signal",
      },
      {
        title: "Power Solutions",
        description:
          "Portable and fixed power generation, solar hybrid systems, and advanced battery technologies ensuring uninterrupted operations in remote and off-grid locations.",
        icon: "zap",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    ],
  },
  {
    id: "services",
    slug: "services",
    title: "Services",
    category: "services",
    description:
      "Full-spectrum professional services that complement our technology solutions. From initial consultancy through ongoing maintenance, AST provides the expertise needed to maximize the value of your investment and ensure long-term operational success.",
    capabilities: [
      {
        title: "Consultancy",
        description:
          "Expert advisory services including technology assessments, feasibility studies, spectrum planning, and strategic roadmaps tailored to your operational requirements.",
        icon: "lightbulb",
      },
      {
        title: "Project Management",
        description:
          "PMP-certified project management delivering complex multi-site deployments on time and within budget using proven methodologies and rigorous quality control.",
        icon: "clipboard-list",
      },
      {
        title: "System Design",
        description:
          "Detailed system architecture and engineering design services including RF planning, network modeling, and integration blueprints for optimal performance.",
        icon: "drafting-compass",
      },
      {
        title: "Installation & Commissioning",
        description:
          "Professional installation, integration, testing, and commissioning of telecommunications and IT systems by factory-trained and certified engineers.",
        icon: "wrench",
      },
      {
        title: "Logistics & Supply Chain",
        description:
          "End-to-end logistics management including procurement, warehousing, customs clearance, and delivery of equipment to the most challenging locations in Iraq.",
        icon: "package",
      },
      {
        title: "Maintenance & Support",
        description:
          "Preventive and corrective maintenance programs with guaranteed SLAs, 24/7 helpdesk support, and rapid spare parts provisioning to maximize network uptime.",
        icon: "life-buoy",
      },
      {
        title: "Training & Knowledge Transfer",
        description:
          "Comprehensive training programs including classroom instruction, hands-on labs, and on-the-job mentoring to build local technical capacity and self-sufficiency.",
        icon: "graduation-cap",
      },
      {
        title: "Managed Services",
        description:
          "Fully managed network operations including NOC services, performance monitoring, capacity planning, and continuous optimization for worry-free operations.",
        icon: "headset",
      },
    ],
    images: [
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80",
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800&q=80",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    ],
  },
];
