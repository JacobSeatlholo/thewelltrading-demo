import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { site } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.fullName} | Electrician, Solar & COC — Cape Town`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "electrician Cape Town",
    "solar backup power Cape Town",
    "COC certificate Kraaifontein",
    "electrical contractor Western Cape",
    "load shedding solutions",
    "100% female owned electrical company",
    "The Well Trading",
  ],
  authors: [{ name: site.fullName }],
  icons: { icon: "/images/icon-192.png", apple: "/images/icon-192.png" },
  openGraph: {
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_ZA",
    type: "website",
    images: [{ url: "/images/services/solar.jpg", width: 1600, height: 1065 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} flex min-h-screen flex-col bg-ink font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-volt focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
