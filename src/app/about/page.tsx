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
            <p className="inline-flex items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-volt-soft">
              <Quote className="h-3.5 w-3.5 text-amber-glow" aria-hidden />
              Our founder
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              {site.founder}&apos;s standard:{" "}
              <span className="text-gradient-volt">service excellence</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-400">
              The founder {site.founder} has a deep-rooted dedication to service
              excellence and is the driving force behind the company&apos;s growth.
              Much of that growth can be attributed to her leadership, which inspires
              the team to constantly grow and develop themselves — ensuring the
              reliable, quality service our clients depend on.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              Under her guidance, The Well Trading has grown from a single spark into
              a multi-discipline contractor covering electrical, solar, refrigeration
              and building services — while staying true to the values the company
              was founded on: quality, professionalism, efficiency and innovation.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-xl border border-amber-glow/30 bg-amber-glow/10 px-5 py-3 font-heading text-sm font-bold text-amber-glow">
              <Users className="h-4.5 w-4.5" aria-hidden />
              This is a 100% African female company.
            </p>
          </Reveal>
          <Reveal delay={0.12} className="relative">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-volt/25 via-transparent to-amber-glow/20 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
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
      <section className="border-y border-white/5 bg-ink-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Direction"
            title="Our mission & vision"
            description="Clear purpose, measurable standards — and a long-term commitment to South Africa's people."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="card-hover h-full rounded-2xl border border-volt/20 bg-panel p-8">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-volt/25 bg-volt/10 p-3 text-volt">
                  <Target className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                  Company Mission
                </h3>
                <p className="mt-4 leading-relaxed text-slate-400">
                  To deliver and implement reliable, superior service in all spheres
                  of electrical, cable reticulation, generator, refrigeration and
                  air-conditioning works, as well as general building and road
                  maintenance.
                </p>
                <p className="mt-3 leading-relaxed text-slate-400">
                  While doing so, we ensure that energy-saving solutions are utilised
                  wherever and whenever possible — for our clients&apos; budgets and
                  for the planet.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="card-hover h-full rounded-2xl border border-amber-glow/20 bg-panel p-8">
                <span className="inline-flex h-13 w-13 items-center justify-center rounded-2xl border border-amber-glow/25 bg-amber-glow/10 p-3 text-amber-glow">
                  <Eye className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-bold text-white">
                  Company Vision
                </h3>
                <p className="mt-4 leading-relaxed text-slate-400">
                  Success and growth in collaboration with government, stakeholders
                  and strategic partners — leading to increased contributions towards
                  the betterment of rural and urban communities.
                </p>
                <p className="mt-3 leading-relaxed text-slate-400">
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
                <div className="card-hover group h-full rounded-2xl border border-white/8 bg-panel p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-volt/25 bg-volt/10 text-volt">
                    <ServiceIcon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                href="/services/"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 font-bold text-ink transition hover:brightness-110"
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
