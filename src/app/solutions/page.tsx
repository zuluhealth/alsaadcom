import type { Metadata } from "next";
import SolutionsOverview from "./SolutionsOverview";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Solutions",
  description:
    "Explore Al Saad Telecom's secured communications, telecommunications, and integrated security solutions for demanding operations.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return <SolutionsOverview />;
}
