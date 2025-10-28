"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import {
  NAVIGATION_LINKS,
  NAV_FLOATING_ACTIVATION_OFFSET,
  NAV_PRIMARY_SOCIAL_LIMIT,
  NAV_SCROLL_HIDE_OFFSET,
} from "@/constants/navigation";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { portfolioContent } from "@/data/portfolio";

export function Header() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [showFloatingNav, setShowFloatingNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const shouldCollapse = current > NAV_SCROLL_HIDE_OFFSET;
      setIsCollapsed(shouldCollapse);
      setShowFloatingNav(current > NAV_FLOATING_ACTIVATION_OFFSET);
      if (current > NAV_SCROLL_HIDE_OFFSET && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const primarySocials = useMemo(
    () => portfolioContent.hero.socials.slice(0, NAV_PRIMARY_SOCIAL_LIMIT),
    []
  );

  const MenuIcon = isMobileMenuOpen ? HiOutlineXMark : HiOutlineBars3;

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <header className="fixed top-2 z-50 flex justify-center left-0 right-0">
        <div
          className={`w-full max-w-6xl transition-all duration-500 ease-out ${
            isCollapsed ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <div className="relative flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-black/30 px-5 py-4 text-sm text-slate-100 shadow-lg shadow-primary-500/20 ring-1 ring-primary-500/20 backdrop-blur md:px-7">
            <Link
              href="/"
              className="group flex items-center gap-3 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80"
              onClick={closeMobileMenu}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-500/20 text-lg font-display text-primary-200 ring-1 ring-primary-400/30 transition group-hover:bg-primary-500/30 group-hover:text-white">
                M
              </span>
              <span className="flex flex-col">
                <span className="text-base font-semibold text-white">
                  Muhammad Ahmed
                </span>
              </span>
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-sm text-slate-200 shadow-inner shadow-white/10 backdrop-blur md:flex"
            >
              {NAVIGATION_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 transition hover:bg-primary-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80"
                  >
                    <Icon className="h-4 w-4 text-primary-200/80 transition group-hover:text-white" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-2 md:flex">
                {primarySocials.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80"
                  >
                    <SocialIcon icon={social.icon} className="h-4 w-4" />
                  </Link>
                ))}
              </div>

              {/* <Link
                href={portfolioContent.hero.ctaPrimary.href}
                className="hidden rounded-full bg-primary-500/90 px-4 py-2 text-sm font-semibold text-white shadow-primary-500/30 transition hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80 md:inline-flex"
              >
                {portfolioContent.hero.ctaPrimary.label}
              </Link> */}

              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-nav"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80 md:hidden"
              >
                <MenuIcon className="h-5 w-5" aria-hidden="true" />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-6 z-40 flex justify-center px-4 transition-all duration-500 ease-out sm:px-6 ${
          showFloatingNav ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav
          aria-label="Floating navigation"
          className={`flex max-w-4xl items-center gap-1 rounded-full border border-white/15 bg-surface-900/85 px-4 py-2 text-sm text-slate-100 shadow-lg shadow-primary-500/25 ring-1 ring-primary-500/25 backdrop-blur ${
            showFloatingNav ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close navigation" : "Open navigation"}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80 md:hidden"
          >
            <MenuIcon className="h-5 w-5" aria-hidden="true" />
          </button>

          {NAVIGATION_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                className="group hidden items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:bg-primary-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80 md:inline-flex"
              >
                <Icon className="h-4 w-4 text-primary-200/80 transition group-hover:text-white" />
                <span>{item.label}</span>
              </a>
            );
          })}

          {/* <Link
            href={portfolioContent.hero.ctaSecondary.href}
            className="hidden rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.35em] text-slate-300 transition hover:border-primary-400/40 hover:bg-primary-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/80 md:inline-flex"
          >
            {portfolioContent.hero.ctaSecondary.label}
          </Link> */}
        </nav>
      </div>

      <div
        className={`fixed inset-0 z-30 bg-surface-950/70 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
        onClick={closeMobileMenu}
      />

      <aside
        id="mobile-nav"
        className={`fixed inset-x-4 top-28 z-40 rounded-3xl border border-white/10 bg-surface-900/95 px-6 py-6 text-base text-slate-100 shadow-2xl shadow-primary-500/30 ring-1 ring-primary-500/20 backdrop-blur transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {NAVIGATION_LINKS.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
                className="group flex items-center gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-base font-medium text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/90"
              >
                <Icon className="h-5 w-5 text-primary-200/80 transition group-hover:text-white" />
                <span>{item.label}</span>
              </a>
            );
          })}
        </nav>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          {portfolioContent.hero.socials.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              aria-label={social.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/90"
              onClick={closeMobileMenu}
            >
              <SocialIcon icon={social.icon} className="h-5 w-5" />
            </Link>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <Link
            href={portfolioContent?.hero?.ctaPrimary?.href!}
            onClick={closeMobileMenu}
            className="inline-flex items-center  justify-center rounded-full bg-primary-500 px-4 py-3 text-sm font-semibold text-white shadow-primary-500/30 transition hover:bg-primary-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/90"
          >
            {portfolioContent.hero.ctaPrimary.label}
          </Link>

          <Link
            href={portfolioContent.hero.ctaSecondary.href}
            onClick={closeMobileMenu}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900/90"
          >
            {portfolioContent.hero.ctaSecondary.label}
          </Link>
        </div>
      </aside>
    </>
  );
}
