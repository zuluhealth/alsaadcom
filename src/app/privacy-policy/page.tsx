"use client";

import { motion } from "framer-motion";
import { ANIMATION } from "@/lib/constants";

import s from "./page.module.scss";

const sections = [
  {
    title: "1. Information We Collect",
    content: `We may collect personal information that you voluntarily provide when you use our website, request a quote, apply for a position, subscribe to our newsletter, or otherwise contact us. This information may include your name, email address, phone number, company name, job title, and any other information you choose to provide.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type and version, operating system, referring URL, pages viewed, time and date of your visit, and other diagnostic data. This information is collected through cookies and similar tracking technologies.`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect for the following purposes:

To provide, operate, and maintain our website and services. To process and respond to your inquiries, requests, and applications. To send you technical notices, updates, security alerts, and administrative messages. To provide you with news, special offers, and general information about our products and services, unless you have opted out of receiving such communications. To monitor and analyze trends, usage, and activities in connection with our website. To detect, investigate, and prevent fraudulent transactions and other illegal activities, and to protect the rights and property of Al Saad Telecom and others. To comply with applicable laws, regulations, and legal processes.`,
  },
  {
    title: "3. Information Sharing and Disclosure",
    content: `We do not sell, trade, or otherwise transfer your personal information to outside parties except as described in this policy. We may share your information with trusted third-party service providers who assist us in operating our website, conducting our business, or serving you, provided those parties agree to keep this information confidential. We may also disclose your information when we believe disclosure is appropriate to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, secure storage, and regular security assessments. However, no method of transmission over the internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. When we no longer need your personal information, we will securely delete or anonymize it in accordance with our data retention policies and applicable law.`,
  },
  {
    title: "6. Cookies and Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can choose to set your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our website may not function properly.`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites or services that are not operated by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to review the privacy policy of every site you visit.`,
  },
  {
    title: "8. Your Rights",
    content: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, update, or request deletion of your personal information. You may also have the right to object to or restrict processing of your personal information, and the right to data portability. To exercise any of these rights, please contact us using the contact details provided below.`,
  },
  {
    title: "9. Children's Privacy",
    content: `Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16 without verification of parental consent, we will take steps to remove that information from our servers.`,
  },
  {
    title: "10. Changes to This Privacy Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions about this Privacy Policy, please contact us at:

Al Saad Telecom (AST)
Baghdad, Iraq
Email: info@alsaadtelecom.com
Phone: +964 (0) 780 000 0000`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className={s.hero}>
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
            Legal
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.2,
            }}
            className={s.heroDate}
          >
            Last updated: January 1, 2025
          </motion.p>
        </div>
      </section>

      {/* Chevron Divider */}
      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      {/* Policy Content */}
      <section className={s.contentSection}>
        <div className={s.contentInner}>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
            }}
            className={s.intro}
          >
            Al Saad Telecom (&quot;AST&quot;, &quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) is committed to protecting your privacy. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
            Please read this privacy policy carefully. If you do not agree with
            the terms of this privacy policy, please do not access the site.
          </motion.p>

          <div className={s.sections}>
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: ANIMATION.duration.reveal,
                  ease: ANIMATION.easeOutExpo,
                  delay: index * ANIMATION.stagger.fast,
                }}
              >
                <h2 className={s.sectionTitle}>
                  {section.title}
                </h2>
                {section.content.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className={s.sectionParagraph}
                  >
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chevron Divider */}
      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>
    </>
  );
}
