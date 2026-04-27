"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Send, CheckCircle, Upload } from "lucide-react";
import { ANIMATION } from "@/lib/constants";
import s from "./SmartContactForm.module.scss";

type InquiryType =
  | "general"
  | "solutions"
  | "partnership"
  | "careers"
  | "other";

const INQUIRY_OPTIONS: { value: InquiryType; label: string }[] = [
  { value: "general", label: "General Inquiry" },
  { value: "solutions", label: "Solutions Inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "careers", label: "Careers" },
  { value: "other", label: "Other" },
];

const ROUTING_MAP: Record<InquiryType, string> = {
  general: "General Inquiries",
  solutions: "Solutions Engineering",
  partnership: "Business Development",
  careers: "Human Resources",
  other: "General Inquiries",
};

const INDUSTRIES = [
  "Government",
  "Military & Defense",
  "Oil & Gas",
  "Telecom Operators",
  "Corporate/SME",
  "Marine",
  "Media & Broadcasting",
  "Other",
];

export default function SmartContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [inquiryType, setInquiryType] = useState<InquiryType>("general");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: ANIMATION.easeOutExpo }}
        className={s.successCard}
      >
        <CheckCircle size={40} className={s.successIcon} strokeWidth={1} />
        <h3 className={s.successTitle}>
          Thank you for reaching out
        </h3>
        <p className={s.successText}>
          Based on your inquiry, our{" "}
          <span className={s.successHighlight}>{ROUTING_MAP[inquiryType]}</span> team
          will be in touch within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className={s.resetLink}
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: ANIMATION.duration.reveal,
        ease: ANIMATION.easeOutExpo,
      }}
      onSubmit={handleSubmit}
      className={s.form}
    >
      <div className={s.row}>
        <div>
          <label htmlFor="name" className={s.label}>
            Full Name
          </label>
          <input id="name" type="text" required className={s.input} />
        </div>
        <div>
          <label htmlFor="email" className={s.label}>
            Email
          </label>
          <input id="email" type="email" required className={s.input} />
        </div>
      </div>

      <div className={s.row}>
        <div>
          <label htmlFor="phone" className={s.label}>
            Phone
          </label>
          <input id="phone" type="tel" className={s.input} />
        </div>
        <div>
          <label htmlFor="inquiry" className={s.label}>
            Subject
          </label>
          <select
            id="inquiry"
            value={inquiryType}
            onChange={(e) => setInquiryType(e.target.value as InquiryType)}
            className={s.select}
          >
            {INQUIRY_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {inquiryType === "solutions" && (
          <motion.div
            key="solutions-fields"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={s.dynamicSection}
          >
            <div className={s.row}>
              <div>
                <label htmlFor="industry" className={s.label}>
                  Industry
                </label>
                <select id="industry" className={s.select}>
                  <option value="">Select industry</option>
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="timeline" className={s.label}>
                  Project Timeline
                </label>
                <select id="timeline" className={s.select}>
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-3 months)</option>
                  <option value="short">Short-term (3-6 months)</option>
                  <option value="medium">Medium-term (6-12 months)</option>
                  <option value="long">Long-term (12+ months)</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}

        {inquiryType === "careers" && (
          <motion.div
            key="careers-fields"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={s.dynamicSection}
          >
            <div>
              <label htmlFor="position" className={s.label}>
                Position of Interest
              </label>
              <select id="position" className={s.select}>
                <option value="">Select position</option>
                <option value="network-engineer">Senior Network Engineer</option>
                <option value="defense-consultant">Defense Solutions Consultant</option>
                <option value="project-manager">Project Manager</option>
                <option value="it-specialist">IT Infrastructure Specialist</option>
                <option value="field-tech">Field Technician</option>
                <option value="biz-dev">Business Development Manager</option>
              </select>
            </div>
            <div>
              <label className={s.label}>CV / Resume</label>
              <div className={s.uploadBox}>
                <Upload size={14} className={s.uploadIcon} strokeWidth={1.5} />
                <span className={s.uploadText}>Upload your CV (mock)</span>
              </div>
            </div>
          </motion.div>
        )}

        {inquiryType === "partnership" && (
          <motion.div
            key="partnership-fields"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={s.dynamicSection}
          >
            <div className={s.row}>
              <div>
                <label htmlFor="company" className={s.label}>
                  Company Name
                </label>
                <input id="company" type="text" className={s.input} />
              </div>
              <div>
                <label htmlFor="area" className={s.label}>
                  Area of Interest
                </label>
                <select id="area" className={s.select}>
                  <option value="">Select area</option>
                  <option value="telecom">Telecommunications</option>
                  <option value="defense">Defense & Security</option>
                  <option value="it">IT Infrastructure</option>
                  <option value="satellite">Satellite Communications</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div>
        <label htmlFor="message" className={s.label}>
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          required
          className={s.textarea}
        />
      </div>

      <p className={s.routingNote}>
        Your inquiry will be routed to our{" "}
        <span className={s.routingHighlight}>{ROUTING_MAP[inquiryType]}</span> team
      </p>

      <button
        type="submit"
        className={s.submitBtn}
      >
        <Send size={14} strokeWidth={2} />
        Send Message
      </button>
    </motion.form>
  );
}
