import type { Metadata } from "next";
import SecurityContent from "./SecurityContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Security Solutions",
  description:
    "Integrated detection, monitoring, screening, and lifecycle support for critical security infrastructure and complex operations.",
  path: "/solutions/security",
});

export default function SecurityPage() {
  return <SecurityContent />;
}
