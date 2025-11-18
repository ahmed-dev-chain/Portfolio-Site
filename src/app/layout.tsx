import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { portfolioContent } from "@/data/portfolio.data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khalizero.com"),
  title: {
    default: "Muhammad Ahmed · Senior MERN Stack Developer",
    template: "%s · Muhammad Ahmed",
  },
  description:
    "Senior MERN Stack Developer specializing in Next.js, NestJS, Stripe, and scalable dashboards. Building SaaS, fintech, and IoT products end-to-end with clean TypeScript architectures.",
  keywords: [
    "Muhammad Ahmed",
    "khalizero",
    "Senior MERN Stack Developer",
    "Next.js engineer",
    "NestJS backend",
    "TypeScript full-stack",
    "Stripe Connect developer",
    "IoT dashboards",
    "Blockchain payments",
    "Full-stack engineer Pakistan",
  ],
  authors: [{ name: "Muhammad Ahmed", url: "https://khalizero.com" }],
  creator: "Muhammad Ahmed",
  publisher: "Muhammad Ahmed",
  alternates: {
    canonical: "https://khalizero.com",
  },
  openGraph: {
    type: "website",
    url: "https://khalizero.com",
    title: "Muhammad Ahmed · Senior MERN Stack Developer",
    description:
      "MERN expert blending Next.js, NestJS, and Stripe integrations to launch scalable SaaS, fintech, and IoT products.",
    images: [
      {
        url: "/images/me.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Ahmed portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@khalizero",
    title: "Muhammad Ahmed · Senior MERN Stack Developer",
    description:
      "Building TypeScript-first MERN solutions for SaaS, eCommerce, blockchain, and IoT teams.",
    images: ["/images/me.png"],
  },
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#0b0d18" }, { media: "(prefers-color-scheme: light)", color: "#f8fafc" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolioContent.hero.name,
    jobTitle: "Senior MERN Stack Developer",
    url: "https://khalizero.com",
    email: "mailto:aw708596@gmail.com",
    image: "https://khalizero.com/images/me.png",
    sameAs: portfolioContent.hero.socials.map((social) => social.href),
    worksFor: portfolioContent.experiences.map((experience) => ({
      "@type": "Organization",
      name: experience.company,
    })),
    knowsAbout: [
      "MERN stack",
      "TypeScript",
      "Next.js",
      "NestJS",
      "Stripe Connect",
      "Tailwind CSS",
      "IoT dashboards",
      "Blockchain payments",
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} bg-surface-50 text-surface-900 antialiased`}
      >
        <div className="relative isolate">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-radial opacity-40" />
          <Header />
          {children}
          <Footer />
        </div>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
