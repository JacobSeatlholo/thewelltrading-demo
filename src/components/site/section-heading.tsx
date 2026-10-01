import { Zap } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-navy shadow-[0_2px_10px_-6px_rgba(0,37,129,0.35)] ${
          centered ? "mx-auto" : ""
        }`}
      >
        <Zap className="h-3.5 w-3.5 text-scarlet" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-slate-600">{description}</p>
      ) : null}
    </Reveal>
  );
}
