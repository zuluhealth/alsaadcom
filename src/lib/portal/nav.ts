export interface NavItem {
  label: string;
  href: string;
  index?: string;
  badge?: string;
}

export interface NavGroup {
  label: string;
  icon?: string; // lucide icon name as string, resolved in component
  items: NavItem[];
}

export const portalNav: NavGroup[] = [
  {
    label: "Briefing",
    icon: "LayoutGrid",
    items: [
      { index: "00", label: "Hub", href: "/portal" },
      { index: "01", label: "Overview", href: "/portal/overview" },
      { index: "02", label: "Why AST", href: "/portal/why-ast" },
    ],
  },
  {
    label: "Domains",
    icon: "Radio",
    items: [
      {
        index: "03",
        label: "Telecommunications",
        href: "/portal/telecommunications",
      },
      { index: "03", label: "Security", href: "/portal/security" },
    ],
  },
  {
    label: "Proof",
    icon: "Shield",
    items: [
      { index: "04", label: "Proven Delivery", href: "/portal/proven-delivery" },
      { index: "05", label: "Programs", href: "/portal/experience" },
      { index: "06", label: "Iraq Footprint", href: "/portal/footprint" },
      {
        index: "07",
        label: "Technology Partners",
        href: "/portal/technology-partners",
      },
    ],
  },
  {
    label: "Operations",
    icon: "GraduationCap",
    items: [
      {
        index: "08",
        label: "Compliance & Governance",
        href: "/portal/compliance",
      },
      {
        index: "09",
        label: "Support & Sustainment",
        href: "/portal/training",
      },
      { index: "10", label: "Solutions by Sector", href: "/portal/sectors" },
    ],
  },
  {
    label: "Resources",
    icon: "FileText",
    items: [
      { index: "11", label: "Document Center", href: "/portal/documents" },
      {
        index: "12",
        label: "Become a Partner",
        href: "/portal/become-a-partner",
      },
    ],
  },
  {
    label: "Tier 2",
    icon: "Archive",
    items: [
      { label: "Deal Rooms", href: "/portal/deal-rooms", badge: "PROVISIONED" },
    ],
  },
];
