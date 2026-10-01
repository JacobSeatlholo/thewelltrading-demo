import Link from "next/link";
import Image from "next/image";
import { asset } from "@/lib/asset";
import { Mail, MapPin, Phone, Zap } from "lucide-react";
import { navLinks, services, site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-navy-deep text-white">
      {/* brand leaf accent line */}
      <div aria-hidden className="h-1 w-full bg-gradient-to-r from-leaf via-[#a8d94e] to-leaf" />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white">
                <Image
                  src={asset("/images/logo.png")}
                  alt="The Well Trading logo"
                  width={48}
                  height={48}
                  className="h-11 w-11 object-contain"
                />
              </span>
              <div className="leading-tight">
                <p className="font-heading text-lg font-extrabold text-white">
                  THE WELL <span className="text-leaf">TRADING</span>
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60">
                  {site.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              A 100% African female-owned electrical contractor delivering certified
              electrical, solar, refrigeration and building services across Cape Town
              and the Western Cape.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-leaf/40 bg-leaf/15 px-3 py-1.5 text-xs font-semibold text-[#d9efae]">
              <Zap className="h-3.5 w-3.5" aria-hidden />
              100% African Female Owned
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer quick links">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-white/70 transition hover:text-leaf"
                  >
                    <span className="h-px w-3 bg-leaf/60 transition-all group-hover:w-5 group-hover:bg-leaf" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
              Our Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/#${s.slug}`}
                    className="group inline-flex items-center gap-2 text-white/70 transition hover:text-leaf"
                  >
                    <span className="h-px w-3 bg-leaf/60 transition-all group-hover:w-5 group-hover:bg-leaf" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-[0.2em] text-white">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                <a href={site.phoneHref} className="transition hover:text-leaf">
                  Tel: {site.phoneInternational}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                <a href={`mailto:${site.email}`} className="transition hover:text-leaf">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden />
                <span>
                  {site.address.street}, {site.address.estate},
                  <br />
                  {site.address.city}, {site.address.postal}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {year} {site.fullName}. All rights reserved.
          </p>
          <p>
            Proudly South African · Kraaifontein, {site.address.province}
          </p>
        </div>
      </div>
    </footer>
  );
}
