import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

const levelStyles: Record<string, string> = {
  Advanced: "bg-primary-500/15 text-primary-700",
  Intermediate: "bg-accent-400/15 text-accent-600",
  Working: "bg-surface-200 text-surface-900",
  Learning: "bg-slate-100 text-slate-600",
};

export function SkillsSection() {
  return (
    <section id="skills" className="mx-auto mt-28 max-w-6xl px-6">
      <SectionHeading
        eyebrow="Skills"
        title="Engineering craft layered with product strategy and design empathy."
        description="Hands-on with modern web tooling, yet anchored in fundamentals: automated testing, semantic HTML, accessibility, and continuous discovery with stakeholders."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {portfolioContent.skills.map((category) => (
          <article
            key={category.title}
            className="rounded-3xl border border-primary-500/10 bg-white/90 p-8 shadow-lg shadow-primary-500/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-surface-900">{category.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">Core</span>
            </div>
            <ul className="mt-6 space-y-4">
              {category.items.map((item) => (
                <li key={item.name} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-surface-100/80 p-4 text-sm font-medium text-slate-700">
                  <span>{item.name}</span>
                  <span className={`rounded-full px-3 py-1 text-xs ${levelStyles[item.level] ?? levelStyles.Working}`}>
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
