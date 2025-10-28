import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ExperienceSection() {
  const experiences = portfolioContent.experiences;

  return (
    <section id="experience" className="mx-auto mt-28 max-w-6xl px-6 text-slate-100">
      <SectionHeading
        eyebrow="Experience"
        title="Recent roles where I owned product delivery end-to-end."
        description="Strategic partner across engineering, design, and product. I lead front-end modernization initiatives, craft design systems, and foster high-bandwidth collaboration with stakeholders."
      />
      <div className="mt-12 space-y-10">
        {experiences.map((experience) => (
          <article
            key={experience.company}
            className="grid gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-xl shadow-primary-500/20 backdrop-blur lg:grid-cols-[250px,1fr]"
          >
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">
                {experience.start} — {experience.end}
              </p>
              <h3 className="font-display text-2xl font-semibold text-white">
                {experience.role}
              </h3>
              <p className="text-sm text-slate-300">{experience.company}</p>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-400">
                {experience.location}
              </p>
            </div>
            <div className="space-y-5 text-sm text-slate-200">
              <p className="text-base text-slate-200/90">{experience.summary}</p>
              <ul className="space-y-3">
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-4"
                  >
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-primary-400" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-primary-400/30 bg-primary-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
