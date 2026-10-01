import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/site/page-hero";
import { Reveal } from "@/components/site/reveal";
import { EnquiryForm } from "@/components/site/enquiry-form";

export const metadata: Metadata = {
  title: "Contact — Get a Free Quote",
  description: `Contact ${site.fullName} for a free quote. Call ${site.phoneInternational}, WhatsApp us or email ${site.email}. Based in Kraaifontein, serving Cape Town and the Western Cape.`,
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact Us"
        eyebrow="Get in touch"
        title="Let's talk about your"
        highlight="project"
        description="Call, WhatsApp, email or send the form below — we respond fast and quote honestly."
      />

      <section className="pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Contact cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <a
                href={site.phoneHref}
                className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-navy/15 bg-navy/5 text-navy">
                  <Phone className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 font-heading text-base font-bold text-navy-ink">Call Us</h2>
                <p className="mt-1.5 text-sm text-slate-600">{site.phoneInternational}</p>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#25D366]/30 bg-[#25D366]/10 text-[#128C4A]">
                  <MessageCircle className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 font-heading text-base font-bold text-navy-ink">WhatsApp</h2>
                <p className="mt-1.5 text-sm text-slate-600">{site.phoneDisplay}</p>
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <a
                href={`mailto:${site.email}`}
                className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-navy/15 bg-navy/5 text-navy">
                  <Mail className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 font-heading text-base font-bold text-navy-ink">Email</h2>
                <p className="mt-1.5 break-all text-sm text-slate-600">{site.email}</p>
              </a>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={site.mapLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-scarlet/20 bg-scarlet/5 text-scarlet">
                  <MapPin className="h-6 w-6" aria-hidden />
                </span>
                <h2 className="mt-5 font-heading text-base font-bold text-navy-ink">Visit Us</h2>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                  {site.addressFull}
                </p>
              </a>
            </Reveal>
          </div>

          {/* Form + map */}
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_14px_44px_-28px_rgba(0,37,129,0.3)] sm:p-10">
                <h2 className="font-heading text-2xl font-extrabold text-navy-ink sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Let us be your solution — fill in the form and choose how you&apos;d
                  like to send it.
                </p>
                <div className="mt-8">
                  <EnquiryForm />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
                <iframe
                  src={site.mapEmbedUrl}
                  title={`Map showing ${site.addressFull}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-72 w-full border-0 grayscale-[35%] contrast-[1.05]"
                  allowFullScreen
                />
                <div className="flex items-center justify-between gap-3 p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {site.address.street}, {site.address.estate}
                    <br />
                    {site.address.city}, {site.address.postal}
                  </p>
                  <a
                    href={site.mapLinkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-lg border border-navy/20 bg-paper-soft px-4 py-2 text-xs font-bold text-navy transition hover:bg-navy/5"
                  >
                    <Navigation className="h-3.5 w-3.5" aria-hidden />
                    Directions
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7">
                <h2 className="flex items-center gap-3 font-heading text-lg font-bold text-navy-ink">
                  <Clock className="h-5 w-5 text-navy" aria-hidden />
                  Service area
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Based in Kraaifontein and serving Cape Town and the wider Western
                  Cape — including Durbanville, Bellville, Brackenfell, Kuils River,
                  Paarl and Stellenbosch. Larger projects quoted nationwide.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
