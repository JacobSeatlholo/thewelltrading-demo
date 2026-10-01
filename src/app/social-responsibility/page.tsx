import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Home,
  Shirt,
  Trophy,
} from "lucide-react";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { Reveal } from "@/components/site/reveal";
import { CtaBanner } from "@/components/site/cta-banner";

export const metadata: Metadata = {
  title: "Social Responsibility — Skills That Change Lives",
  description:
    "The Well Trading's skills training programme trains people from previously disadvantaged communities to become qualified electricians, plus community initiatives across the Western Cape.",
  alternates: { canonical: "/social-responsibility/" },
};

const initiatives = [
  {
    icon: GraduationCap,
    title: "Electrical Skills Training Programme",
    text: "We take individuals who have never been in the electrical field and train them — from learning the tools, equipment and safety, to working under supervision until they qualify as electricians.",
  },
  {
    icon: HandHeart,
    title: "In-Service Training",
    text: "Students who show potential and interest are earmarked for assistance in becoming qualified electricians or technicians, and join our skills-transfer programme to gain real, required experience.",
  },
  {
    icon: Trophy,
    title: "Community Sports Days",
    text: "Summer and winter sports days that bring communities together, build confidence and give young people a positive platform.",
  },
  {
    icon: Shirt,
    title: "School Uniforms for Orphans",
    text: "We support orphaned learners with school uniforms — removing one more barrier between them and their education.",
  },
  {
    icon: Home,
    title: "Housing for Elderly Caregivers",
    text: "We aim to assist elderly caregivers who are themselves destitute, yet still looking after children of deceased relatives or neighbours.",
  },
  {
    icon: HeartHandshake,
    title: "Child-Headed Homes",
    text: "We are working towards empowering child-headed homes — helping young caregivers further their studies until they come of age.",
  },
] as const;

export default function SocialResponsibilityPage() {
  return (
    <>
      <PageHero
        crumb="Social Responsibility"
        eyebrow="Giving back"
        title="Powering people,"
        highlight="not just places"
        description="For us, social responsibility is not a government box to tick — it is a very real passion to help and empower the less fortunate."
      />

      {/* Story */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Reveal>
            <div className="rounded-3xl border border-navy/15 bg-white p-8 shadow-[0_14px_44px_-28px_rgba(0,37,129,0.3)] sm:p-12">
              <p className="font-heading text-xl font-bold leading-relaxed text-navy-ink sm:text-2xl">
                &ldquo;Skills development in electrical engineering has made an impact
                and changed people&apos;s lives.&rdquo;
              </p>
              <p className="mt-6 leading-relaxed text-slate-600">
                The desire to be involved with the underprivileged was not just a
                government calling being adhered to. The Well Electrical has a very
                real passion to help and empower the less fortunate — and that
                conviction resulted in the founding of our{" "}
                <span className="font-semibold text-leaf-deep">
                  skills training programme
                </span>
                .
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                We take individuals who have never been in the electrical field and
                train them from the ground up: learning the tools, the equipment and
                the safety, right through to doing the job under supervision until
                they are qualified electricians. It is a platform where we give back
                to every community we come into contact with — and it works.
              </p>
              <p className="mt-4 leading-relaxed text-slate-600">
                Beyond training, we are growing our involvement in community
                programmes — from sports days and school uniforms to housing support
                and empowering child-headed homes to further their studies.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Initiatives */}
      <section className="border-y border-slate-200 bg-paper-soft py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our commitments"
            title="Where we're making a difference"
            description="Current and planned initiatives — practical support that changes real lives."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {initiatives.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="card-hover group h-full rounded-2xl border border-slate-200 bg-white p-7">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-leaf/25 bg-leaf/10 text-leaf-deep transition group-hover:shadow-[0_0_24px_-6px_rgba(138,187,42,0.6)]">
                    <item.icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-bold text-navy-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-2 rounded-xl bg-leaf px-8 py-4 font-bold text-white shadow-[0_10px_30px_-12px_rgba(138,187,42,0.8)] transition hover:bg-leaf-deep"
              >
                Partner With Us
                <ArrowRight className="h-4.5 w-4.5" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBanner
        title="Join us in powering communities"
        text="Whether you need a service or want to collaborate on community programmes — we'd love to hear from you."
      />
    </>
  );
}
