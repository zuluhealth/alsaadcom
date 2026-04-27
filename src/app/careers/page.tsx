"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Building2, Send, ChevronDown } from "lucide-react";
import { jobs } from "@/data/jobs";
import { ANIMATION } from "@/lib/constants";

import s from "./page.module.scss";

export default function CareersPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: in production this would post to an API
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
        {/* Background gradient */}
        <div
          className={s.heroBg}
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(255,255,255,0.05), transparent)",
          }}
        />

        <div className={s.heroInner}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
            }}
            className={s.heroEyebrow}
          >
            Careers
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.1,
            }}
            className={s.heroTitle}
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.2,
            }}
            className={s.heroDesc}
          >
            Build your career with Iraq&apos;s leading telecommunications,
            defense, and IT solutions company. We are always looking for
            talented, driven individuals who want to make a difference.
          </motion.p>
        </div>
      </section>

      {/* Chevron Divider */}
      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      {/* Culture Section */}
      <section className={s.culture}>
        <div className={s.cultureInner}>
          <div className={s.cultureGrid}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: ANIMATION.duration.reveal,
                ease: ANIMATION.easeOutExpo,
              }}
            >
              <h2 className={s.cultureHeading}>
                Why Work at AST?
              </h2>
              <p className={s.cultureText}>
                At Al Saad Telecom, we believe that our people are our greatest
                asset. We foster a culture of innovation, integrity, and
                continuous learning where every team member has the opportunity
                to grow and contribute to projects that shape the technological
                landscape of Iraq and the region.
              </p>
              <p className={s.cultureTextExtra}>
                From deploying nationwide fiber networks to securing borders with
                advanced surveillance systems, our work has real impact. We
                invest in our people through world-class training programs,
                international certifications, and career development pathways
                that empower you to reach your full potential.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: ANIMATION.duration.reveal,
                ease: ANIMATION.easeOutExpo,
                delay: ANIMATION.stagger.normal,
              }}
              className={s.perksGrid}
            >
              {[
                {
                  title: "Professional Growth",
                  desc: "International certifications, training, and clear career pathways.",
                },
                {
                  title: "Impactful Work",
                  desc: "Projects that transform infrastructure and improve lives nationwide.",
                },
                {
                  title: "Collaborative Culture",
                  desc: "Work alongside top engineers, consultants, and industry experts.",
                },
                {
                  title: "Competitive Rewards",
                  desc: "Attractive compensation, benefits, and performance-based incentives.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: ANIMATION.duration.normal,
                    ease: ANIMATION.easeOutExpo,
                    delay: i * ANIMATION.stagger.normal,
                  }}
                  className={s.perkCard}
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
                  }}
                >
                  <h3 className={s.perkTitle}>
                    {item.title}
                  </h3>
                  <p className={s.perkDesc}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className={s.thinDivider}>
        <div className={s.thinDividerLine} />
      </div>

      {/* Open Positions */}
      <section className={s.positions}>
        <div className={s.positionsInner}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
            }}
            className={s.positionsEyebrow}
          >
            Opportunities
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.05,
            }}
            className={s.positionsHeading}
          >
            Open Positions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.1,
            }}
            className={s.positionsDesc}
          >
            Explore current opportunities and find the role that matches your
            skills.
          </motion.p>

          <div className={s.jobList}>
            {jobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: ANIMATION.duration.reveal,
                  ease: ANIMATION.easeOutExpo,
                  delay: index * ANIMATION.stagger.fast,
                }}
                className={s.jobCard}
              >
                <div className={s.jobRow}>
                  <div>
                    <h3 className={s.jobTitle}>
                      {job.title}
                    </h3>
                    <div className={s.jobMeta}>
                      <span className={s.jobMetaItem}>
                        <Building2 className={s.jobMetaIcon} />
                        {job.department}
                      </span>
                      <span className={s.jobMetaItem}>
                        <MapPin className={s.jobMetaIcon} />
                        {job.location}
                      </span>
                      <span className={s.jobMetaItem}>
                        <Clock className={s.jobMetaIcon} />
                        {job.type === "full-time" ? "Full-Time" : "Contract"}
                      </span>
                    </div>
                  </div>
                  <a
                    href="#apply"
                    className={s.jobApplyBtn}
                  >
                    Apply Now
                  </a>
                </div>
                <p className={s.jobDesc}>
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chevron Divider */}
      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      {/* Application Form */}
      <section id="apply" className={s.applySection}>
        <div className={s.applyInner}>
          <div className={s.applyContent}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: ANIMATION.duration.reveal,
                ease: ANIMATION.easeOutExpo,
              }}
              className={s.applyEyebrow}
            >
              Get started
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: ANIMATION.duration.reveal,
                ease: ANIMATION.easeOutExpo,
                delay: 0.05,
              }}
              className={s.applyHeading}
            >
              Apply Now
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: ANIMATION.duration.reveal,
                ease: ANIMATION.easeOutExpo,
                delay: 0.1,
              }}
              className={s.applyDesc}
            >
              Fill out the form below and our HR team will get back to you
              shortly.
            </motion.p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: ANIMATION.duration.normal,
                  ease: ANIMATION.easeOutExpo,
                }}
                className={s.successPanel}
              >
                <p className={s.successTitle}>
                  Application Received
                </p>
                <p className={s.successDesc}>
                  Thank you for your interest in joining Al Saad Telecom. Our HR
                  team will review your application and be in touch.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: ANIMATION.duration.reveal,
                  ease: ANIMATION.easeOutExpo,
                  delay: 0.1,
                }}
                onSubmit={handleSubmit}
                className={s.form}
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className={s.formLabel}
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={s.formInput}
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className={s.formLabel}
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={s.formInput}
                    placeholder="you@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className={s.formLabel}
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={s.formInput}
                    placeholder="+964 XXX XXX XXXX"
                  />
                </div>

                {/* Position */}
                <div>
                  <label
                    htmlFor="position"
                    className={s.formLabel}
                  >
                    Position
                  </label>
                  <div className={s.selectWrap}>
                    <select
                      id="position"
                      name="position"
                      required
                      value={form.position}
                      onChange={handleChange}
                      className={s.formSelect}
                    >
                      <option value="" disabled>
                        Select a position
                      </option>
                      {jobs.map((job) => (
                        <option key={job.id} value={job.title}>
                          {job.title}
                        </option>
                      ))}
                      <option value="General Application">
                        General Application
                      </option>
                    </select>
                    <ChevronDown className={s.selectIcon} />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={s.formLabel}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={s.formTextarea}
                    placeholder="Tell us about your experience and why you want to join AST..."
                  />
                </div>

                <button
                  type="submit"
                  className={s.submitBtn}
                >
                  <Send className={s.submitIcon} />
                  Submit Application
                </button>
              </motion.form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
