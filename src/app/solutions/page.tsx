import type { Metadata } from "next";
import SolutionsOverview from "./SolutionsOverview";

export const metadata: Metadata = {
  title: "Solutions",
};

export default function SolutionsPage() {
  return <SolutionsOverview />;
}
