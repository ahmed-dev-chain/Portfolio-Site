## Muhammad Ahmed · Portfolio

Modern, SEO-focused, server-rendered portfolio built with Next.js 16 (App Router) and Tailwind CSS. Designed to showcase engineering craft, storytelling, and contact touchpoints for freelance/contract opportunities.

### 🧱 Tech Stack
- Next.js 16 with TypeScript and App Router
- Tailwind CSS 3 (custom theming) & CSS utility patterns
- Next Font (`Inter`, `Playfair Display`) and optimized images
- Structured data (JSON-LD) + detailed metadata for SEO

### 🚀 Getting Started
```bash
npm install
npm run dev   # http://localhost:3000
```

### 📂 Project Structure
- `src/data/portfolio.ts` — centralized content (hero, projects, experience, etc.)
- `src/components/sections/*` — reusable, server-friendly section components
- `src/app` — Next.js App Router routes, layout, and global styles
- `public/images` — optimized static imagery sourced from the previous portfolio

### ✅ Highlights
- SSR enforced via `force-dynamic` to keep content fresh
- Semantic sections with accessible focus states and keyboard navigation
- Responsive design with glassmorphism, gradients, and subtle animations
- Rich metadata (OpenGraph, Twitter Card, structured data) for sharing and search

### 🧪 Useful Scripts
- `npm run dev` — start dev server
- `npm run build` — production build (SSR + static assets)
- `npm run start` — run built app
- `npm run lint` — lint using Next.js config

### 📦 Deployment
Deploy to any Next.js-compatible host. For Vercel:
```bash
npm run build
# push to GitHub, connect repository to Vercel dashboard, deploy
```

Feel free to adjust copy, imagery, and content in `src/data/portfolio.ts` to keep the story current.
