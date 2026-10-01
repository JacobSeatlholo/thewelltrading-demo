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

/** Shared hero banner for inner pages — light, blueprint-style. */
export function PageHero({ eyebrow, title, highlight, description, crumb }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-paper-soft bg-grid pt-36 pb-16 sm:pt-44 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(640px 320px at 18% 0%, rgba(0,37,129,0.08), transparent 65%), radial-gradient(520px 300px at 85% 100%, rgba(138,187,42,0.10), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <nav aria-label="Breadcrumb" className="mb-6 text-xs font-semibold uppercase tracking-[0.2em]">
            <ol className="flex items-center gap-1.5 text-slate-500">
              <li>
                <Link href="/" className="transition hover:text-navy">
                  Home
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="h-3.5 w-3.5" />
              </li>
              <li aria-current="page" className="text-navy">
                {crumb}
              </li>
            </ol>
          </nav>
          <p className="inline-flex items-center rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-navy shadow-[0_2px_10px_-6px_rgba(0,37,129,0.35)]">
            {eyebrow}
          </p>
          <h1 className="mt-4 max-w-3xl font-heading text-4xl font-extrabold leading-[1.1] text-navy-ink sm:text-5xl">
            {title}{" "}
            {highlight ? <span className="text-gradient-brand">{highlight}</span> : null}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
