import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  MapPin,
  MessageCircle,
  PhoneCall,
  Quote,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { projectPhotos, services, site, values, whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { ServiceIcon } from "@/components/site/icon";
import { CtaBanner } from "@/components/site/cta-banner";

export default function HomePage() {
  const featured = services.filter((s) => s.image).slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-grid">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(760px 420px at 12% -10%, rgba(56,189,248,0.18), transparent 62%), radial-gradient(620px 380px at 88% 30%, rgba(251,191,36,0.1), transparent 60%)",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 pt-36 sm:px-6 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-amber-glow/30 bg-amber-glow/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-glow">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              100% African Female Owned · Est. Cape Town
            </p>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              Welcome to <br className="hidden sm:block" />
              <span className="text-gradient-volt animate-volt-flicker">The Well</span>{" "}
              Electrical Trading
            </h1>
            <p className="mt-3 font-heading text-lg font-bold uppercase tracking-[0.3em] text-volt-soft sm:text-xl">
              “{site.tagline}”
            </p>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Certified electricians powering homes and businesses across the Western
              Cape — from solar backup power and COCs to full electrical installations,
              refrigeration and building maintenance. Done safely, done properly, done
              on time.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact/"
                className="glow-amber inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 font-bold text-ink transition hover:brightness-110"
              >
                Get a Free Quote
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
              <Link
                href="/services/"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-volt/40 bg-volt/10 px-8 py-4 font-bold text-volt-soft transition hover:bg-volt/20"
              >
                Explore Our Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4.5 w-4.5 text-volt" aria-hidden />
                Registered &amp; safety-driven
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="h-4.5 w-4.5 text-volt" aria-hidden />
                COC certified sign-off
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4.5 w-4.5 text-volt" aria-hidden />
                Kraaifontein, Cape Town
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative hidden lg:block">
            <div className="relative mx-auto max-w-md">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-volt/30 via-transparent to-amber-glow/25 blur-2xl"
              />
              <div className="glow-volt relative overflow-hidden rounded-[2rem] border border-volt/30">
                <Image
                  src="/images/hero-install.jpg"
                  alt="Solar inverter, battery backup and distribution board installed by The Well Trading"
                  width={1332}
                  height={1776}
                  className="h-[560px] w-full object-cover"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent p-6 pt-16">
                  <p className="font-heading text-lg font-bold text-white">
                    Certified workmanship, every time
                  </p>
                  <p className="text-sm text-slate-300">
                    Electrical · Solar · COC · Refrigeration · Building
                  </p>
                </div>
              </div>
              {/* floating badge */}
              <div className="absolute -left-10 top-8 rounded-2xl border border-white/10 bg-ink/85 px-5 py-4 shadow-2xl backdrop-blur">
                <p className="font-heading text-2xl font-extrabold text-amber-glow">100%</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  African female
                  <br />
                  owned company
                </p>
              </div>
              <div className="absolute -right-6 bottom-24 rounded-2xl border border-white/10 bg-ink/85 px-5 py-4 shadow-2xl backdrop-blur">
                <p className="font-heading text-2xl font-extrabold text-volt">COC</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Single &amp; three
                  <br />
                  phase certified
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= VALUES ================= */}
      <section className="border-y border-white/5 bg-ink-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What we stand for"
            title="Built on four energising values"
            description="These principles drive every quote, every installation and every relationship we build."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-hover group h-full rounded-2xl border border-white/8 bg-panel p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-volt/25 bg-volt/10 text-volt transition group-hover:shadow-[0_0_24px_-4px_rgba(56,189,248,0.7)]">
                    <ServiceIcon name={v.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-white">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our services"
            title="Complete electrical & energy solutions"
            description="One trusted team for everything electrical — installations, compliance, backup power and beyond."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {featured.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.1}>
                <Link
                  href={`/services/#${s.slug}`}
                  className="card-hover group block h-full overflow-hidden rounded-2xl border border-white/8 bg-panel"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={s.image!}
                      alt={s.imageAlt ?? s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/20 to-transparent" />
                    <span className="absolute bottom-3 left-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-volt/30 bg-ink/80 text-volt backdrop-blur">
                      <ServiceIcon name={s.icon} className="h-5.5 w-5.5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-lg font-bold text-white group-hover:text-volt-soft">
                      {s.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">{s.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-volt">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* more services strip */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/8 bg-panel px-6 py-5 sm:flex-row">
              <p className="text-sm text-slate-400">
                <span className="font-semibold text-white">Also:</span>{" "}
                {services
                  .slice(3)
                  .map((s) =>
                    s.title
                      .replace(" Supply & Maintenance", "s")
                      .replace("Refrigeration & Air-Conditioning", "Refrigeration & A/C")
                      .replace("General Building & Road Maintenance", "Building & Road Maintenance")
                  )
                  .join(" · ")}
              </p>
              <Link
                href="/services/"
                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-volt/40 bg-volt/10 px-5 py-2.5 text-sm font-bold text-volt-soft transition hover:bg-volt/20"
              >
                View all services
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= ABOUT TEASER ================= */}
      <section className="border-y border-white/5 bg-ink-soft py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div
              aria-hidden
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-tr from-amber-glow/20 via-transparent to-volt/25 blur-2xl"
            />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10">
              <Image
                src="/images/about-truck.jpg"
                alt="The Well Trading branded service vehicle"
                width={1536}
                height={864}
                className="h-auto w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-ink/85 px-4 py-2.5 backdrop-blur">
                <Quote className="h-4 w-4 text-amber-glow" aria-hidden />
                <span className="text-xs font-semibold text-white">
                  Founded &amp; led by {site.founder}
                </span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="order-1 lg:order-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-volt/25 bg-volt/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-volt-soft">
              <Sparkles className="h-3.5 w-3.5 text-amber-glow" aria-hidden />
              About us
            </p>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Leadership that powers <span className="text-gradient-volt">people forward</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-400">
              Founder {site.founder} has a deep-rooted dedication to service
              excellence — the driving force behind the company&apos;s growth. Her
              leadership inspires the team to constantly grow and develop themselves,
              which is exactly what keeps our service reliable and our quality
              consistent.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-400">
              As a 100% African female-owned company, The Well Trading is proof that
              transformation and world-class workmanship go hand in hand — on every
              site, for every client, without exception.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 font-bold text-ink transition hover:brightness-110"
              >
                Read Our Story
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle className="h-4.5 w-4.5 text-[#4be389]" aria-hidden />
                Chat to the Team
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PROJECTS PREVIEW ================= */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Successful projects"
              title="Proof in every project"
              description="Real work, real sites, real results — a snapshot of recent jobs delivered across the Western Cape."
            />
            <Reveal delay={0.1} className="shrink-0">
              <Link
                href="/projects/"
                className="inline-flex items-center gap-2 rounded-xl border border-volt/40 bg-volt/10 px-6 py-3 text-sm font-bold text-volt-soft transition hover:bg-volt/20"
              >
                View full gallery
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {projectPhotos.slice(0, 6).map((p, i) => (
              <Reveal key={p.src} delay={i * 0.06}>
                <div className="group relative aspect-4/3 overflow-hidden rounded-xl border border-white/8">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <CtaBanner />
    </>
  );
}
