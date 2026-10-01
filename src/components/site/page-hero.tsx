import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
  crumb: string;
};

/** Shared hero banner for inner pages. */
export function PageHero({ eyebrow, title, highlight, description, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-grid pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(640px 320px at 18% 0%, rgba(56,189,248,0.16), transparent 65%), radial-gradient(520px 300px at 85% 100%, rgba(251,191,36,0.09), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
            <ol className="flex items-center gap-1.5 text-slate-500">
              <li>
                <Link href="/" className="transition hover:text-volt-soft">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="text-volt">
                {crumb}
              </li>
            </ol>
          </nav>
          <p className="inline-flex items-center rounded-full border border-volt/25 bg-volt/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-volt-soft">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl">
            {title}{" "}
            {highlight ? <span className="text-gradient-volt">{highlight}</span> : null}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
