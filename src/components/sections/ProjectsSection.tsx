import Image from "next/image";
import Link from "next/link";
import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function ProjectsSection() {
  const projects = portfolioContent.projects;

  return (
    <section id="projects" className="mx-auto mt-28 max-w-6xl px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Product case studies blending polished UI with measurable outcomes."
        description="Each project pairs strong visual direction with technical depth: server-rendered experiences, accessibility baked in, and instrumentation to learn quickly."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="group flex h-full flex-col overflow-hidden rounded-3xl border border-primary-500/10 bg-white/90 shadow-primary-500/5 transition hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-500/20"
          >
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={1200}
                height={840}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 40vw, 80vw"
                priority={index < 2}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-900/50 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
            </div>
            <div className="flex flex-1 flex-col gap-6 p-8">
              <div className="space-y-3">
                <h3 className="font-display text-2xl font-semibold text-surface-900">{project.title}</h3>
                <p className="text-sm text-slate-600">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-600">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-600">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 px-4 py-2 text-primary-600 transition hover:bg-primary-500 hover:text-white"
                  >
                    View live
                    <span aria-hidden className="text-lg">
                      ↗
                    </span>
                  </Link>
                )}
                {project.repoUrl && (
                  <Link
                    href={project.repoUrl}
                    className="inline-flex items-center gap-2 rounded-full border border-primary-500/20 px-4 py-2 text-primary-600 transition hover:bg-primary-500 hover:text-white"
                  >
                    View source
                    <span aria-hidden className="text-lg">
                      ⌘
                    </span>
                  </Link>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
