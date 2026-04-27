import s from "./SaferTomorrowTagline.module.scss";

interface SaferTomorrowTaglineProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function SaferTomorrowTagline({
  className,
  size = "md",
}: SaferTomorrowTaglineProps) {
  return (
    <p
      className={`${s.tagline} ${s[size]} ${className ?? ""}`}
      aria-label="A Safer Tomorrow"
    >
      <span className={s.mark}>A</span>
      <span className={s.rest}> </span>
      <span className={s.mark}>S</span>
      <span className={s.rest}>afer </span>
      <span className={s.mark}>T</span>
      <span className={s.rest}>omorrow</span>
    </p>
  );
}
