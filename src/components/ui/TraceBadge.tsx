"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ShieldCheck } from "lucide-react";
import s from "./TraceBadge.module.scss";

const COMPLIANCE_POINTS = [
  {
    title: "Independent Due Diligence",
    body: "AST undergoes rigorous third-party due diligence reviews administered by TRACE International, including verification of corporate ownership, leadership, and operational practices.",
  },
  {
    title: "FCPA & UK Anti-Bribery Act Alignment",
    body: "Our policies and procedures are aligned with the U.S. Foreign Corrupt Practices Act (FCPA) and the UK Bribery Act 2010, with annual training delivered to every employee.",
  },
  {
    title: "Annual Recertification",
    body: "TRACE certification is renewed annually, with each cycle including refreshed background checks, updated questionnaires, and re-attestation of our anti-bribery commitments.",
  },
  {
    title: "Code of Conduct & Reporting",
    body: "AST maintains a documented Code of Conduct, a confidential reporting channel for employees and partners, and a zero-tolerance policy on bribery and corruption.",
  },
  {
    title: "Partner & Supplier Vetting",
    body: "All third parties engaged on behalf of AST &mdash; including agents, consultants, and suppliers &mdash; are screened against international sanctions lists and assessed for compliance risk.",
  },
];

export default function TraceBadge() {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={s.badge}
        aria-label="View TRACE compliance details"
      >
        <svg
          viewBox="0 0 120 48"
          className={s.logo}
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            x="1"
            y="1"
            width="118"
            height="46"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.25"
          />
          <text
            x="60"
            y="22"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="15"
            fontWeight="700"
            letterSpacing="3"
            fill="currentColor"
          >
            TRACE
          </text>
          <line
            x1="18"
            y1="28"
            x2="102"
            y2="28"
            stroke="currentColor"
            strokeWidth="0.6"
            opacity="0.4"
          />
          <text
            x="60"
            y="40"
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="6"
            letterSpacing="2"
            fill="currentColor"
            opacity="0.7"
          >
            CERTIFIED
          </text>
        </svg>
      </button>

      {isOpen && (
        <div
          className={s.overlay}
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-labelledby="trace-modal-title"
        >
          <div
            className={s.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className={s.closeBtn}
              aria-label="Close"
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            <div className={s.modalHeader}>
              <div className={s.modalIcon}>
                <ShieldCheck size={22} strokeWidth={1.5} />
              </div>
              <p className={s.modalEyebrow}>TRACE Certification</p>
              <h2 id="trace-modal-title" className={s.modalTitle}>
                How AST maintains compliance
              </h2>
              <p className={s.modalLede}>
                AST is a TRACE-certified company. The list below outlines the
                core measures we maintain to uphold our certification under
                FCPA, the UK Bribery Act, and other anti-corruption frameworks.
                Final language to be confirmed by the client.
              </p>
            </div>

            <ul className={s.list}>
              {COMPLIANCE_POINTS.map((point) => (
                <li key={point.title} className={s.item}>
                  <h3 className={s.itemTitle}>{point.title}</h3>
                  <p
                    className={s.itemBody}
                    dangerouslySetInnerHTML={{ __html: point.body }}
                  />
                </li>
              ))}
            </ul>

            <p className={s.placeholderNote}>
              Placeholder copy &mdash; awaiting final compliance text from the
              client.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
