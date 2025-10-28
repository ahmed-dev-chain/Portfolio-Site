import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { portfolioContent } from "@/data/portfolio";
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
    default: "Muhammad Ahmed · Senior Product Engineer",
    template: "%s · Muhammad Ahmed",
  },
  description:
    "Product-minded senior engineer crafting high-performing web apps with Next.js, thoughtful UX, and measurable impact. Partnering with teams to ship refined digital products.",
  keywords: [
    "Muhammad Ahmed",
    "khalizero",
    "Senior Frontend Engineer",
    "Next.js developer",
    "Product designer",
    "Tailwind CSS",
    "React consultant",
    "Design systems",
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
    title: "Muhammad Ahmed · Senior Product Engineer",
    description:
      "Next.js expert blending design and engineering to launch performant, accessible products with measurable growth.",
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
    title: "Muhammad Ahmed · Product-minded Senior Engineer",
    description:
      "Engineering pixel-perfect, measurable digital experiences using Next.js, TypeScript, and design systems.",
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
    jobTitle: "Senior Frontend Engineer",
    url: "https://khalizero.com",
    email: "mailto:hello@khalizero.com",
    image: "https://khalizero.com/images/me.png",
    sameAs: portfolioContent.hero.socials.map((social) => social.href),
    worksFor: portfolioContent.experiences.map((experience) => ({
      "@type": "Organization",
      name: experience.company,
    })),
    knowsAbout: [
      "Next.js",
      "TypeScript",
      "Product Design",
      "Tailwind CSS",
      "Design Systems",
      "UX Engineering",
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
