import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Quote, Target, Users } from "lucide-react";
import { site, values } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { ServiceIcon } from "@/components/site/icon";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "About Us — 100% African Female Owned",
  description: `Meet ${site.founder} and the team behind ${site.fullName}, a 100% African female-owned electrical contractor in Cape Town. Learn about our mission and vision.`,
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="Who we are"
        title="A well of skill, led with"
        highlight="purpose"
        description="The Well Electrical Trading is a 100% African female-owned company delivering service excellence across Cape Town and the Western Cape."
      />

      {/* Founder story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-navy/15 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-navy shadow-[0_2px_10px_-6px_rgba(0,37,129,0.35)]">
              <Quote className="h-3.5 w-3.5 text-scarlet" aria-hidden />
              Our founder
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-navy-ink sm:text-4xl">
              {site.founder}&apos;s standard:{" "}
              <span className="text-gradient-brand">service excellence</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              The founder {site.founder} has a deep-rooted dedication to service
              excellence and is the driving force behind the company&apos;s growth.
              Much of that growth can be attributed to her leadership, which inspires
              the team to constantly grow and develop themselves — ensuring the
              reliable, quality service our clients depend on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Under her guidance, The Well Trading has grown from a single spark into
              a multi-discipline contractor covering electrical, solar, refrigeration
              and building services — while staying true to the values the company
              was founded on: quality, professionalism, efficiency and innovation.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-xl border border-leaf/30 bg-leaf/10 px-5 py-3 font-heading text-sm font-bold text-leaf-deep">
              <Users className="h-4.5 w-4.5" aria-hidden />
              This is a 100% African female company.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-navy/20 via-transparent to-leaf/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_20px_60px_-30px_rgba(0,37,129,0.35)]">
              <Image
                src="/images/about-truck.jpg"
                alt="The Well Trading branded service vehicle on site"
                width={1536}
                height={864}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="border-y border-slate-200 bg-paper-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Direction"
            title="Our mission & vision"
            description="Clear purpose, measurable standards — and a long-term commitment to South Africa's people."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-hover h-full rounded-2xl border border-navy/15 bg-white p-8 shadow-[0_14px_40px_-24px_rgba(0,37,129,0.3)]">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-navy/15 bg-navy/5 p-3 text-navy">
                  <Target className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-navy-ink">
                  Company Mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  To deliver and implement reliable, superior service in all spheres
                  of electrical, cable reticulation, generator, refrigeration and
                  air-conditioning works, as well as general building and road
                  maintenance.
                </p>
                <p className="mt-3 leading-relaxed text-slate-600">
                  While doing so, we ensure that energy-saving solutions are utilised
                  wherever and whenever possible — for our clients&apos; budgets and
                  for the planet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card-hover h-full rounded-2xl border border-leaf/25 bg-white p-8 shadow-[0_14px_40px_-24px_rgba(138,187,42,0.4)]">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-leaf/25 bg-leaf/10 p-3 text-leaf-deep">
                  <Eye className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-navy-ink">
                  Company Vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-600">
                  Success and growth in collaboration with government, stakeholders
                  and strategic partners — leading to increased contributions towards
                  the betterment of rural and urban communities.
                </p>
                <p className="mt-3 leading-relaxed text-slate-600">
                  By providing vital and essential services, we improve and sustain
                  the quality of life for the people of South Africa.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="How we work"
            title="Values you'll notice on site"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-hover group h-full rounded-2xl border border-slate-200 bg-white p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-scarlet/20 bg-scarlet/5 text-scarlet">
                    <ServiceIcon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy-ink">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-xl bg-leaf px-8 py-4 font-bold text-white shadow-[0_10px_30px_-12px_rgba(138,187,42,0.8)] transition hover:bg-leaf-deep"
              >
                See What We Do
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
