import type { ProgramExperience } from "@/lib/portal/types";
import s from "./ProgramCard.module.scss";

interface ProgramCardProps {
  program: ProgramExperience;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className={s.card}>
      <div className={s.meta}>
        <span>{program.sector.toUpperCase()}</span>
        <span aria-hidden="true">{"//"}</span>
        <span>{program.year}</span>
        <span aria-hidden="true">{"//"}</span>
        <span>{program.client}</span>
      </div>

      <h3 className={s.title}>{program.title}</h3>

      <p className={s.scope}>{program.scope}</p>

      <p className={s.outcome}>
        <span className={s.outcomeLabel}>Outcome —</span> {program.outcome}
      </p>

      {program.technologies.length > 0 ? (
        <ul className={s.tags}>
          {program.technologies.map((tech) => (
            <li key={tech} className={s.tag}>
              {tech}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
