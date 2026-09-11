import s from "./SubsectionHeader.module.scss";

interface SubsectionHeaderProps {
  id: string;
  title: string;
  abstract?: boolean;
  /**
   * Optional explicit reference label (e.g. "SECTION 02.1").
   * When not supplied, the `id` is rendered in mono caps.
   */
  reference?: string;
}

export default function SubsectionHeader({
  id,
  title,
  abstract,
  reference,
}: SubsectionHeaderProps) {
  const label = reference ?? `SECTION · ${id.replace(/-/g, " ").toUpperCase()}`;

  return (
    <header className={s.header} id={id}>
      <div className={s.tagRow}>
        <span className={s.tag}>{label}</span>
        {abstract ? <span className={s.abstract}>Abstract</span> : null}
      </div>
      <h3 className={s.title}>{title}</h3>
    </header>
  );
}
