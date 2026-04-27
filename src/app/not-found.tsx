import Link from "next/link";
import s from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={s.section}>
      {/* Background effects */}
      <div
        className={s.bgEffect}
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.05), transparent)",
        }}
      />

      <div className={s.inner}>
        <p className={s.eyebrow}>
          404 — Page Not Found
        </p>
        <h1 className={s.title}>
          Signal Lost
        </h1>
        <p className={s.description}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <div className={s.actions}>
          <Link href="/" className={s.btnPrimary}>
            Return Home
          </Link>
          <Link href="/contact" className={s.btnSecondary}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
