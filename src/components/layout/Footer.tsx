"use client";

import Link from "next/link";
import Image from "next/image";
import {
  NAV_LINKS,
  SOCIAL_LINKS,
  SITE_NAME,
  SITE_DESCRIPTION,
} from "@/lib/constants";
import SaferTomorrowTagline from "@/components/ui/SaferTomorrowTagline";
import s from "./Footer.module.scss";

const SOLUTIONS_LINKS = [
  { label: "Telecommunications", href: "/solutions/telecommunications" },
  { label: "Security", href: "/solutions/security" },
] as const;

const CONTACT_INFO = {
  email: "info@alsaadtelecom.com",
  phone: "+964 780 000 0000",
  address: "Baghdad, Iraq",
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.footer}>
      {/* Main Footer Content */}
      <div className={s.container}>
        <div className={s.grid}>
          {/* Column 1: Company Info */}
          <div className={s.companyCol}>
            <Link
              href="/"
              className={s.logoLink}
              aria-label={`${SITE_NAME} — Home`}
            >
              <Image
                src="/logo-ast.svg"
                alt="AST — Al Saad Telecom"
                width={683}
                height={270}
                className={s.logoImg}
              />
              <span className={s.logoCaption}>AL SAAD TELECOM</span>
            </Link>
            <SaferTomorrowTagline size="md" className={s.tagline} />
            <p className={s.description}>
              {SITE_DESCRIPTION}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className={s.columnTitle}>
              Quick Links
            </h3>
            <ul className={s.linkList}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={s.linkItem}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact" className={s.linkItem}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions */}
          <div>
            <h3 className={s.columnTitle}>
              Solutions
            </h3>
            <ul className={s.linkList}>
              {SOLUTIONS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={s.linkItem}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className={s.columnTitle}>
              Contact
            </h3>
            <ul className={s.linkList}>
              <li>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className={s.linkItem}
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s/g, "")}`}
                  className={s.linkItem}
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li>
                <p className={s.addressText}>
                  {CONTACT_INFO.address}
                </p>
              </li>
            </ul>

            <Link
              href="/contact"
              className={s.contactBtn}
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={s.bottomBar}>
          <p className={s.copyright}>
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className={s.socialLinks}>
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={s.socialLink}
                aria-label={`Visit our ${social.label} page`}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
