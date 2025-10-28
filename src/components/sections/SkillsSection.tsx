import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

const levelStyles: Record<string, string> = {
  Advanced: "border-primary-400/40 bg-primary-500/20 text-primary-100",
  Intermediate: "border-aurora-400/40 bg-aurora-500/15 text-aurora-100",
  Working: "border-white/20 bg-white/10 text-slate-100",
  Learning: "border-white/15 bg-white/5 text-slate-200",
};

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto mt-28 max-w-6xl px-6 text-slate-100">
      <SectionHeading
        eyebrow="Skills"
        title="Engineering craft layered with product strategy and design empathy."
        description="Hands-on with modern web tooling, yet anchored in fundamentals: automated testing, semantic HTML, accessibility, and continuous discovery with stakeholders."
      />
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {portfolioContent.skills.map((category) => (
          <article
            key={category.title}
            className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-primary-500/20 backdrop-blur"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-2xl font-semibold text-white">{category.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
                Core
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {category.items.map((item) => (
                <li
                  key={item.name}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4 text-sm font-medium text-slate-200"
                >
                  <span>{item.name}</span>
                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${
                      levelStyles[item.level] ?? levelStyles.Working
                    }`}
                  >
                    {item.level}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
