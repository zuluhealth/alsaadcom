import type { Metadata } from "next";
import TelecomContent from "./TelecomContent";

export const metadata: Metadata = {
  title: "Telecommunications",
};

export default function TelecomPage() {
  return <TelecomContent />;
}
