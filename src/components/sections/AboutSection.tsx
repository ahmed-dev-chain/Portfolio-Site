import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSection() {
  const about = portfolioContent.about;

  return (
    <section id="about" className="relative mx-auto mt-28 max-w-6xl rounded-3xl bg-white/90 px-6 py-20 shadow-lg shadow-primary-500/10 backdrop-blur">
      <div className="absolute inset-0 -z-10 rounded-3xl border border-primary-500/15" />
      <SectionHeading
        eyebrow="About"
        title={about.title}
        description={<p>{about.description}</p>}
      />
      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <div className="space-y-6 rounded-3xl border border-primary-500/10 bg-surface-50/80 p-6 shadow-primary-500/5">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
            Signature outcomes
          </h3>
          <ul className="space-y-4 text-sm text-slate-600">
            {about.specialties.map((item) => (
              <li key={item} className="flex gap-3 rounded-2xl bg-white/80 p-4 shadow-sm shadow-primary-500/5">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/20 bg-gradient-to-br from-primary-500/10 via-white to-accent-300/20 p-6 shadow-inner">
          <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-600">
            Working principles
          </h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {about.values.map((value) => (
              <li key={value} className="rounded-2xl border border-primary-500/10 bg-white/70 p-4 text-sm font-medium text-slate-700 shadow-sm">
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
