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
  { name: "L3Harris", src: "/images/partners/l3harris.svg" },
  { name: "Leidos", src: "/images/partners/leidos.svg" },
  { name: "FLIR", src: "/images/partners/flir.svg" },
  { name: "Rohde & Schwarz", src: "/images/partners/rohde-schwarz.svg" },
  { name: "Frequentis", src: "/images/partners/frequentis.svg" },
  { name: "Genasys", src: "/images/partners/genasys.svg" },
  { name: "Nokia", src: "/images/partners/nokia.svg" },
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
          className={s.marqueeOuter}
        >
          <div className={s.marqueeTrack}>
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className={s.partner}
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
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
