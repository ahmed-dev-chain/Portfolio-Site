"use client";

import { useState } from "react";
import Link from "next/link";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { portfolioContent } from "@/data/portfolio";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen((prev) => !prev);
  const closeNav = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-white/30 shadow-primary-500/10 shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
          <span className="h-8 w-8 rounded-xl bg-primary-500/15 text-primary-600 ring-1 ring-primary-500/30 flex items-center justify-center font-display text-lg">
            M
          </span>
          Muhammad Ahmed
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          {portfolioContent.hero.socials.slice(0, 2).map((social) => (
            <Link
              key={social.href}
              href={social.href}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/30 text-primary-600 transition hover:bg-primary-500 hover:text-white"
              aria-label={social.label}
            >
              <SocialIcon icon={social.icon} className="h-4 w-4" />
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-white px-4 py-2 text-sm font-medium text-primary-600 shadow-sm shadow-primary-500/10 transition hover:bg-primary-500 hover:text-white md:hidden"
          onClick={toggleNav}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>
      </div>
      <nav
        id="mobile-nav"
        className={`${isOpen ? "block" : "hidden"} border-t border-white/30 bg-white/90 backdrop-blur md:hidden`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-sm font-medium text-slate-600">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 hover:bg-primary-50 hover:text-primary-600"
              onClick={closeNav}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
