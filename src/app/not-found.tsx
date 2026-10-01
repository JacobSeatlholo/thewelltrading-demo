import Link from "next/link";
import { Home, PhoneCall, Zap } from "lucide-react";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-paper-soft bg-grid px-4 pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(640px 320px at 50% 10%, rgba(0,37,129,0.08), transparent 65%)",
        }}
      />
      <div className="relative text-center">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-navy/15 bg-white text-navy shadow-[0_18px_50px_-20px_rgba(0,37,129,0.4)]">
          <Zap className="h-8 w-8" aria-hidden />
        </span>
        <p className="text-gradient-brand mt-6 font-heading text-7xl font-extrabold">404</p>
        <h1 className="mt-3 font-heading text-2xl font-bold text-navy-ink">
          This circuit has no power
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-600">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let
          us reconnect you — or call us on {site.phoneDisplay}.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-leaf px-7 py-3.5 font-bold text-white shadow-[0_10px_30px_-12px_rgba(138,187,42,0.8)] transition hover:bg-leaf-deep"
          >
            <Home className="h-4.5 w-4.5" aria-hidden />
            Back to Home
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-xl border border-navy/20 bg-white px-7 py-3.5 font-bold text-navy transition hover:bg-navy/5"
          >
            <PhoneCall className="h-4.5 w-4.5" aria-hidden />
            Call {site.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
