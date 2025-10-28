import { portfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TestimonialsSection() {
  const testimonials = portfolioContent.testimonials;

  return (
    <section id="testimonials" className="mx-auto mt-28 max-w-6xl px-6">
      <SectionHeading
        eyebrow="Kind words"
        title="Trusted by founders, product leads, and growth teams."
        description="A sampling of feedback from partners I have helped scale through design-led development and velocity-minded delivery."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between gap-6 rounded-3xl border border-primary-500/10 bg-white/90 p-8 shadow-lg shadow-primary-500/5"
          >
            <blockquote className="text-lg font-medium text-slate-700">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="text-sm text-slate-500">
              <p className="font-semibold text-surface-900">{testimonial.name}</p>
              <p>
                {testimonial.role} · {testimonial.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
