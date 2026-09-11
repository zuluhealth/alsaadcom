"use client";

import { Fragment, useMemo, useState } from "react";
import { Search } from "lucide-react";
import PortalSection from "@/components/portal/PortalSection";
import DocumentRow from "@/components/portal/DocumentRow";
import FadeIn from "@/components/ui/FadeIn";
import type { DocumentEntry } from "@/lib/portal/types";
import s from "./page.module.scss";

type CategoryFilter = "all" | DocumentEntry["category"];

const FILTERS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "datasheet", label: "Datasheets" },
  { id: "authorization", label: "Authorizations" },
  { id: "case-study", label: "Case Studies" },
  { id: "certificate", label: "Certificates" },
  { id: "training", label: "Training Material" },
];

export default function DocumentsBrowser({ documents }: { documents: DocumentEntry[] }) {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { all: documents.length };
    for (const doc of documents) {
      c[doc.category] = (c[doc.category] ?? 0) + 1;
    }
    return c;
  }, [documents]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return documents.filter((doc) => {
      const matchesCategory =
        activeFilter === "all" || doc.category === activeFilter;
      const matchesQuery =
        q === "" ||
        doc.title.toLowerCase().includes(q) ||
        (doc.vendor?.toLowerCase().includes(q) ?? false);
      return matchesCategory && matchesQuery;
    });
  }, [documents, activeFilter, query]);

  return (
    <div className={s.page}>
      <FadeIn>
        <PortalSection
          eyebrow="RESOURCES"
          title="Document Center"
          description="Datasheets, authorization letters, case studies, and certificates available to authorized partners. Files are placeholders — production assets are gated via the AST program office."
        />
      </FadeIn>

      <FadeIn delay={0.03}>
        <div className={s.notice} role="note">
          <span className={s.noticeMark} aria-hidden="true">
            [ ! ]
          </span>
          <p className={s.noticeText}>
            Downloads are provisioned per recipient and watermarked. Files in
            this preview are placeholders.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={0.05}>
        <div className={s.controls}>
          <div className={s.searchWrap}>
            <Search
              size={15}
              strokeWidth={1.6}
              className={s.searchIcon}
              aria-hidden="true"
            />
            <input
              type="search"
              className={s.search}
              placeholder="Search documents by title or vendor..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search documents"
            />
          </div>

          <div
            className={s.filterStrip}
            role="tablist"
            aria-label="Filter by document category"
          >
            {FILTERS.map((filter, i) => {
              const count =
                filter.id === "all"
                  ? counts.all
                  : counts[filter.id] ?? 0;
              const isActive = filter.id === activeFilter;
              return (
                <Fragment key={filter.id}>
                  {i > 0 ? (
                    <span className={s.filterDivider} aria-hidden="true">
                      {"//"}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`${s.filter} ${isActive ? s.filterActive : ""}`}
                    onClick={() => setActiveFilter(filter.id)}
                  >
                    <span>{filter.label}</span>
                    <span className={s.filterCount}>
                      ({String(count).padStart(2, "0")})
                    </span>
                  </button>
                </Fragment>
              );
            })}
          </div>

          <span className={s.summary}>
            SHOWING {String(filtered.length).padStart(2, "0")} OF{" "}
            {String(documents.length).padStart(2, "0")} DOCUMENTS
          </span>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        {filtered.length === 0 ? (
          <p className={s.empty}>No documents match the current filter.</p>
        ) : (
          <div className={s.list}>
            {filtered.map((doc) => (
              <DocumentRow key={doc.id} doc={doc} />
            ))}
          </div>
        )}
      </FadeIn>
    </div>
  );
}
