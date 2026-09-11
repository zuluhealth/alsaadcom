"use client";

import { usePathname } from "next/navigation";

const HIDDEN_PREFIXES = ["/portal", "/partner-login"];

interface ChromeGuardProps {
  children: React.ReactNode;
}

/**
 * Conditionally renders public-facing chrome (Navbar / Footer).
 * Returns null when the current route belongs to the gated portal
 * or partner-login flow, so those routes can supply their own shell.
 */
export default function ChromeGuard({ children }: ChromeGuardProps) {
  const pathname = usePathname() ?? "";
  const isHidden = HIDDEN_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (isHidden) return null;
  return <>{children}</>;
}
