import s from "./SectionHeading.module.scss";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={`${s.wrapper}${align === "center" ? ` ${s.center}` : ""}${className ? ` ${className}` : ""}`}
    >
      {eyebrow && (
        <p className={s.eyebrow}>
          {eyebrow}
        </p>
      )}

      <h2 className={s.title}>
        {title}
      </h2>

      {description && (
        <p className={s.description}>
          {description}
        </p>
      )}
    </div>
  );
}
