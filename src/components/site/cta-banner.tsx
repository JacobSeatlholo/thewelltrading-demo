import Link from "next/link";
import { MessageCircle, PhoneCall } from "lucide-react";
import { site, whatsappLink } from "@/lib/site";
import { Reveal } from "@/components/site/reveal";

type CtaBannerProps = {
  title?: string;
  text?: string;
};

export function CtaBanner({
  title = "Looking for a solution?",
  text = "Send us a message — let us be your solution. Free quotes, honest advice and certified workmanship.",
}: CtaBannerProps) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <Reveal>
        <div className="glow-volt relative overflow-hidden rounded-3xl border border-volt/25 bg-gradient-to-br from-[#0c1a30] via-[#0a1225] to-[#0c1a30] px-6 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 bg-grid"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2xl -translate-x-1/2 rounded-full bg-volt/20 blur-3xl"
          />
          <div className="relative">
            <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
              {title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-300">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 px-7 py-3.5 font-bold text-ink transition hover:brightness-110 sm:w-auto"
              >
                <PhoneCall className="h-4.5 w-4.5" aria-hidden />
                Call {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#25D366]/50 bg-[#25D366]/10 px-7 py-3.5 font-bold text-[#4be389] transition hover:bg-[#25D366]/20 sm:w-auto"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden />
                WhatsApp Us
              </a>
              <Link
                href="/contact/"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 font-bold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
