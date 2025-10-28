import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ExperienceSection() {
  const experiences = portfolioContent.experiences;

  return (
    <section id="experience" className="mx-auto mt-28 max-w-6xl px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Recent roles where I owned product delivery end-to-end."
        description="Strategic partner across engineering, design, and product. I lead front-end modernization initiatives, craft design systems, and foster high-bandwidth collaboration with stakeholders."
      />
      <div className="mt-12 space-y-12">
        {experiences.map((experience, index) => (
          <article
            key={experience.company}
            className="relative grid gap-6 rounded-3xl border border-primary-500/10 bg-white/90 p-8 shadow-lg shadow-primary-500/5 lg:grid-cols-[240px,1fr]"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-500">
                {experience.start} — {experience.end}
              </p>
              <h3 className="font-display text-xl font-semibold text-surface-900">{experience.role}</h3>
              <p className="text-sm text-slate-500">{experience.company}</p>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                {experience.location}
              </p>
            </div>
            <div className="space-y-4 text-sm text-slate-600">
              <p className="text-base text-slate-600">{experience.summary}</p>
              <ul className="space-y-3">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3 rounded-2xl bg-surface-100/70 p-4">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.stack.map((tech) => (
                  <span key={tech} className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-600">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {index !== experiences.length - 1 && (
              <div className="absolute -bottom-9 left-12 hidden h-16 w-px bg-gradient-to-b from-primary-500/30 to-transparent lg:block" />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
