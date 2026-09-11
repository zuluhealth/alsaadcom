"use client";

import { useState } from "react";
import s from "./page.module.scss";

export default function CopyButton({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — no-op.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={className ?? s.ghostButton}
    >
      {copied ? "[ COPIED ]" : "[ COPY LINK ]"}
    </button>
  );
}
