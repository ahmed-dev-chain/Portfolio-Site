import Link from "next/link";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { portfolioContent } from "@/data/portfolio.data";

const heroHighlights = [
  {
    title: "Modular commerce core",
    description:
      "NestJS + MySQL architecture powering vendor onboarding, payouts, and Stripe Connect flows.",
  },
  {
    title: "IoT ops telemetry",
    description:
      "ShipSense dashboards surface shipment anomalies with live sensor data and actionable alerts.",
  },
  {
    title: "AI interview prep",
    description:
      "Role-based experiences with Supabase auth, adaptive questions, and mentor dashboards.",
  },
];

export function HeroSection() {
  const hero = portfolioContent.hero;

  return (
    <section
      id="hero"
      className="relative overflow-hidden pb-0 pt-32 text-slate-100"
    >
      <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="flex flex-col gap-10">
          <div className="inline-flex flex-wrap gap-3 text-xs uppercase tracking-[0.35em] text-primary-100">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-white/5 px-4 py-2 font-semibold text-primary-100 shadow-lg shadow-primary-500/10 backdrop-blur">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              {hero.location}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 font-semibold text-slate-200/90 shadow-inner shadow-primary-500/10 backdrop-blur">
              Crafting digital products
            </span>
          </div>

          <div className="space-y-6">
            <h1 className="max-w-xl font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl">
              {hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              {hero.subHeadline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            {/* <Link
              href={hero.ctaPrimary.href}
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-primary-500 via-primary-400 to-aurora-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/30 transition hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
            >
              {hero.ctaPrimary.label}
            </Link> */}
            <Link
              href={hero.ctaSecondary.href}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-primary-400/40 hover:bg-primary-500/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-medium text-slate-100 backdrop-blur">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                {hero.availability}
              </span>
              <span className="hidden h-6 w-px bg-white/15 sm:block" />
              <div className="flex items-center gap-2">
                {hero.socials.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 transition hover:border-primary-400/40 hover:bg-primary-500/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950"
                    aria-label={social.label}
                  >
                    <SocialIcon icon={social.icon} className="h-4 w-4" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-primary-500/20 backdrop-blur">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
              Currently shipping
            </p>
            <h2 className="text-2xl font-semibold text-white">
              Design systems & growth-ready marketing surfaces
            </h2>
            <p className="text-sm leading-relaxed text-slate-200/90">
              Partnering with product teams to align design, engineering, and
              analytics into a single workflow that ships weekly.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {heroHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-slate-950/70 p-5 text-slate-200 shadow-inner shadow-primary-500/10"
              >
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">
                  {highlight.title}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/90">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <StatsBar />
    </section>
  );
}

function StatsBar() {
  return (
    <section className="mx-auto mt-16 max-w-6xl px-6">
      <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-slate-200 shadow-lg shadow-primary-500/20 backdrop-blur md:grid-cols-3">
        {portfolioContent.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="text-3xl font-semibold text-white">
              {stat.value}
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-200">
              {stat.label}
            </span>
            <p className="text-sm text-slate-300/90">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
