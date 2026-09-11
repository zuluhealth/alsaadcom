import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Vision, Mission & Values",
  description:
    "Discover the principles guiding Al Saad Telecom's engineering, client partnerships, and long-term support.",
  path: "/values",
});

export default function ValuesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
