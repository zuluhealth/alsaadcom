"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import s from "./Navbar.module.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className={`${s.header} ${isScrolled ? s.scrolled : ""}`}>
        <nav className={s.nav}>
          <Link href="/" className={s.logo} aria-label="Al Saad Telecom — Home">
            <Image src="/logo-ast.svg" alt="AST — Al Saad Telecom" width={683} height={270} priority className={s.logoImg} />
          </Link>

          <div className={s.links}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={s.link}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className={s.actions}>
            <Link href="/contact" className={s.cta}>
              Get in Touch
            </Link>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className={s.menuBtn}
              aria-label="Open navigation menu"
            >
              <Menu strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
