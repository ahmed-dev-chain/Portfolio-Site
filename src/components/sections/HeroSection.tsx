import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { portfolioContent } from "@/data/portfolio";

export function HeroSection() {
  const hero = portfolioContent.hero;

  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial opacity-60" />
        <div className="absolute inset-0 bg-grid-light [background-size:24px_24px]" />
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 md:flex-row md:items-center md:gap-20">
        <div className="flex-1 space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary-600">
            {hero.location}
          </span>
          <div className="space-y-4">
            <h1 className="font-display text-4xl font-semibold text-surface-900 sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="text-lg text-slate-600 md:text-xl">{hero.subHeadline}</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-50"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-white px-6 py-3 text-sm font-semibold text-primary-600 transition hover:border-primary-500 hover:text-primary-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
          <div className="inline-flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface-100 px-3 py-1 font-medium text-surface-700">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              {hero.availability}
            </span>
            <span className="hidden h-5 w-px bg-slate-200 sm:block" />
            {hero.socials.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/20 text-primary-600 transition hover:bg-primary-500 hover:text-white"
                aria-label={social.label}
              >
                <SocialIcon icon={social.icon} className="h-4 w-4" />
              </Link>
            ))}
          </div>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto max-w-sm rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-glow lg:max-w-md">
            <div className="absolute inset-x-8 -top-6 h-12 rounded-full bg-gradient-to-r from-primary-500/80 via-transparent to-accent-500/80 blur-2xl" />
            <div className="relative rounded-[28px] bg-surface-900 p-2">
              <div className="rounded-[24px] bg-slate-900/70 p-1 ring-1 ring-primary-500/10">
                <Image
                  src="/images/me.png"
                  width={560}
                  height={640}
                  alt="Portrait of Muhammad Ahmed"
                  className="h-[380px] w-full rounded-[22px] object-cover md:h-[440px]"
                  priority
                />
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between rounded-2xl bg-surface-100 px-4 py-3 text-xs font-medium text-slate-600">
                <span>Currently shipping</span>
                <span className="text-slate-900">Next.js design systems</span>
              </div>
              <div className="rounded-2xl bg-white px-4 py-4 text-xs text-slate-600 shadow-primary-500/5">
                <p className="font-semibold uppercase tracking-[0.3em] text-primary-600">Recent wins</p>
                <ul className="mt-3 list-disc space-y-2 pl-4">
                  <li>+18% onboarding lift with experiment led workflow.</li>
                  <li>Design system reuse increased shipping speed by 40%.</li>
                  <li>Lighthouse perf scores ≥ 97 on key product surfaces.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatsBar />
    </section>
  );
}

function StatsBar() {
  return (
    <section className="mx-auto max-w-6xl px-6">
      <div className="grid gap-4 rounded-3xl border border-primary-500/15 bg-white/90 p-6 shadow-lg shadow-primary-500/10 backdrop-blur md:grid-cols-3">
        {portfolioContent.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-3xl font-semibold text-surface-900">{stat.value}</span>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary-500">{stat.label}</span>
            <p className="text-sm text-slate-600">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
