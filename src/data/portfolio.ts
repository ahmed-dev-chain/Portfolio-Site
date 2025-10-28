import type { PortfolioContent } from "@/types/portfolio";

export const portfolioContent: PortfolioContent = {
  hero: {
    name: "Muhammad Ahmed",
    headline: "Crafting refined digital products with full-stack expertise and design precision.",
    subHeadline:
      "Product-focused engineer blending React, Next.js, and thoughtful UX to ship delightful web experiences that scale.",
    availability: "Currently open to senior engineering roles & select product collaborations.",
    location: "Pakistan · Remote-ready",
    ctaPrimary: {
      label: "Start a project",
      href: "mailto:hello@khalizero.com?subject=Let's build something remarkable",
    },
    ctaSecondary: {
      label: "Download résumé",
      href: "/docs/Muhammad-Ahmed.pdf",
    },
    socials: [
      { label: "GitHub", href: "https://github.com/khalizero", icon: "github" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/khalizero", icon: "linkedin" },
      { label: "Email", href: "mailto:hello@khalizero.com", icon: "email" },
      { label: "Dribbble", href: "https://dribbble.com/khalizero", icon: "dribbble" },
    ],
  },
  stats: [
    {
      label: "Years in product engineering",
      value: "5+",
      description: "Building performant, accessible web apps for startups and agencies.",
    },
    {
      label: "Products shipped",
      value: "24",
      description: "From greenfield MVPs to design systems refactors and growth experiments.",
    },
    {
      label: "Design to production time saved",
      value: "~30%",
      description: "By delivering reusable UI kits, analytics dashboards, and automation.",
    },
  ],
  about: {
    title: "Product-minded engineer with a bias for shipping enhancements that matter.",
    description:
      "I help teams transform ambiguous product ideas into polished experiences. My sweet spot lives at the intersection of thoughtful UX, TypeScript-heavy engineering, and tight feedback loops with stakeholders. Outside code, I mentor early-career developers and experiment with creative coding for fun.",
    specialties: ["Design systems & component libraries", "High-performing marketing sites & landing pages", "Data-rich dashboards with real-time updates", "Content-driven SEO experiences using Next.js"],
    values: ["Always human-first", "Measure everything", "Iterate with intention", "Design for longevity"],
  },
  experiences: [
    {
      company: "Freelance / Independent",
      role: "Senior Frontend Consultant",
      location: "Remote",
      start: "2021",
      end: "Present",
      summary: "Partnered with SaaS founders and agencies to design, build, and optimize web apps that convert.",
      achievements: [
        "Led the rebuild of a fintech analytics platform in Next.js, improving Lighthouse performance to 97+ and doubling activation rate.",
        "Designed and shipped a component library consumed across three product squads, cutting delivery time for net-new UIs by 40%.",
        "Implemented full-stack experimentation tooling that produced a 18% lift in onboarding completion.",
      ],
      stack: ["Next.js", "TypeScript", "Tailwind", "React Query", "Supabase", "Figma"],
    },
    {
      company: "MBFX Tech",
      role: "Lead UI Engineer",
      location: "Remote",
      start: "2019",
      end: "2021",
      summary: "Headed UI modernization for trading and education web platforms across multiple brands.",
      achievements: [
        "Architected a micro front-end strategy to share charts, streaming data, and auth flows across business units.",
        "Collaborated with research to craft atomic design guidelines while aligning with WCAG AA accessibility standards.",
        "Migrated legacy codebases to TypeScript, eliminating categories of runtime bugs and reducing bundle size by 28%.",
      ],
      stack: ["React", "Next.js", "TypeScript", "Tailwind", "Storybook", "Jest"],
    },
    {
      company: "Createsmart Studio",
      role: "Product Designer & Developer",
      location: "Hybrid",
      start: "2017",
      end: "2019",
      summary: "Shipped full-funnel marketing experiences, e-commerce storefronts, and rapid prototypes for agency clients.",
      achievements: [
        "Delivered 15+ conversion-optimized marketing sites using JAMstack tooling and modular CMS integrations.",
        "Created KPI dashboards for client success teams, aggregating CRM, billing, and attribution data sources.",
        "Mentored a team of four designers transitioning to front-end roles, introducing code review and QA rituals.",
      ],
      stack: ["Gatsby", "Next.js", "Netlify", "Sanity", "Figma"],
    },
  ],
  projects: [
    {
      slug: "bankist",
      title: "Bankist — Personal banking web app",
      description:
        "Redesigned a fictional digital bank into a polished web experience with onboarding flows, budgeting analytics, and responsive dashboards.",
      highlights: [
        "Implemented server components for fast-loading account overview and transaction history.",
        "Built accessible charts and progress indicators for savings goals with dynamic data hydration.",
        "Added behavior-driven onboarding with progressive profiling tied to analytics events.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      image: "/images/Bankist-App.png",
      liveUrl: "https://bankist.khalizero.com",
      repoUrl: "https://github.com/khalizero/bankist",
    },
    {
      slug: "mapty",
      title: "Mapty — Fitness tracking on interactive maps",
      description:
        "A geolocation-enabled workout journal layered on top of Mapbox, optimizing offline-first data storage and intuitive filters.",
      highlights: [
        "Used Next.js Route Handlers to power API endpoints for workouts and weather insights.",
        "Implemented optimistic updates and local persistence ensuring seamless UX on poor networks.",
        "Delivered custom clustering for markers with animated hover states and keyboard navigation.",
      ],
      tech: ["Next.js", "TypeScript", "Tailwind", "Mapbox GL"],
      image: "/images/MaptyApp.png",
      liveUrl: "https://mapty.khalizero.com",
      repoUrl: "https://github.com/khalizero/mapty",
    },
    {
      slug: "drogo",
      title: "Drogo — Customer feedback insights",
      description:
        "A research ops dashboard aggregating NPS, survey, and support conversations into a unified prioritization view for product teams.",
      highlights: [
        "Blended server actions with incremental static regeneration for live data refresh.",
        "Built faceted search with instant filters across sentiment, persona, and revenue impact.",
        "Integrated role-based access control with auditing to support enterprise compliance.",
      ],
      tech: ["Next.js", "Supabase", "TypeScript", "Tailwind"],
      image: "/images/DrogoSurvey.png",
      liveUrl: "https://drogo.khalizero.com",
    },
    {
      slug: "bookland",
      title: "BookLand — Community for book lovers",
      description:
        "A visually-rich editorial platform showcasing curated reading lists, author interviews, and community-driven reviews.",
      highlights: [
        "Implemented dynamic OG image generation for every list page using Next.js server actions.",
        "Crafted a typography-driven UI with fluid design tokens and accessible dark mode.",
        "Hooked up modern search with Algolia and incremental static regeneration for new posts.",
      ],
      tech: ["Next.js", "MDX", "Tailwind", "Algolia"],
      image: "/images/BookLand.png",
      liveUrl: "https://bookland.khalizero.com",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: [
        { name: "Next.js", level: "Advanced" },
        { name: "React (19, Server Components)", level: "Advanced" },
        { name: "TypeScript", level: "Advanced" },
        { name: "Tailwind CSS", level: "Advanced" },
        { name: "Framer Motion", level: "Working" },
      ],
    },
    {
      title: "Backend & Cloud",
      items: [
        { name: "Node.js", level: "Advanced" },
        { name: "PostgreSQL", level: "Intermediate" },
        { name: "Supabase", level: "Working" },
        { name: "Server Actions", level: "Intermediate" },
        { name: "Vercel", level: "Advanced" },
      ],
    },
    {
      title: "Design & Collaboration",
      items: [
        { name: "Product Discovery Workshops", level: "Advanced" },
        { name: "Figma & Design Systems", level: "Advanced" },
        { name: "Storybook", level: "Working" },
        { name: "User Research Synthesis", level: "Working" },
      ],
    },
    {
      title: "Practices",
      items: [
        { name: "TDD & Continuous Delivery", level: "Intermediate" },
        { name: "Performance & Accessibility Audits", level: "Advanced" },
        { name: "SEO for Developers", level: "Advanced" },
        { name: "Analytics Instrumentation", level: "Advanced" },
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Muhammad ships front-end that looks great on day one and keeps paying dividends. Our marketing team finally has a design system that lowers costs and lets us iterate faster.",
      name: "Sarah Lee",
      role: "Head of Growth",
      company: "Fintrak",
    },
    {
      quote:
        "He brings structure to chaotic product ideas. From the first workshop to the production launch, the collaboration felt like having an embedded product partner.",
      name: "Jonas Martinez",
      role: "Founder",
      company: "Northbound Analytics",
    },
  ],
  contact: {
    email: "hello@khalizero.com",
    phone: "+92 333 1234567",
    timezone: "GMT+5 (Pakistan Standard Time)",
    calendly: "https://cal.com/khalizero/intro",
    message:
      "Have a product idea, need a design-led engineer on retainer, or want to audit your current experience? Let’s connect for a 30-minute remote coffee.",
  },
};
