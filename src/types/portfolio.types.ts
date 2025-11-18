export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "x" | "email" | "download" | "behance" | "dribbble";
};

export type Stat = {
  label: string;
  value: string;
  description: string;
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  stack: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
  image: string;
  liveUrl?: string;
  repoUrl?: string;
};

export type SkillCategory = {
  title: string;
  items: {
    name: string;
    level: "Advanced" | "Intermediate" | "Working" | "Learning";
  }[];
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type PortfolioContent = {
  hero: {
    name: string;
    headline: string;
    subHeadline: string;
    availability: string;
    location: string;
    ctaPrimary: {
      label: string;
      href: string;
    };
    ctaSecondary: {
      label: string;
      href: string;
    };
    socials: SocialLink[];
  };
  stats: Stat[];
  about: {
    title: string;
    description: string;
    specialties: string[];
    values: string[];
  };
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  testimonials: Testimonial[];
  contact: {
    email: string;
    phone?: string;
    timezone: string;
    calendly?: string;
    message: string;
  };
};
