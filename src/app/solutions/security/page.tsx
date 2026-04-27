import type { Metadata } from "next";
import SecurityContent from "./SecurityContent";

export const metadata: Metadata = {
  title: "Security",
};

export default function SecurityPage() {
  return <SecurityContent />;
}
