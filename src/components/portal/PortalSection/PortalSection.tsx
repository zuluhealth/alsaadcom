import s from "./PortalSection.module.scss";

interface PortalSectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Portal-flavored section wrapper. Provides an eyebrow (mono caps),
 * a Space Grotesk heading, and an optional Poppins description above
 * arbitrary child content.
 */
export default function PortalSection({
  eyebrow,
  title,
  description,
  children,
  className,
}: PortalSectionProps) {
  return (
    <section className={`${s.section} ${className ?? ""}`}>
      <header className={s.head}>
        {eyebrow ? <p className={s.eyebrow}>{eyebrow}</p> : null}
        <h2 className={s.title}>{title}</h2>
        {description ? <p className={s.description}>{description}</p> : null}
      </header>
      {children ? <div className={s.body}>{children}</div> : null}
    </section>
  );
}
