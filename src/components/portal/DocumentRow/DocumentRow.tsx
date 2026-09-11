import { FileText, Award, BadgeCheck, BookOpen, GraduationCap, Download } from "lucide-react";
import type { DocumentEntry } from "@/lib/portal/types";
import s from "./DocumentRow.module.scss";

interface DocumentRowProps {
  doc: DocumentEntry;
}

const categoryLabels: Record<DocumentEntry["category"], string> = {
  datasheet: "Datasheet",
  authorization: "Authorization",
  certificate: "Certificate",
  "case-study": "Case Study",
  training: "Training",
};

function categoryIcon(category: DocumentEntry["category"]) {
  switch (category) {
    case "datasheet":
      return <FileText size={15} strokeWidth={1.6} />;
    case "authorization":
      return <BadgeCheck size={15} strokeWidth={1.6} />;
    case "certificate":
      return <Award size={15} strokeWidth={1.6} />;
    case "case-study":
      return <BookOpen size={15} strokeWidth={1.6} />;
    case "training":
      return <GraduationCap size={15} strokeWidth={1.6} />;
    default:
      return <FileText size={15} strokeWidth={1.6} />;
  }
}

export default function DocumentRow({ doc }: DocumentRowProps) {
  return (
    <div className={s.row}>
      <div className={s.badge} aria-label={categoryLabels[doc.category]}>
        {categoryIcon(doc.category)}
      </div>

      <div className={s.main}>
        <div className={s.titleRow}>
          <span className={s.category}>{categoryLabels[doc.category]}</span>
          <h4 className={s.title}>{doc.title}</h4>
        </div>
        <div className={s.meta}>
          {doc.vendor ? <span>{doc.vendor}</span> : null}
          {doc.vendor ? <span aria-hidden="true">·</span> : null}
          <span>{doc.date}</span>
          <span aria-hidden="true">·</span>
          <span>
            {doc.fileType.toUpperCase()} · {doc.fileSize}
          </span>
        </div>
      </div>

      <a
        href={doc.url}
        className={s.action}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={`Download ${doc.title}`}
      >
        <Download size={14} strokeWidth={1.6} />
        <span>Download</span>
      </a>
    </div>
  );
}
