import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function AboutSection() {
  const about = portfolioContent.about;

  return (
    <section id="about" className="mx-auto mt-28 max-w-6xl px-6 text-slate-100">
      <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-primary-500/15 backdrop-blur sm:p-10 lg:p-12">
        <SectionHeading
          eyebrow="About"
          title={about.title}
          description={<p>{about.description}</p>}
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-inner shadow-primary-500/10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
              Signature outcomes
            </h3>
            <ul className="space-y-4 text-sm text-slate-200">
              {about.specialties.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 shadow-sm shadow-primary-500/10"
                >
                  <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-inner shadow-primary-500/10">
            <h3 className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
              Working principles
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {about.values.map((value) => (
                <li
                  key={value}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm font-medium text-slate-200 shadow-sm shadow-primary-500/10"
                >
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
