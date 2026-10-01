import type { Metadata } from "next";
import Image from "next/image";
import { asset } from "@/lib/asset";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { processSteps, services } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ServiceIcon } from "@/components/site/icon";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Services — Electrical, Solar, COC & More",
  description:
    "Certified electrical installations, solar backup power, single & three-phase COCs, cable reticulation, generators, refrigeration, air-conditioning and building maintenance in Cape Town.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        crumb="Services"
        eyebrow="What we do"
        title="Seven ways we keep you"
        highlight="powered"
        description="From a tripping DB board to a full solar installation — one accountable, certified team for the whole job."
      />

      {/* Service cards */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6">
          {services.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <Reveal key={s.slug} delay={0.05}>
                <article
                  id={s.slug}
                  className="card-hover scroll-mt-32 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_14px_44px_-28px_rgba(0,37,129,0.3)]"
                >
                  <div
                    className={`grid lg:grid-cols-[0.9fr_1.1fr] ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {s.image ? (
                      <div className="relative min-h-56 lg:min-h-full">
                        <Image
                          src={asset(s.image)}
                          alt={s.imageAlt ?? s.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 45vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-white/20 lg:to-white/90" />
                      </div>
                    ) : (
                      <div className="relative flex min-h-56 items-center justify-center overflow-hidden bg-paper-soft bg-grid lg:min-h-full">
                        <div
                          aria-hidden
                          className="absolute inset-0"
                          style={{
                            background:
                              "radial-gradient(420px 260px at 50% 40%, rgba(0,37,129,0.10), transparent 70%)",
                          }}
                        />
                        <span className="relative inline-flex h-24 w-24 items-center justify-center rounded-3xl border border-navy/15 bg-white text-navy shadow-[0_18px_50px_-20px_rgba(0,37,129,0.4)]">
                          <ServiceIcon name={s.icon} className="h-12 w-12" />
                        </span>
                      </div>
                    )}

                    <div className="p-7 sm:p-10">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-navy/15 bg-navy/5 text-navy lg:hidden">
                          <ServiceIcon name={s.icon} className="h-5.5 w-5.5" />
                        </span>
                        <h2 className="font-heading text-2xl font-extrabold text-navy-ink sm:text-3xl">
                          {s.title}
                        </h2>
                      </div>
                      <p className="mt-4 leading-relaxed text-slate-600">{s.description}</p>
                      <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                        {s.points.map((pt) => (
                          <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-600">
                            <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-leaf-deep" aria-hidden />
                            {pt}
                          </li>
                        ))}
                      </ul>
                      <Link
                        href="/contact/"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-paper-soft px-6 py-3 text-sm font-bold text-navy transition hover:bg-navy/5 hover:text-navy"
                      >
                        Enquire about this service
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-slate-200 bg-paper-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How it works"
            title="From first call to final sign-off"
            description="A simple, transparent process — so you always know what happens next."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.08}>
                <div className="card-hover relative h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="font-heading text-4xl font-extrabold text-navy/15">
                    {p.step}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-navy-ink">{p.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                  {i < processSteps.length - 1 && (
                    <ArrowRight
                      className="absolute -right-3.5 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-leaf lg:block"
                      aria-hidden
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pt-20">
        <CtaBanner
          title="Ready when you are"
          text="Send us a message, let us be your solution. We quote quickly and honestly."
        />
      </div>
    </>
  );
}
