import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers",
  description:
    "Explore engineering and technical career opportunities with Al Saad Telecom across Iraq.",
  path: "/careers",
});

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
