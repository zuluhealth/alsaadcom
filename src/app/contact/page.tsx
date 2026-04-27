"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Building2,
  CheckCircle2,
  Send,
} from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import { offices } from "@/data/offices";

import s from "./page.module.scss";

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */
function ContactHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.hero}>
      {/* Background gradient */}
      <div
        className={s.heroBgGradient}
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05), transparent)",
        }}
      />

      {/* Background dot pattern */}
      <div className={s.heroBgDots}>
        <div
          className={s.heroBgDotsInner}
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className={s.heroInner}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easeOutExpo,
          }}
          className={s.heroEyebrow}
        >
          Get in touch
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.reveal,
            ease: ANIMATION.easeOutExpo,
            delay: 0.1,
          }}
          className={s.heroTitle}
        >
          Contact Us
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easeOutExpo,
            delay: 0.2,
          }}
          className={s.heroDesc}
        >
          Whether you have a question about our solutions, want to discuss a
          project, or explore a partnership &mdash; our team is ready to help.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Contact Form + Info Panel                                 */
/* ------------------------------------------------------------------ */
const subjectOptions = [
  { value: "", label: "Select a subject" },
  { value: "general", label: "General Inquiry" },
  { value: "solutions", label: "Solutions Inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

function ContactFormSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section ref={ref} className={s.formSection}>
      <div className={s.formSectionInner}>
        <div className={s.formGrid}>
          {/* ---- Form (left: 3 cols) ---- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
            }}
          >
            {submitted ? (
              <div className={s.successPanel}>
                <div className={s.successIcon}>
                  <CheckCircle2
                    size={32}
                    className={s.iconBlue}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className={s.successTitle}>
                  Message sent successfully
                </h3>
                <p className={s.successDesc}>
                  Thank you for reaching out. A member of our team will review
                  your inquiry and respond within one business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className={s.successBtn}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={s.form}>
                {/* Name + Email row */}
                <div className={s.formRow}>
                  <div>
                    <label htmlFor="fullName" className={s.label}>
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="Your full name"
                      className={s.input}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={s.label}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={s.input}
                    />
                  </div>
                </div>

                {/* Phone + Subject row */}
                <div className={s.formRow}>
                  <div>
                    <label htmlFor="phone" className={s.label}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+964 xxx xxx xxxx"
                      className={s.input}
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className={s.label}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      className={s.select}
                      defaultValue=""
                    >
                      {subjectOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          disabled={opt.value === ""}
                          className={s.selectOption}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className={s.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us about your project or inquiry..."
                    className={s.textarea}
                  />
                </div>

                {/* Submit */}
                <button type="submit" className={s.submitBtn}>
                  <Send size={16} strokeWidth={1.5} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          {/* ---- Info Panel (right: 2 cols) ---- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.15,
            }}
            className={s.infoCol}
          >
            {/* Direct contact */}
            <div
              className={s.infoCard}
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
              }}
            >
              <h3 className={s.infoCardTitle}>
                Direct contact
              </h3>

              <div className={s.contactItems}>
                <div className={s.contactItem}>
                  <div className={s.contactIconBox}>
                    <Mail size={18} className={s.iconBlue} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className={s.contactLabel}>Email</p>
                    <a href="mailto:info@alsaadtelecom.com" className={s.contactLink}>
                      info@alsaadtelecom.com
                    </a>
                  </div>
                </div>

                <div className={s.contactItem}>
                  <div className={s.contactIconBox}>
                    <Phone size={18} className={s.iconBlue} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className={s.contactLabel}>Phone</p>
                    <a href="tel:+9647700000000" className={s.contactLink}>
                      +964 770 000 0000
                    </a>
                  </div>
                </div>

                <div className={s.contactItem}>
                  <div className={s.contactIconBox}>
                    <MapPin size={18} className={s.iconBlue} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className={s.contactLabel}>Headquarters</p>
                    <p className={s.contactValue}>Baghdad, Iraq</p>
                    <p className={s.contactSubValue}>
                      Al Mansour District, Street 42, Building 15
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office locations */}
            <div
              className={s.infoCard}
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
              }}
            >
              <h3 className={s.infoCardTitle}>
                Office locations
              </h3>

              <div className={s.officeGrid}>
                {offices.map((office) => (
                  <div key={office.city} className={s.officeItem}>
                    <div className={s.officeIcon}>
                      <Building2 size={14} className={s.iconGrey} strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className={s.officeCity}>{office.city}</p>
                      {office.isHQ && (
                        <span className={s.officeBadge}>HQ</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div
              className={s.infoCard}
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
              }}
            >
              <h3 className={s.infoCardTitleSm}>
                Business hours
              </h3>
              <div className={s.hoursItems}>
                <div className={s.hoursRow}>
                  <span className={s.hoursLabel}>Sunday &ndash; Thursday</span>
                  <span className={s.hoursValue}>08:00 &ndash; 17:00</span>
                </div>
                <div className={s.hoursRow}>
                  <span className={s.hoursLabel}>Friday &ndash; Saturday</span>
                  <span className={s.hoursClosed}>Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <ContactFormSection />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>
    </>
  );
}
