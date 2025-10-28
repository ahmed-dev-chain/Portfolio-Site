import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-20 max-w-6xl px-6 pb-16 text-sm text-slate-500">
      <div className="rounded-3xl border border-primary-500/10 bg-white/90 p-6 shadow-sm shadow-primary-500/5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-slate-600">
            © {year} Muhammad Ahmed. Crafted with Next.js, Tailwind CSS, and a love for refined interfaces.
          </p>
          <div className="flex gap-4 text-xs uppercase tracking-[0.3em] text-primary-500">
            <Link href="#hero" className="hover:text-primary-400">
              Back to top
            </Link>
            <Link href="https://github.com/khalizero" className="hover:text-primary-400">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/khalizero" className="hover:text-primary-400">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
