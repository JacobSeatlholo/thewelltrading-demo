"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, Phone, X, Zap } from "lucide-react";
import { navLinks, site } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href.replace(/\/$/, ""));

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-border bg-ink/90 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* top contact strip */}
      <div
        className={`hidden overflow-hidden border-b border-white/5 text-xs text-slate-400 transition-all duration-300 md:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <p className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-amber-glow" aria-hidden />
            100% African female owned · Serving Cape Town &amp; the Western Cape
          </p>
          <div className="flex items-center gap-5">
            <a className="transition hover:text-volt-soft" href={site.phoneHref}>
              {site.phoneInternational}
            </a>
            <a className="transition hover:text-volt-soft" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Main navigation"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="The Well Trading — home">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_0_24px_-6px_rgba(56,189,248,0.6)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="The Well Trading logo"
              width={44}
              height={44}
              className="h-10 w-10 object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-extrabold tracking-wide text-white sm:text-lg">
              THE WELL <span className="text-volt">TRADING</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Electrical · {site.tagline}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 5).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`relative rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? "text-volt"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-volt to-amber-glow" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-lg border border-volt/40 bg-volt/10 px-3.5 py-2 text-sm font-semibold text-volt-soft transition hover:bg-volt/20 xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="hidden rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-sm font-bold text-ink shadow-[0_8px_30px_-10px_rgba(251,191,36,0.7)] transition hover:brightness-110 sm:block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-white/5" : "max-h-0"
        }`}
      >
        <ul className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isActive(link.href)
                    ? "bg-volt/10 text-volt"
                    : "text-slate-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.label}
                <Zap
                  className={`h-4 w-4 ${isActive(link.href) ? "text-amber-glow" : "text-slate-600"}`}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact/"
              className="mt-2 flex items-center justify-center rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-3 text-sm font-bold text-ink"
            >
              Get a Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
