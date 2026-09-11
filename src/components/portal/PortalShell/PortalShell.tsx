"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Radio,
  Shield,
  FileText,
  LayoutGrid,
  GraduationCap,
  Archive,
  Menu,
  X,
  LogOut,
} from "lucide-react";
import { portalNav } from "@/lib/portal/nav";
import { signOut } from "@/lib/portal/actions";
import type { PartnerSession } from "@/lib/portal/types";
import s from "./PortalShell.module.scss";

const iconMap = {
  Radio,
  Shield,
  FileText,
  LayoutGrid,
  GraduationCap,
  Archive,
} as const;

type IconName = keyof typeof iconMap;

function resolveIcon(name?: string) {
  if (!name) return null;
  const Component = iconMap[name as IconName];
  return Component ?? null;
}

interface PortalShellProps {
  session: PartnerSession;
  children: React.ReactNode;
}

export default function PortalShell({ session, children }: PortalShellProps) {
  const pathname = usePathname() ?? "";
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Lock body scroll while drawer is open (mobile)
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <div className={s.shell}>
      <div className={s.classification} aria-hidden="true">
        <span>PARTNER ACCESS // PRIVATE BRIEF</span>
      </div>

      <header className={s.topbar}>
        <div className={s.topbarInner}>
          <button
            type="button"
            className={s.menuToggle}
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open portal navigation"
          >
            <Menu size={18} strokeWidth={1.5} />
          </button>

          <Link
            href="/portal"
            className={s.brand}
            aria-label="Partner portal home"
            onClick={() => setIsDrawerOpen(false)}
          >
            <Image
              src="/logo-ast.svg"
              alt="AST"
              width={683}
              height={270}
              className={s.brandLogo}
              priority
            />
            <span className={s.brandCaption}>PARTNER PORTAL</span>
          </Link>

          <div className={s.identity}>
            <div className={s.identityMeta}>
              <span className={s.identityLabel}>Signed in</span>
              <span className={s.identityEmail}>{session.email}</span>
            </div>
            <form action={signOut} className={s.signOutForm}>
              <button type="submit" className={s.signOutBtn} aria-label="Sign out">
                <LogOut size={14} strokeWidth={1.6} />
                <span>Sign out</span>
              </button>
            </form>
          </div>
        </div>
      </header>

      <div className={s.body}>
        <aside
          className={`${s.sidebar} ${isDrawerOpen ? s.sidebarOpen : ""}`}
          aria-label="Portal navigation"
        >
          <div className={s.sidebarHeader}>
            <span className={s.sidebarTag}>NAVIGATION</span>
            <button
              type="button"
              className={s.drawerClose}
              onClick={() => setIsDrawerOpen(false)}
              aria-label="Close portal navigation"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          <nav className={s.nav}>
            {portalNav.map((group) => {
              const Icon = resolveIcon(group.icon);
              return (
                <div key={group.label} className={s.group}>
                  <div className={s.groupLabel}>
                    {Icon ? <Icon size={12} strokeWidth={1.6} /> : null}
                    <span>{group.label}</span>
                  </div>
                  <ul className={s.groupItems}>
                    {group.items.map((item) => {
                      const isActive =
                        item.href === "/portal"
                          ? pathname === "/portal"
                          : pathname === item.href ||
                            pathname.startsWith(`${item.href}/`);
                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={`${s.navLink} ${isActive ? s.navLinkActive : ""}`}
                            onClick={() => setIsDrawerOpen(false)}
                          >
                            <span className={s.navLinkBar} aria-hidden="true" />
                            {item.index ? (
                              <span className={s.navIndex}>{item.index}</span>
                            ) : null}
                            <span>{item.label}</span>
                            {item.badge ? (
                              <span className={s.navBadge}>{item.badge}</span>
                            ) : null}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </nav>

          <div className={s.sidebarFooter}>
            <p className={s.sidebarFootnote}>
              Confidential // For authorized partners and stakeholders.
            </p>
          </div>
        </aside>

        {isDrawerOpen && (
          <div
            className={s.scrim}
            role="button"
            tabIndex={-1}
            aria-label="Close navigation overlay"
            onClick={() => setIsDrawerOpen(false)}
          />
        )}

        <main className={s.content}>
          <div className={s.contentInner}>{children}</div>
        </main>
      </div>
    </div>
  );
}
