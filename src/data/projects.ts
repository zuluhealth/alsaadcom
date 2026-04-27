import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "gov-network-modernization",
    slug: "government-network-modernization",
    title: "National Government Network Modernization",
    industry: "Government",
    year: "2024",
    client: "Major Government Ministry",
    scope:
      "Design, supply, and deployment of a nationwide secure communications network connecting 120+ government facilities across 12 provinces.",
    challenge:
      "The client operated on a legacy network infrastructure that was over 15 years old, suffering from frequent outages, limited bandwidth, and no encryption. Communication between provincial offices and the capital was unreliable, impacting the ministry's ability to deliver essential public services efficiently.",
    solution:
      "AST designed and deployed a hybrid fiber-microwave backbone network connecting all provincial headquarters to the central ministry in Baghdad. The solution included MPLS routing, end-to-end encryption, redundant paths for critical links, and a centralized NOC for 24/7 monitoring. SD-WAN technology was implemented to optimize traffic across multiple transport methods.",
    results: [
      "99.95% network uptime achieved within the first year of operation",
      "Network capacity increased by 400% compared to the legacy system",
      "Deployment completed across all 12 provinces in 14 months",
      "Reduced monthly communications costs by 35% through traffic optimization",
      "Enabled secure video conferencing between all government facilities",
    ],
    technologies: [
      "Nokia Microwave",
      "Cisco SD-WAN",
      "MPLS",
      "Fiber Optics",
      "AES-256 Encryption",
    ],
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
    metrics: [
      { label: "Sites Connected", value: "120+" },
      { label: "Provinces Covered", value: "12" },
      { label: "Network Uptime", value: "99.95%" },
      { label: "Capacity Increase", value: "400%" },
    ],
  },
  {
    id: "military-tactical-comms",
    slug: "military-tactical-communications",
    title: "Armed Forces Tactical Communications Upgrade",
    industry: "Military & Defense",
    year: "2024",
    client: "National Defense Forces",
    scope:
      "Supply and integration of a modern tactical communications system including HF/VHF radios, mobile command posts, and a secure battlefield management network.",
    challenge:
      "The client's tactical communication assets were a mix of incompatible legacy systems from multiple vendors, resulting in poor interoperability between units. Secure voice and data transmission was limited, and there was no integrated command and control capability at the brigade level.",
    solution:
      "AST supplied and integrated a unified tactical communication architecture based on software-defined radios operating across HF, VHF, and UHF bands. The system includes vehicle-mounted and manpack configurations, crypto-enabled frequency hopping, and integration with a digital battlefield management system. Three mobile command post vehicles were custom-built with full C4ISR capabilities.",
    results: [
      "Full interoperability achieved across all brigade-level units",
      "Secure voice and data communications range extended by 60%",
      "Deployment of 3 fully equipped mobile command post vehicles",
      "Integration with existing ISR assets for real-time intelligence sharing",
      "Training provided to 200+ military personnel on new systems",
    ],
    technologies: [
      "Software Defined Radio",
      "Harris Falcon III",
      "Thales Vehicular Systems",
      "AES-256 / Type-1 Encryption",
      "C4ISR",
    ],
    images: [
      "https://images.unsplash.com/photo-1580752300992-559f8e0734e0?w=800&q=80",
      "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&q=80",
    ],
    metrics: [
      { label: "Units Equipped", value: "45+" },
      { label: "Personnel Trained", value: "200+" },
      { label: "Command Vehicles", value: "3" },
      { label: "Range Improvement", value: "60%" },
    ],
  },
  {
    id: "border-surveillance",
    slug: "border-surveillance-system",
    title: "National Border Surveillance System",
    industry: "Military & Defense",
    year: "2023",
    client: "Border Security Authority",
    scope:
      "Design and deployment of an integrated border surveillance system covering a 250km stretch of the national border, including sensor towers, radar, and a command center.",
    challenge:
      "A critical stretch of the national border lacked any electronic surveillance capability. Border security relied entirely on physical patrols, which left significant gaps in coverage, especially at night and during adverse weather conditions. Illegal crossings and smuggling were persistent concerns.",
    solution:
      "AST deployed an integrated border surveillance system comprising 35 sensor towers equipped with long-range EO/IR cameras, ground surveillance radar, and unattended ground sensors. All feeds are aggregated in a purpose-built border command center with a video wall, GIS mapping, and automated alert systems. A microwave backbone connects all tower sites with redundant links.",
    results: [
      "24/7 surveillance coverage across the entire 250km border stretch",
      "Detection range of 15km+ for vehicles and 8km+ for personnel",
      "Illegal crossing incidents reduced by 78% within the first 6 months",
      "Average response time to border incursions reduced from 45 to 8 minutes",
      "Full integration with national security coordination center",
    ],
    technologies: [
      "FLIR EO/IR Cameras",
      "Ground Surveillance Radar",
      "Microwave Backhaul",
      "GIS Command & Control",
      "Unattended Ground Sensors",
    ],
    images: [
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&q=80",
    ],
    metrics: [
      { label: "Border Covered", value: "250km" },
      { label: "Sensor Towers", value: "35" },
      { label: "Detection Range", value: "15km+" },
      { label: "Incident Reduction", value: "78%" },
    ],
  },
  {
    id: "oil-field-connectivity",
    slug: "oil-field-connectivity",
    title: "Southern Oil Fields Connectivity Program",
    industry: "Oil & Gas",
    year: "2024",
    client: "National Oil Company",
    scope:
      "Deployment of a comprehensive communications network across 8 major oil fields in southern Iraq, connecting wellheads, processing facilities, and administrative buildings.",
    challenge:
      "Oil field operations across the southern region relied on aging analog radio systems for voice communication and had virtually no data connectivity at remote wellheads. SCADA data was collected manually, causing delays in production monitoring and safety response. The harsh desert environment and vast distances between sites made terrestrial connectivity extremely challenging.",
    solution:
      "AST implemented a multi-technology solution combining VSAT for remote wellheads, microwave backhaul between major facilities, LTE private network for area coverage, and fiber optics within processing complexes. A SCADA overlay network was integrated to enable real-time monitoring of all production and safety parameters. An ATEX-certified WiFi system was deployed in hazardous zones.",
    results: [
      "Real-time SCADA monitoring enabled for 850+ wellheads",
      "Voice and data coverage extended to 100% of operational areas",
      "Production data reporting shifted from daily manual to real-time automated",
      "HSE incident response time improved by 65%",
      "Annual operational cost savings of $2.1 million through efficiency gains",
    ],
    technologies: [
      "Hughes VSAT",
      "Cambium PTP Microwave",
      "Nokia Private LTE",
      "SCADA Integration",
      "ATEX WiFi",
    ],
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&q=80",
      "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80",
    ],
    metrics: [
      { label: "Oil Fields Connected", value: "8" },
      { label: "Wellheads Monitored", value: "850+" },
      { label: "Coverage Achieved", value: "100%" },
      { label: "Cost Savings", value: "$2.1M/yr" },
    ],
  },
  {
    id: "telecom-ran-deployment",
    slug: "telecom-operator-ran-deployment",
    title: "4G LTE Network Expansion",
    industry: "Telecom Operators",
    year: "2023",
    client: "Major Mobile Operator",
    scope:
      "Turnkey deployment of 450 new 4G LTE base stations across northern Iraq, including site acquisition, civil works, equipment installation, commissioning, and optimization.",
    challenge:
      "The operator needed to rapidly expand 4G LTE coverage across the northern provinces to meet growing data demand and regulatory coverage obligations. Challenging terrain, harsh winter conditions, and complex local permitting processes required a partner with deep regional expertise and proven execution capability.",
    solution:
      "AST managed the entire project lifecycle from site acquisition through network optimization. Our teams secured 450 site locations, performed civil and structural works, installed and commissioned Ericsson and Nokia RAN equipment, deployed microwave backhaul, and conducted drive test optimization. A dedicated project management office tracked progress across all workstreams using a custom dashboard.",
    results: [
      "450 new LTE sites deployed across 4 northern provinces",
      "4G population coverage increased from 65% to 92% in the target area",
      "Average deployment rate of 40 sites per month achieved at peak",
      "First-call success rate of 98.7% achieved post-optimization",
      "Project completed 6 weeks ahead of schedule",
    ],
    technologies: [
      "Ericsson RBS 6000",
      "Nokia AirScale",
      "Cambium Microwave",
      "Antenna Systems",
      "Drive Test & Optimization",
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
    ],
    metrics: [
      { label: "Sites Deployed", value: "450" },
      { label: "Coverage Increase", value: "27%" },
      { label: "Monthly Rate", value: "40 sites" },
      { label: "Ahead of Schedule", value: "6 weeks" },
    ],
  },
  {
    id: "police-city-surveillance",
    slug: "city-surveillance-network",
    title: "Metropolitan Surveillance & Safety Network",
    industry: "Police & Public Safety",
    year: "2024",
    client: "Provincial Police Command",
    scope:
      "Design and installation of a city-wide video surveillance network with 2,000+ cameras, intelligent analytics, and a centralized monitoring command center.",
    challenge:
      "Rising urban security concerns required a comprehensive surveillance capability across the metropolitan area. The police command lacked real-time situational awareness and relied on manual patrols and post-incident investigations. Existing CCTV installations were isolated, analog, and poorly maintained.",
    solution:
      "AST deployed an IP-based citywide surveillance network with 2,200 cameras at strategic locations including intersections, public spaces, government buildings, and critical infrastructure. The system features AI-powered video analytics for automatic detection of incidents, license plate recognition, and crowd analysis. A state-of-the-art command center with a 40-screen video wall enables real-time monitoring and rapid dispatch.",
    results: [
      "2,200 cameras deployed across the metropolitan area",
      "Crime rate in surveilled areas reduced by 32% within the first year",
      "Average police response time reduced from 22 to 9 minutes",
      "AI analytics processing over 50 million video events per month",
      "Integration with traffic management and emergency services",
    ],
    technologies: [
      "Hikvision DeepInView",
      "ANPR Systems",
      "Video Analytics AI",
      "Fiber & Wireless Backhaul",
      "C3 Command Center",
    ],
    images: [
      "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=800&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    ],
    metrics: [
      { label: "Cameras Deployed", value: "2,200" },
      { label: "Crime Reduction", value: "32%" },
      { label: "Response Time", value: "9 min" },
      { label: "Monthly Events", value: "50M+" },
    ],
  },
  {
    id: "enterprise-data-center",
    slug: "enterprise-data-center",
    title: "Tier III Enterprise Data Center",
    industry: "Corporate, SME & NGOs",
    year: "2023",
    client: "Leading Financial Institution",
    scope:
      "Design and construction of a Tier III data center facility including power, cooling, physical security, network infrastructure, and disaster recovery capabilities.",
    challenge:
      "The client's existing server room could no longer support growing digital banking and payment processing demands. Frequent power fluctuations were causing downtime, and the facility lacked adequate cooling, fire suppression, and physical security. Regulatory requirements mandated Tier III equivalency for financial services data processing.",
    solution:
      "AST designed and built a 500-square-meter Tier III equivalent data center featuring N+1 redundancy across all critical systems. The facility includes dual power feeds with diesel generator backup, precision air cooling, gas-based fire suppression, biometric access control, and VESDA early warning systems. The network architecture supports 100Gbps connectivity with dual diverse paths to major internet exchanges.",
    results: [
      "99.982% uptime achieved in the first year, exceeding Tier III targets",
      "PUE (Power Usage Effectiveness) of 1.45 achieved through efficient cooling design",
      "Data center capacity supports 120 racks with room for 40% future expansion",
      "Disaster recovery site activated within 15 minutes during failover testing",
      "Full compliance with Central Bank data center regulatory requirements",
    ],
    technologies: [
      "Schneider Electric UPS",
      "Emerson Precision Cooling",
      "Cisco Nexus Fabric",
      "VESDA Fire Detection",
      "BMS Integration",
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    ],
    metrics: [
      { label: "Uptime", value: "99.982%" },
      { label: "PUE", value: "1.45" },
      { label: "Rack Capacity", value: "120" },
      { label: "Failover Time", value: "15 min" },
    ],
  },
  {
    id: "marine-port-comms",
    slug: "port-communications-system",
    title: "Major Port Communications System",
    industry: "Marine",
    year: "2023",
    client: "National Port Authority",
    scope:
      "Supply and installation of an integrated port communications system including VHF marine radio, GMDSS, vessel tracking, and port operations management platform.",
    challenge:
      "The country's busiest port operated with outdated analog radio equipment and no electronic vessel tracking system. Communication between harbor control, pilots, and vessels was unreliable, creating safety risks in the congested waterway. Port operations were managed with paper-based processes, causing delays and inefficiencies.",
    solution:
      "AST deployed a comprehensive digital port communications system featuring a GMDSS-compliant VHF/DSC radio network, AIS (Automatic Identification System) for vessel tracking, and a port management software platform. The system includes an integrated harbor control center with radar overlay, electronic charts, and VTS (Vessel Traffic Service) capabilities. CCTV monitoring covers all berths, approaches, and storage areas.",
    results: [
      "100% VHF coverage across the entire port area and approaches",
      "Real-time tracking of all vessels within 50 nautical miles",
      "Port turnaround time reduced by 25% through operational optimization",
      "Zero communication-related safety incidents since system activation",
      "Paper-based processes eliminated through digital port management system",
    ],
    technologies: [
      "Rohde & Schwarz Marine VHF",
      "AIS Vessel Tracking",
      "VTS Radar Integration",
      "Port Management Software",
      "Marine CCTV",
    ],
    images: [
      "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=800&q=80",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    ],
    metrics: [
      { label: "VHF Coverage", value: "100%" },
      { label: "Tracking Range", value: "50 NM" },
      { label: "Turnaround Reduction", value: "25%" },
      { label: "Safety Incidents", value: "Zero" },
    ],
  },
  {
    id: "broadcast-infrastructure",
    slug: "broadcast-infrastructure-upgrade",
    title: "National Broadcast Infrastructure Upgrade",
    industry: "Media & Broadcasting",
    year: "2024",
    client: "National Broadcasting Corporation",
    scope:
      "Modernization of the national broadcaster's transmission infrastructure from analog to digital, covering 15 transmitter sites and a new playout center.",
    challenge:
      "The national broadcaster was still operating on aging analog transmission infrastructure dating back to the 1990s. Signal quality was poor, coverage was limited to urban areas, and the organization risked losing spectrum rights if it did not transition to digital broadcasting within the government-mandated timeline.",
    solution:
      "AST managed the complete analog-to-digital transition including the installation of DVB-T2 transmitters at 15 sites, a new digital playout and encoding center, satellite uplink for nationwide distribution, and a monitoring system for all transmitter sites. The project included comprehensive training for the broadcaster's technical staff on digital operations and maintenance.",
    results: [
      "Digital TV coverage expanded from 45% to 88% of the population",
      "Number of available channels increased from 3 to 24",
      "Signal quality improved to HD standard across coverage area",
      "Energy consumption reduced by 40% compared to analog transmitters",
      "Digital transition completed 3 months ahead of regulatory deadline",
    ],
    technologies: [
      "DVB-T2 Transmitters",
      "Satellite Uplink Systems",
      "Digital Playout Center",
      "Rohde & Schwarz Monitoring",
      "SFN Network",
    ],
    images: [
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
    ],
    metrics: [
      { label: "Population Coverage", value: "88%" },
      { label: "Transmitter Sites", value: "15" },
      { label: "Channels Available", value: "24" },
      { label: "Energy Reduction", value: "40%" },
    ],
  },
  {
    id: "fiber-backbone-deployment",
    slug: "fiber-backbone-deployment",
    title: "Inter-City Fiber Optic Backbone",
    industry: "Telecom Operators",
    year: "2024",
    client: "National Telecommunications Provider",
    scope:
      "Design and construction of a 1,200km fiber optic backbone network connecting Baghdad to Basra via major cities, with 100Gbps DWDM capacity.",
    challenge:
      "The existing inter-city transmission network relied on aging microwave links that were severely capacity-constrained. Growing data traffic from mobile networks and enterprise customers was causing congestion, and the provider had no path to support future 5G backhaul requirements without a fiber backbone.",
    solution:
      "AST designed and constructed a 1,200km buried fiber optic route connecting Baghdad, Hillah, Diwaniyah, Nasiriyah, and Basra. The system uses 96-fiber ADSS cable with DWDM equipment supporting 100Gbps per wavelength with a design capacity of 9.6Tbps. The route includes fiber access points every 3km and regeneration sites every 80km. A parallel monitoring fiber enables real-time fault detection and localization.",
    results: [
      "1,200km of fiber optic cable successfully deployed and commissioned",
      "Initial lit capacity of 400Gbps with scalability to 9.6Tbps",
      "Network latency between Baghdad and Basra reduced from 45ms to 6ms",
      "Enabled launch of 5G services in connected cities",
      "99.999% availability achieved through dual-ring protection",
    ],
    technologies: [
      "96-Fiber ADSS Cable",
      "Nokia DWDM Platform",
      "OTDR Monitoring",
      "Ring Protection",
      "Fiber Splice Enclosures",
    ],
    images: [
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    ],
    metrics: [
      { label: "Route Length", value: "1,200km" },
      { label: "Design Capacity", value: "9.6 Tbps" },
      { label: "Latency Reduction", value: "87%" },
      { label: "Availability", value: "99.999%" },
    ],
  },
];
