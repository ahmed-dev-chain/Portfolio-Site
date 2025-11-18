import { portfolioContent } from "@/data/portfolio.data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function TestimonialsSection() {
  const testimonials = portfolioContent.testimonials;

  return (
    <section id="testimonials" className="mx-auto mt-28 max-w-6xl px-6 text-slate-100">
      <SectionHeading
        eyebrow="Kind words"
        title="Trusted by founders, product leads, and growth teams."
        description="A sampling of feedback from partners I have helped scale through design-led development and velocity-minded delivery."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.name}
            className="flex h-full flex-col justify-between gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 text-slate-200 shadow-xl shadow-primary-500/20 backdrop-blur"
          >
            <blockquote className="text-lg font-medium text-slate-100">
              “{testimonial.quote}”
            </blockquote>
            <figcaption className="text-sm text-slate-400">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-slate-300/90">
                {testimonial.role} · {testimonial.company}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
