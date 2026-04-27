"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Users, ShieldCheck } from "lucide-react";
import { ANIMATION } from "@/lib/constants";

import CTABanner from "@/components/sections/CTABanner";
import WaveBackground from "@/components/sections/WaveBackground";
import TraceBadge from "@/components/ui/TraceBadge";
import s from "./page.module.scss";

/* ------------------------------------------------------------------ */
/*  Section: Hero                                                      */
/* ------------------------------------------------------------------ */
function ValuesHero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.hero}>
      <WaveBackground className={s.heroWave} color="#f2e8dc" opacity={0.85} />
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
          What drives us
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
          Vision, Mission &amp; Values
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
          The principles that guide every decision, every project, and every
          relationship at Al Saad Telecom.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Vision                                                    */
/* ------------------------------------------------------------------ */
function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.vision}>
      <div className={s.visionInner}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easeOutExpo,
          }}
          className={s.visionEyebrow}
        >
          Our Vision
        </motion.p>

        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.reveal,
            ease: ANIMATION.easeOutExpo,
            delay: 0.1,
          }}
          className={s.visionBlockquote}
        >
          <p className={s.visionQuote}>
            &ldquo;We aim to remain a dominant player in Iraq by being
            responsive to all changes and technology trends, and bringing
            innovative solutions to our customers&rsquo; evolving needs.&rdquo;
          </p>
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.slow,
            ease: ANIMATION.easeOutExpo,
            delay: 0.25,
          }}
          className={s.visionBody}
        >
          <p className={s.visionBodyText}>
            AST envisions a connected, secure, and digitally empowered Iraq
            &mdash; ensuring that our clients and the communities they serve
            benefit from the very best the world has to offer.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Mission                                                   */
/* ------------------------------------------------------------------ */
function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.mission}>
      <div className={s.missionInner}>
        <div className={s.missionGrid}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
            }}
          >
            <p className={s.missionEyebrow}>
              Our Mission
            </p>
            <h2 className={s.missionHeading}>
              Enabling communication that is easier, more secure, and more
              efficient
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: ANIMATION.duration.reveal,
              ease: ANIMATION.easeOutExpo,
              delay: 0.15,
            }}
            className={s.missionText}
          >
            <p>
              Our mission is to deliver highly specialized solutions in
              Telecommunications, IT, Satellite and Wireless Communication,
              Defense, and Security that empower our clients to communicate
              easier, operate more securely, and perform more efficiently.
            </p>
            <p>
              We achieve this by combining deep local knowledge of the Iraqi
              operating environment with partnerships alongside the
              world&rsquo;s leading technology companies. Every solution we
              design is tailored to the specific operational, environmental,
              and budgetary requirements of the client &mdash; whether they
              are a mobile network operator, a government ministry, an oil and
              gas major, or the armed forces.
            </p>
            <p>
              AST is committed to Trust, Reliability, and delivering our
              promises with superior Performance. These are not just words;
              they are the standards by which we measure every project, every
              interaction, and every outcome.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Section: Core Values                                               */
/* ------------------------------------------------------------------ */
const values = [
  {
    title: "Passion",
    description:
      "We are driven by a deep passion for technology and its power to transform lives. Our teams approach every project with energy and commitment, continuously seeking better ways to solve our clients' most complex challenges. Passion is what turns good engineering into great outcomes.",
    icon: Flame,
  },
  {
    title: "Customer-centric",
    description:
      "Every decision we make starts with the client. We listen first, design solutions that address real operational needs, and remain embedded with our clients throughout the project lifecycle and beyond. Our success is measured entirely by the success of the organizations we serve.",
    icon: Users,
  },
  {
    title: "Integrity",
    description:
      "We conduct every aspect of our business with the highest ethical standards. Transparency in pricing, honesty in timelines, and accountability for results define how we operate. In an industry where trust is paramount, our integrity is our most valuable asset.",
    icon: ShieldCheck,
  },
];

function ValuesCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.valuesSection}>
      <div className={s.valuesInner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.reveal,
            ease: ANIMATION.easeOutExpo,
          }}
          className={s.valuesHeader}
        >
          <p className={s.valuesEyebrow}>
            Our values
          </p>
          <h2 className={s.valuesHeading}>
            The principles we stand by
          </h2>
        </motion.div>

        <div className={s.valuesGrid}>
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: ANIMATION.duration.reveal,
                  ease: ANIMATION.easeOutExpo,
                  delay: i * ANIMATION.stagger.normal,
                }}
                className={s.valueCard}
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.04), transparent 70%)",
                }}
              >
                <div className={s.valueIcon}>
                  <Icon size={28} className={s.iconBlue} strokeWidth={1.5} />
                </div>
                <h3 className={s.valueTitle}>
                  {value.title}
                </h3>
                <p className={s.valueDesc}>
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: ANIMATION.duration.reveal,
            ease: ANIMATION.easeOutExpo,
            delay: 0.4,
          }}
          className={s.complianceNote}
        >
          AST is a TRACE-certified company that abides by FCPA and UK
          Anti-Bribery standards and more.
        </motion.p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */
export default function ValuesPage() {
  return (
    <>
      <ValuesHero />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <VisionSection />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <MissionSection />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <ValuesCards />

      <div className={s.dividerWrap}>
        <div className={s.subtleDivider} />
      </div>

      <CTABanner />

      <TraceBadge />
    </>
  );
}
