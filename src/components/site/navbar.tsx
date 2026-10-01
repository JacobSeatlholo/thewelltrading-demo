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
          ? "border-b border-slate-200 bg-white/95 shadow-[0_8px_30px_-18px_rgba(0,37,129,0.35)] backdrop-blur-xl"
          : "border-b border-transparent bg-white"
      }`}
    >
      {/* top contact strip — brand navy, like the original site */}
      <div
        className={`hidden overflow-hidden bg-navy text-white transition-all duration-300 md:block ${
          scrolled ? "max-h-0" : "max-h-10"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs">
          <p className="flex items-center gap-2 text-white/85">
            <Zap className="h-3.5 w-3.5 text-leaf" aria-hidden />
            100% African female owned · Serving Cape Town &amp; the Western Cape
          </p>
          <div className="flex items-center gap-5">
            <a
              className="font-semibold text-white/90 transition hover:text-leaf"
              href={site.phoneHref}
            >
              {site.phoneInternational}
            </a>
            <a
              className="font-semibold text-white/90 transition hover:text-leaf"
              href={`mailto:${site.email}`}
            >
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
          <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-white transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="The Well Trading logo"
              width={48}
              height={48}
              className="h-11 w-11 object-contain"
              priority
            />
          </span>
          <span className="leading-tight">
            <span className="block font-heading text-base font-extrabold tracking-wide text-navy sm:text-lg">
              THE WELL <span className="text-leaf">TRADING</span>
            </span>
            <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">
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
                className={`relative rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive(link.href)
                    ? "text-navy"
                    : "text-slate-600 hover:bg-navy/5 hover:text-navy"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-leaf" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-paper-soft px-3.5 py-2 text-sm font-bold text-navy transition hover:border-navy/30 hover:bg-navy/5 xl:flex"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {site.phoneDisplay}
          </a>
          <Link
            href="/contact/"
            className="hidden rounded-lg bg-leaf px-4 py-2 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(138,187,42,0.8)] transition hover:bg-leaf-deep sm:block"
          >
            Get a Quote
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-navy transition hover:bg-paper-soft lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden bg-white transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[480px] border-t border-slate-200" : "max-h-0"
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
                    ? "bg-navy/5 text-navy"
                    : "text-slate-600 hover:bg-paper-soft hover:text-navy"
                }`}
              >
                {link.label}
                <Zap
                  className={`h-4 w-4 ${isActive(link.href) ? "text-leaf" : "text-slate-300"}`}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact/"
              className="mt-2 flex items-center justify-center rounded-lg bg-leaf px-4 py-3 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(138,187,42,0.8)]"
            >
              Get a Free Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
