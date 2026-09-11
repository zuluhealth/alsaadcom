import { Check } from "lucide-react";
import type { TrainingProgram } from "@/lib/portal/types";
import s from "./TrainingCard.module.scss";

interface TrainingCardProps {
  program: TrainingProgram;
}

const formatLabels: Record<TrainingProgram["format"], string> = {
  "in-person": "In-Person",
  remote: "Remote",
  hybrid: "Hybrid",
};

export default function TrainingCard({ program }: TrainingCardProps) {
  return (
    <article className={s.card}>
      <header className={s.head}>
        <div className={s.tags}>
          <span className={`${s.format} ${s[`format_${program.format}`] ?? ""}`}>
            {formatLabels[program.format]}
          </span>
          <span className={s.duration}>{program.duration}</span>
        </div>
        <h3 className={s.title}>{program.title}</h3>
        <p className={s.audience}>{program.audience}</p>
      </header>

      <p className={s.description}>{program.description}</p>

      {program.outcomes.length > 0 ? (
        <div className={s.outcomes}>
          <span className={s.outcomesLabel}>Outcomes</span>
          <ul className={s.outcomesList}>
            {program.outcomes.map((outcome) => (
              <li key={outcome} className={s.outcomeItem}>
                <Check size={12} strokeWidth={2} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </article>
  );
}
