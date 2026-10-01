import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { BadgeCheck, HardHat, Sparkles } from "lucide-react";
import { projectPhotos } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Successful Projects — Our Work in Action",
  description:
    "Browse real electrical, solar, refrigeration and building projects delivered by The Well Trading across Cape Town and the Western Cape.",
  alternates: { canonical: "/projects/" },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        crumb="Successful Projects"
        eyebrow="Our success stories"
        title="Real sites. Real"
        highlight="results."
        description="A gallery of recent work delivered across the Western Cape — every photo is a job completed, tested and signed off."
      />

      {/* Highlights strip */}
      <section className="pb-4">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:grid-cols-3 sm:px-6">
          {[
            {
              icon: HardHat,
              title: "On-site, on spec",
              text: "Residential, commercial and government work delivered to specification.",
            },
            {
              icon: BadgeCheck,
              title: "Tested & signed off",
              text: "Every installation verified and certified before we leave site.",
            },
            {
              icon: Sparkles,
              title: "Tidy handovers",
              text: "We leave every site clean, safe and ready to use.",
            },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <div className="card-hover flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-navy/15 bg-navy/5 text-navy">
                  <f.icon className="h-5.5 w-5.5" aria-hidden />
                </span>
                <div>
                  <h2 className="font-heading text-base font-bold text-navy-ink">{f.title}</h2>
                  <p className="mt-1 text-sm text-slate-600">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [&>*]:mb-4">
            {projectPhotos.map((p, i) => (
              <Reveal key={p.src} delay={(i % 4) * 0.05} className="break-inside-avoid">
                <figure className="group relative overflow-hidden rounded-xl border border-slate-200 bg-paper-soft">
                  <Image
                    src={asset(p.src)}
                    alt={p.alt}
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy-deep/95 to-transparent p-4 pt-10 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {p.alt}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Your project could be next"
        text="Tell us what you need built, fixed or powered — we'll make it happen."
      />
    </>
  );
}
