import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="space-y-20 pb-20">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
