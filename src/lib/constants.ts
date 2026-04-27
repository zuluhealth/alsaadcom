export const SITE_NAME = "Al Saad Telecom";
export const SITE_TAGLINE = "A Safer Tomorrow";
export const SITE_DESCRIPTION =
  "As a systems integrator with deep expertise in secured communications, security infrastructure, and telecommunications, AST takes a comprehensive approach — engineering solutions, maintaining them, and delivering sustained support throughout their lifecycle.";
export const SITE_URL = "https://alsaadtelecom.com";

export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Values", href: "/values" },
] as const;

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Facebook", href: "#" },
] as const;

export const ANIMATION = {
  ease: [0.25, 0.1, 0.25, 1.0] as [number, number, number, number],
  easeOutExpo: [0.22, 1, 0.36, 1] as [number, number, number, number],
  duration: {
    fast: 0.25,
    normal: 0.4,
    slow: 0.6,
    page: 0.5,
    reveal: 0.7,
  },
  stagger: {
    fast: 0.05,
    normal: 0.08,
    slow: 0.12,
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;
