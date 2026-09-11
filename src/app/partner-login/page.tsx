import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import LoginBackground from "@/components/three/LoginBackground";
import { previewModeEnabled } from "@/lib/portal/auth";
import AccessForm from "./AccessForm";
import s from "./page.module.scss";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Partner Access",
  description: "Authorized partners only. Access to the AST partner portal is by invitation.",
  robots: { index: false, follow: false },
};

export default function PartnerLoginPage() {
  const preview = previewModeEnabled();

  return (
    <div className={s.page}>
      <LoginBackground />

      <div className={s.classification} aria-hidden="true">
        <span>PARTNER ACCESS // PRIVATE BRIEF</span>
      </div>

      <main className={s.main}>
        <section className={s.content}>
          <Link href="/" className={s.back}>
            <span aria-hidden="true">←</span>
            <span>BACK</span>
          </Link>

          <p className={s.eyebrow}>[ SECURE PORTAL // INVITATION ONLY ]</p>
          <h1 className={s.title}>Partner Access</h1>
          <p className={s.lede}>
            AST partners receive a personal, expiring sign-in link by email when they
            are added to the portal. There is no public sign-up.
          </p>

          <Link href="/contact" className={s.contactButton}>
            <span className={s.contactButtonFill} aria-hidden="true" />
            <span className={s.contactButtonContent}>
              Get in Touch
              <ArrowRight size={14} strokeWidth={1.75} />
            </span>
          </Link>

          {!preview ? null : (
            <>
              <div className={s.divider} aria-hidden="true">
                <span className={s.dividerLine} />
                <span className={s.dividerLabel}>IDENTIFY YOURSELF</span>
                <span className={s.dividerLine} />
              </div>

              <AccessForm />
            </>
          )}

          <p className={s.footnote}>
            SECURE TRANSPORT &nbsp;//&nbsp; SESSION-BOUND &nbsp;//&nbsp; MENA REGION
          </p>
        </section>
      </main>
    </div>
  );
}
