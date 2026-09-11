import type { Metadata } from "next";
import PortalShell from "@/components/portal/PortalShell";
import { requirePartnerSession } from "@/lib/portal/session";

export const metadata: Metadata = {
  title: "Partner Portal",
  description: "Authorized partners only. Programs, authorizations, and shared documentation for AST partners.",
  robots: { index: false, follow: false },
};

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await requirePartnerSession();

  return <PortalShell session={session}>{children}</PortalShell>;
}
