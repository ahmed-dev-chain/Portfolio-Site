import type { PortfolioContent } from "@/types/portfolio.types";

export const portfolioContent: PortfolioContent = {
  hero: {
    name: "Muhammad Ahmed",
    headline:
      "Senior MERN Stack Developer crafting SaaS, fintech, and IoT platforms end-to-end.",
    subHeadline:
      "4+ years of experience shipping scalable Next.js and NestJS applications with Stripe, Redis, and robust automation. I turn complex requirements into reliable dashboards, APIs, and user experiences.",
    availability: "Open to senior MERN/full-stack roles & product collaborations.",
    location: "Lahore, Pakistan · Remote-ready",
    ctaPrimary: {
      label: "Email Muhammad",
      href: "mailto:aw708596@gmail.com?subject=Let%27s build your next MERN platform",
    },
    ctaSecondary: {
      label: "Download résumé",
      href: "/docs/Muhammad-Ahmed.pdf",
    },
    socials: [
      { label: "GitHub", href: "https://github.com/ahmed-dev-chain", icon: "github" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/m-ahmed-dev/", icon: "linkedin" },
      { label: "Email", href: "mailto:aw708596@gmail.com", icon: "email" },
    ],
  },
  stats: [
    {
      label: "Years building MERN solutions",
      value: "4+",
      description: "Delivering scalable SaaS, eCommerce, blockchain, and IoT projects.",
    },
    {
      label: "Production launches owned",
      value: "12",
      description: "From AI-led interview prep to multi-vendor commerce and fintech tools.",
    },
    {
      label: "APIs & workflows optimized",
      value: "30+",
      description: "Authentication, payments, and background jobs tuned for reliability.",
    },
  ],
  about: {
    title: "Engineer-first mindset with a focus on resilient MERN architectures.",
    description:
      "I partner with founders and product teams to translate ambitious roadmaps into clean TypeScript codebases. Whether it’s a multi-vendor marketplace, blockchain integration, or IoT dashboard, I align frontend polish with backend rigor to keep releases predictable.",
    specialties: [
      "Multi-vendor eCommerce and payment platforms with Stripe Connect",
      "Blockchain dashboards, wallets, and transaction monitoring",
      "Data-rich IoT and analytics interfaces with reusable UI systems",
      "Automation pipelines covering OTP auth, queues, and notifications",
    ],
    values: [
      "Strong problem-solving under pressure",
      "Clean, maintainable, and well-tested code",
      "Transparent communication and teamwork",
      "Performance, security, and reliability first",
    ],
  },
  experiences: [
    {
      company: "PieCyfer",
      role: "MERN Stack Developer",
      location: "Lahore, Pakistan",
      start: "Aug 2025",
      end: "Present",
      summary:
        "Owning backend foundations for a multi-vendor eCommerce platform while partnering closely with the Next.js frontend squad.",
      achievements: [
        "Designed a modular NestJS + Node.js architecture on MySQL to support vendors, catalogues, orders, and commissions.",
        "Built vendor onboarding, payouts, and transaction ledgers wrapped in RBAC, logging, and validation layers.",
        "Introduced Redis-backed OTP authentication plus caching layers that keep response times predictable under load.",
        "Configured BullMQ workers to orchestrate SMS, email, and notification pipelines for asynchronous reliability.",
        "Implemented Stripe + Stripe Connect along with AWS S3 signed-URL workflows for secure document handling.",
      ],
      stack: ["NestJS", "Node.js", "MySQL", "Redis", "BullMQ", "Stripe Connect", "AWS S3"],
    },
    {
      company: "Gateso",
      role: "Full Stack Developer",
      location: "Remote",
      start: "Jan 2024",
      end: "Aug 2025",
      summary:
        "Led the Next.js frontend for a blockchain-based platform and co-owned API contracts with the NestJS backend team.",
      achievements: [
        "Delivered responsive dashboards and admin panels for wallets, transactions, and live blockchain telemetry.",
        "Translated Figma systems into reusable component libraries for a consistent design language across the app.",
        "Collaborated with backend engineers on data models, contract validation, and debugging complex blockchain flows.",
        "Added defensive error handling around transaction statuses, confirmations, and network volatility.",
        "Supported Agile rituals with code reviews and iterative delivery to keep roadmap work on track.",
      ],
      stack: ["Next.js", "TypeScript", "NestJS", "Blockchain APIs", "Tailwind CSS", "React Query"],
    },
    {
      company: "InsighthubTech",
      role: "Senior Frontend Developer",
      location: "Remote",
      start: "Jul 2024",
      end: "Jun 2025",
      summary:
        "Shipped data-intensive dashboards and internal tools powered by React, Next.js, and predictable state management.",
      achievements: [
        "Implemented Zustand and React Query to standardize async data flows across analytics surfaces.",
        "Used SSR and SSG in Next.js to hit SEO targets and shave time-to-first-byte for public pages.",
        "Crafted reusable UI + chart components with Tailwind CSS, Recharts, and Framer Motion.",
        "Optimized bundles with code splitting, lazy loading, and memoization to cut load times.",
        "Worked directly with backend teams and product owners to refine requirements and deliver on schedule.",
      ],
      stack: ["React.js", "Next.js", "TypeScript", "Zustand", "React Query", "Tailwind CSS"],
    },
    {
      company: "Business Solutions & Services (BSS)",
      role: "Software Engineer",
      location: "Lahore, Pakistan",
      start: "May 2023",
      end: "Dec 2023",
      summary:
        "Delivered React web apps and contributed to mobile initiatives for the Createsmart product suite.",
      achievements: [
        "Developed core workflows in Createsmart using React, Redux, HTML5, CSS3, and JavaScript.",
        "Turned Figma specs into pixel-perfect experiences and standardized styling across modules.",
        "Integrated REST APIs with Axios and Redux Thunk, handling complex async flows and error states.",
        "Refactored monolithic components into reusable blocks to accelerate feature delivery.",
        "Supported a React Native team by improving UI consistency and component performance.",
      ],
      stack: ["React", "Redux", "Axios", "Redux Thunk", "REST APIs", "React Native"],
    },
    {
      company: "Business Solutions & Services (BSS)",
      role: "React Developer",
      location: "Lahore, Pakistan",
      start: "Jan 2022",
      end: "Jul 2023",
      summary:
        "Built the initial Createsmart experience and jumped between frontend and backend tasks as needed.",
      achievements: [
        "Launched the first version of Createsmart with React, Redux, HTML5, and CSS3.",
        "Implemented interactive UI including forms, modals, and dynamic content from Figma prototypes.",
        "Worked with Node.js, Express, and MongoDB on backend integrations supporting the web app.",
        "Connected REST services via Fetch/Axios wrapped in Redux Thunk to manage loading and error states.",
        "Assisted the React Native team on layout fixes and mobile performance improvements.",
      ],
      stack: ["React", "Redux", "Node.js", "Express", "MongoDB", "React Native"],
    },
  ],
  projects: [
    {
      slug: "nail-the-interview",
      title: "Nail The Interview — AI interview preparation",
      description:
        "An AI-powered platform delivering adaptive interview questions, scoring, and mentor feedback for candidates.",
      highlights: [
        "Implemented role-based access for admins, mentors, and candidates with tailored dashboards.",
        "Used Supabase for authentication, database, and storage to keep user data secure.",
        "Crafted a clean onboarding flow and responsive UI focused on clarity and retention.",
      ],
      tech: ["React", "TypeScript", "Vite", "Supabase", "Tailwind CSS", "Google OAuth"],
      image: "/images/nail-the-interview.png",
    },
    {
      slug: "shipsense",
      title: "ShipSense — IoT shipment tracking",
      description:
        "A monitoring dashboard for shipments enriched with IoT sensor data such as temperature, humidity, and geolocation.",
      highlights: [
        "Visualized anomalies and shipment health via custom charts, alerts, and indicators.",
        "Implemented filtering, search, and deep-dive views for ops teams to diagnose issues fast.",
        "Surfaced REST data with predictable caching to keep telemetry current without over-fetching.",
      ],
      tech: ["React", "TypeScript", "Recharts", "Tailwind CSS", "REST APIs"],
      image: "/images/shipsense.png",
    },
    {
      slug: "ama-energy",
      title: "AMA Energy — CRM for solar companies",
      description:
        "A CRM application to manage leads, opportunities, and solar project execution with real-time dashboards.",
      highlights: [
        "Implemented lead pipelines, contact history, and dashboards for key sales metrics.",
        "Added role-based access for sales, admin, and management personas.",
        "Paired a Next.js frontend with NestJS services to keep data consistent across modules.",
      ],
      tech: ["React", "Next.js", "TypeScript", "NestJS", "MongoDB", "Tailwind CSS"],
      image: "/images/Ama-dashboard.png",
    },
    {
      slug: "facade-ai",
      title: "Facade AI — Building & cradle management",
      description:
        "A management interface blending IoT feeds and 3D visualization for facade inspection and cradle tracking.",
      highlights: [
        "Displayed building structures, cradle positions, and equipment metrics in an intuitive UI.",
        "Integrated real-time data feeds for proactive alerting and maintenance schedules.",
        "Used Tailwind CSS plus 3D visualization libraries to keep interactions smooth and performant.",
      ],
      tech: ["Next.js", "TypeScript", "3D visualization", "Tailwind CSS", "WebSockets"],
      image: "/images/facade.png",
    },
    {
      slug: "alphaspay-gateway",
      title: "Alphaspay — Blockchain payment gateway",
      description:
        "A web experience for accepting and withdrawing crypto payments with transparent status tracking.",
      highlights: [
        "Built payment request, transaction status, and confirmation flows optimized for clarity.",
        "Integrated blockchain APIs to surface live transaction data and exception states.",
        "Hardened the UI with comprehensive error handling for each blockchain interaction.",
      ],
      tech: ["Next.js", "TypeScript", "NestJS", "Blockchain APIs", "Tailwind CSS"],
      image: "/images/BankistSite.png",
    },
    {
      slug: "alphaspay-website",
      title: "Alphaspay Website — Marketing site",
      description:
        "Marketing site outlining Alphaspay product features, pricing, and onboarding, tuned for SEO and responsive viewing.",
      highlights: [
        "Built fast-loading marketing pages with Next.js and Tailwind CSS.",
        "Highlighted value props, pricing tiers, and CTAs that lead into the payment gateway.",
        "Shipped SEO-ready markup with structured content blocks for marketing iterations.",
      ],
      tech: ["Next.js", "React", "Tailwind CSS"],
      image: "/images/BookLand.png",
    },
    {
      slug: "mbfx-trading",
      title: "MBFX — Trading website UI",
      description:
        "A trading interface for stocks, commodities, currencies, and indices with real-time inspired layouts.",
      highlights: [
        "Implemented interactive tables, tabbed modules, and responsive layouts for market data.",
        "Optimized typography and spacing to keep dense data scannable.",
        "Delivered reusable styles across multiple landing and education pages.",
      ],
      tech: ["HTML5", "CSS3", "JavaScript"],
      image: "/images/MBFX.png",
    },
    {
      slug: "fuse-financial",
      title: "Fuse Financial — Banking application",
      description:
        "A digital banking experience covering account views, transaction histories, and core money movement flows.",
      highlights: [
        "Built account overview, transfers, and profile management screens in React.",
        "Integrated backend REST APIs for balances, histories, and user profiles.",
        "Hardened asynchronous flows with graceful loading and error treatments.",
      ],
      tech: ["React", "JavaScript", "REST APIs", "CSS"],
      image: "/images/shopping.png",
    },
    {
      slug: "createsmart-builder",
      title: "Createsmart — Presentation & template builder",
      description:
        "A component-based editor that powers presentations, landing pages, and campaign templates.",
      highlights: [
        "Crafted reusable blocks that let marketers compose new presentations rapidly.",
        "Implemented export tooling so teams could push deliverables into multiple channels.",
        "Maintained shared styles and layouts across React web and React Native clients.",
      ],
      tech: ["React", "Redux", "JavaScript", "HTML5", "CSS3"],
      image: "/images/Createsmart.png",
    },
  ],
  skills: [
    {
      title: "Frontend Engineering",
      items: [
        { name: "React.js & Next.js", level: "Advanced" },
        { name: "TypeScript & JavaScript (ES6+)", level: "Advanced" },
        { name: "React Query & Zustand", level: "Advanced" },
        { name: "Tailwind CSS, HTML5 & CSS3", level: "Advanced" },
        { name: "Recharts & Framer Motion", level: "Working" },
      ],
    },
    {
      title: "Backend & APIs",
      items: [
        { name: "Node.js & NestJS", level: "Advanced" },
        { name: "Express.js & REST design", level: "Advanced" },
        { name: "Authentication & Authorization (JWT, RBAC)", level: "Advanced" },
        { name: "BullMQ & background jobs", level: "Intermediate" },
        { name: "Stripe & Stripe Connect integrations", level: "Advanced" },
      ],
    },
    {
      title: "Data & Cloud",
      items: [
        { name: "MongoDB & MySQL", level: "Advanced" },
        { name: "Redis caching layers", level: "Intermediate" },
        { name: "AWS S3 & signed URLs", level: "Intermediate" },
        { name: "Supabase & serverless storage", level: "Working" },
        { name: "Playwright E2E & CI/CD basics", level: "Working" },
      ],
    },
    {
      title: "Delivery & Collaboration",
      items: [
        { name: "Git, GitHub & collaborative reviews", level: "Advanced" },
        { name: "Agile/Scrum & Jira", level: "Advanced" },
        { name: "Figma collaboration & design systems", level: "Working" },
        { name: "Clean architecture & SOLID practices", level: "Advanced" },
        { name: "SaaS, eCommerce & IoT domain expertise", level: "Advanced" },
      ],
    },
  ],
  testimonials: [],
  contact: {
    email: "aw708596@gmail.com",
    phone: "+92 330 062 4626",
    timezone: "GMT+5 (Pakistan Standard Time)",
    message:
      "Need a senior MERN engineer for a SaaS platform, blockchain payment flow, or IoT dashboard? Let's talk through your roadmap and ship a scalable solution.",
  },
};
