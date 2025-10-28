import { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-200">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <div className="mt-4 text-lg text-slate-300">{description}</div>}
    </div>
  );
}
