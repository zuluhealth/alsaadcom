import type { Metadata } from "next";
import TelecomContent from "./TelecomContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Telecommunications Solutions",
  description:
    "Resilient RF, satellite, network, and secured communications systems engineered and supported for mission-critical environments.",
  path: "/solutions/telecommunications",
});

export default function TelecomPage() {
  return <TelecomContent />;
}
