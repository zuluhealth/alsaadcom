"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ANIMATION } from "@/lib/constants";
import s from "./PartnersBar.module.scss";

interface PartnerLogo {
  name: string;
  src: string;
}

const partners: PartnerLogo[] = [
  { name: "Leidos", src: "/images/partners/leidos.png" },
  { name: "Microchip", src: "/images/partners/microchip.png" },
  { name: "Teledyne", src: "/images/partners/teledyne.png" },
  { name: "Rohde & Schwarz — Authorized Distributor", src: "/images/partners/rs-authorized-distributor.png" },
  { name: "Genasys", src: "/images/partners/genasys.png" },
  { name: "LRAD by Genasys", src: "/images/partners/lrad.png" },
  { name: "L3Harris", src: "/images/partners/l3harris.svg" },
  { name: "AADS", src: "/images/partners/aads.svg" },
];

export default function PartnersBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className={s.section}>
      <div className={s.container}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: ANIMATION.duration.slow }}
          className={s.title}
        >
          Trusted Technology Partners
        </motion.p>
      </div>

      {/* Marquee */}
      <div className={s.marqueeWrap}>
        <div className={s.fadeLeft} />
        <div className={s.fadeRight} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: ANIMATION.duration.slow, delay: 0.2 }}
          className={s.marqueeTrack}
        >
          {/* Two identical groups. Each is at least as wide as the viewport and
              slides left by exactly its own width, so the second group is always
              covering the screen at the moment the first wraps back — the loop
              never opens a gap and never jumps, at any window width. */}
          {[0, 1].map((copy) => (
            <div key={copy} className={s.marqueeGroup} aria-hidden={copy > 0}>
              {partners.map((partner) => {
                const isStacked = partner.src.includes("rs-authorized-distributor");
                return (
                  <div
                    key={partner.name}
                    className={`${s.partner} ${isStacked ? s.partnerStacked : ""}`}
                    aria-label={partner.name}
                  >
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      width={200}
                      height={60}
                      className={s.partnerLogo}
                    />
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
