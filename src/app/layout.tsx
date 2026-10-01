import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { asset } from "@/lib/asset";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";
import { site, services } from "@/lib/site";

/**
 * schema.org structured data (JSON-LD) — makes the business machine-readable
 * for Google rich results and AI assistants.
 */
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${site.url}/#business`,
  name: site.fullName,
  alternateName: site.name,
  slogan: site.tagline,
  description: site.description,
  url: site.url,
  telephone: site.phoneInternational,
  email: site.email,
  image: `${site.url}/images/logo.png`,
  logo: `${site.url}/images/logo.png`,
  founder: { "@type": "Person", name: site.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: "10 Camberely Crescent, Buh Rein Estate",
    addressLocality: site.address.city,
    addressRegion: site.address.province,
    postalCode: site.address.postal,
    addressCountry: "ZA",
  },
  areaServed: { "@type": "City", name: "Cape Town" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Electrical & Energy Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        url: `${site.url}/services/#${s.slug}`,
      },
    })),
  },
};

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
  icons: { icon: asset("/images/icon-192.png"), apple: asset("/images/icon-192.png") },
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
    <html lang="en-ZA" data-scroll-behavior="smooth">
      <body
        className={`${montserrat.variable} ${inter.variable} flex min-h-screen flex-col bg-white font-sans text-navy-ink`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:font-bold focus:text-white"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
