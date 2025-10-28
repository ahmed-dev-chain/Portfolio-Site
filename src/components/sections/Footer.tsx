import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-24 max-w-6xl px-6 pb-16 text-sm text-slate-300">
      <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-lg shadow-primary-500/20 backdrop-blur">
        <div className="flex flex-col gap-4 text-slate-200 md:flex-row md:items-center md:justify-between">
          <p className="font-medium text-slate-200/90">
            © {year} Muhammad Ahmed. Crafted with Next.js, Tailwind CSS, and a love for refined interfaces.
          </p>
          <div className="flex gap-4 text-xs uppercase tracking-[0.3em] text-primary-200">
            <Link href="#hero" className="hover:text-primary-100">
              Back to top
            </Link>
            <Link href="https://github.com/khalizero" className="hover:text-primary-100">
              GitHub
            </Link>
            <Link href="https://www.linkedin.com/in/khalizero" className="hover:text-primary-100">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
