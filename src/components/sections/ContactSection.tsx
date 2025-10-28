import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { portfolioContent } from "@/data/portfolio";

export function ContactSection() {
  const { contact, hero } = portfolioContent;

  return (
    <section id="contact" className="mx-auto mt-28 max-w-6xl px-6 text-slate-100">
      <div className="overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-950/85 to-slate-900 px-8 py-16 shadow-2xl shadow-primary-500/25 backdrop-blur">
        <SectionHeading
          eyebrow="Let's build"
          title="Share the idea, I'll bring a battle-tested execution plan."
          description={
            <p className="text-slate-200">
              {contact.message}
            </p>
          }
          align="center"
        />
        <div className="mt-10 grid gap-10 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="space-y-6 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">Primary channel</p>
                <Link href={`mailto:${contact.email}`} className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-primary-200">
                  <SocialIcon icon="email" className="h-5 w-5" />
                  {contact.email}
                </Link>
              </div>
              {contact.phone && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">Direct line</p>
                  <Link href={`tel:${contact.phone}`} className="mt-1 inline-flex items-center gap-2 text-lg font-semibold text-white transition hover:text-primary-200">
                    {contact.phone}
                  </Link>
                </div>
              )}
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">Timezone</p>
                <p className="mt-1 text-lg font-semibold text-white">{contact.timezone}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={hero.ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-500/40 transition hover:bg-primary-400"
              >
                Email Muhammad
              </Link>
              {contact.calendly && (
                <Link
                  href={contact.calendly}
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book a call
                  <span aria-hidden className="text-lg">
                    ↗
                  </span>
                </Link>
              )}
              <Link
                href={hero.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <SocialIcon icon="download" className="h-4 w-4" />
                Résumé PDF
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary-200">
              Stay connected
            </p>
            <p>
              Follow along for product breakdowns, front-end experiments, and behind the scenes case studies.
            </p>
            <div className="flex flex-wrap gap-3">
              {hero.socials.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:bg-white/10"
                >
                  <SocialIcon icon={social.icon} className="h-4 w-4" />
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
