/**
 * Central source of truth for The Well Trading website content.
 * Update contact details, services, and gallery here — every page reads from this file.
 */

export const site = {
  name: "The Well Trading",
  fullName: "The Well Electrical Trading",
  tagline: "Conveniently Perfect",
  domain: "thewelltrading.co.za",
  url: "https://thewelltrading.co.za",
  description:
    "The Well Electrical Trading is a 100% African female-owned electrical contractor in Kraaifontein, Cape Town, delivering certified electrical, solar backup power, COC, refrigeration and air-conditioning services across the Western Cape.",
  phoneDisplay: "073 142 9278",
  phoneInternational: "+27 73 142 9278",
  phoneHref: "tel:+27731429278",
  whatsappNumber: "27731429278",
  email: "admin@thewelltrading.co.za",
  address: {
    street: "10 Camberely Crescent",
    estate: "Buh Rein Estate",
    city: "Kraaifontein",
    postal: "7570",
    province: "Western Cape",
  },
  addressFull: "10 Camberely Crescent, Buh Rein Estate, Kraaifontein, 7570",
  mapEmbedUrl:
    "https://maps.google.com/maps?q=10%20Camberely%20Crescent%2C%20Buh%20Rein%20Estate%2C%20Kraaifontein%2C%207570&t=&z=14&ie=UTF8&iwloc=&output=embed",
  mapLinkUrl:
    "https://www.google.com/maps/search/?api=1&query=10+Camberely+Crescent%2C+Buh+Rein+Estate%2C+Kraaifontein%2C+7570",
  founder: "Mbali Zondo",
} as const;

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ||
      "Hi The Well Trading, I found you on your website and I'd like to enquire about your services."
  );
  return `https://wa.me/${site.whatsappNumber}?text=${text}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About Us" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Successful Projects" },
  { href: "/social-responsibility/", label: "Social Responsibility" },
  { href: "/contact/", label: "Contact" },
] as const;

export type Service = {
  slug: string;
  icon: string; // lucide icon key handled in a map
  title: string;
  short: string;
  description: string;
  points: string[];
  image?: string;
  imageAlt?: string;
};

export const services: Service[] = [
  {
    slug: "electrical",
    icon: "zap",
    title: "Electrical Installations & Repairs",
    short: "Certified electrical work for homes, businesses and industrial sites.",
    description:
      "From new installations and rewiring to fault-finding and urgent repairs, our qualified team delivers safe, SANS-compliant electrical work that stands up to South African conditions. Whether you are building, renovating or troubleshooting, we keep your power flowing reliably.",
    points: [
      "New electrical installations & rewiring",
      "Fault-finding, tripping & outage repairs",
      "Distribution boards & circuit breakers",
      "Lighting, plugs & switchgear",
      "Planned & emergency maintenance",
    ],
    image: "/images/projects/p15.jpg",
    imageAlt: "Certified electricity meter and distribution board installation",
  },
  {
    slug: "solar",
    icon: "sun",
    title: "Solar Backup Power",
    short: "Beat load-shedding with inverter and solar systems sized for your needs.",
    description:
      "We design, supply and install solar and inverter backup systems that keep your home or business running through load-shedding and outages. Every solution is sized to your actual consumption, installed to code, and optimised so you get the best return on your energy investment.",
    points: [
      "Free on-site assessment & load analysis",
      "Inverter & battery backup systems",
      "Hybrid grid-tied solar PV systems",
      "Panel, battery & inverter maintenance",
      "Energy-saving optimisation advice",
    ],
    image: "/images/projects/p16.jpg",
    imageAlt: "Technician installing solar panels on a residential roof",
  },
  {
    slug: "coc",
    icon: "clipboard-check",
    title: "Certificates of Compliance (COC)",
    short: "Single & three-phase COCs issued to SANS 10142 standards.",
    description:
      "Selling, insuring or adding to your installation? A valid Certificate of Compliance is legally required. As registered electricians we inspect, test and — where needed — repair your single-phase or three-phase installation, then issue your COC with full testing documentation.",
    points: [
      "Single-phase & three-phase COCs",
      "Pre-purchase & insurance inspections",
      "Earth leakage & continuity testing",
      "Repair of non-compliant installations",
      "Solar system compliance sign-off",
    ],
    image: "/images/projects/p11.jpg",
    imageAlt: "Distribution board with circuit breakers ready for compliance testing",
  },
  {
    slug: "cable-reticulation",
    icon: "cable",
    title: "Cable Reticulation",
    short: "Underground and surface cable networks, installed and maintained.",
    description:
      "We plan and install cable reticulation for residential estates, commercial premises and municipal applications — from trenching and ducting to terminations and testing — engineered for longevity and easy future maintenance.",
    points: [
      "Trenching, ducting & cable laying",
      "Low- & medium-voltage reticulation",
      "Street lighting & area lighting networks",
      "Cable jointing & terminations",
      "Testing, commissioning & as-built records",
    ],
  },
  {
    slug: "generators",
    icon: "power",
    title: "Generator Supply & Maintenance",
    short: "Standby generators kept ready for the moment you need them.",
    description:
      "Generators only earn their keep when they start on demand. We supply, install and service standby generator systems — including changeover switches, fuel systems and scheduled maintenance — so your operation never skips a beat.",
    points: [
      "Sizing & supply of standby generators",
      "Automatic & manual changeover installs",
      "Scheduled servicing & load testing",
      "Fuel system & battery care",
      "Repairs & troubleshooting",
    ],
    image: "/images/projects/p04.jpg",
    imageAlt: "Standby generator installation at a commercial property",
  },
  {
    slug: "refrigeration",
    icon: "wind",
    title: "Refrigeration & Air-Conditioning",
    short: "Installations, servicing and repairs that keep you cool and compliant.",
    description:
      "Our refrigeration and air-conditioning division installs, maintains and repairs split systems, commercial refrigeration and ventilation equipment. Regular servicing keeps equipment efficient, extends its lifespan and protects the goods and people that depend on it.",
    points: [
      "Split & central air-conditioning installs",
      "Commercial refrigeration & cold rooms",
      "Servicing, regassing & filter care",
      "Fault diagnosis & component repairs",
      "Energy-efficient system upgrades",
    ],
    image: "/images/services/hvac.jpg",
    imageAlt: "Technician performing condenser maintenance with gauges",
  },
  {
    slug: "building",
    icon: "hard-hat",
    title: "General Building & Road Maintenance",
    short: "Reliable teams for building upkeep and road maintenance works.",
    description:
      "Beyond electrical work, The Well Trading provides general building maintenance and road maintenance services for estates, businesses and government partners — coordinated under one accountable project manager, delivered to specification.",
    points: [
      "Building repairs & alterations",
      "Painting, plastering & waterproofing",
      "Road & pothole maintenance",
      "Kerbing, signage & road furniture",
      "Multi-trade project coordination",
    ],
    image: "/images/about-truck.jpg",
    imageAlt: "The Well Trading branded vehicle",
  },
];

export const values = [
  {
    icon: "award",
    title: "Quality Service",
    text: "Every job is finished to standard, tested and signed off — work we would put our own name on, because we do.",
  },
  {
    icon: "shield",
    title: "Professionalism",
    text: "Registered, insured and safety-driven. Punctual crews, clear quotes, tidy sites and honest communication.",
  },
  {
    icon: "gauge",
    title: "Efficiency",
    text: "We plan properly and arrive prepared, resolving electrical problems quickly without cutting corners.",
  },
  {
    icon: "lightbulb",
    title: "Innovative",
    text: "From solar backup to smart energy-saving solutions, we bring modern thinking to every project.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Get in Touch",
    text: "Call, WhatsApp or email us a description of your project or problem. Photos help us respond even faster.",
  },
  {
    step: "02",
    title: "Site Visit & Quote",
    text: "We assess the work on site, answer your questions and provide a clear, itemised quotation — no surprises.",
  },
  {
    step: "03",
    title: "Professional Execution",
    text: "Our qualified team completes the work safely and on schedule, keeping you updated throughout the job.",
  },
  {
    step: "04",
    title: "Test & Sign Off",
    text: "We test everything, issue compliance certificates where required, and leave your site clean and powered.",
  },
] as const;

export const projectPhotos = [
  { src: "/images/projects/p01.jpg", alt: "Electrical installation project", tall: true },
  { src: "/images/projects/p02.jpg", alt: "On-site electrical work" },
  { src: "/images/projects/p03.jpg", alt: "Solar and electrical project" },
  { src: "/images/projects/p04.jpg", alt: "Distribution board installation" },
  { src: "/images/projects/p05.jpg", alt: "Cable reticulation work", tall: true },
  { src: "/images/projects/p06.jpg", alt: "Field service and maintenance" },
  { src: "/images/projects/p07.jpg", alt: "Electrical maintenance project", tall: true },
  { src: "/images/projects/p08.jpg", alt: "Air-conditioning installation" },
  { src: "/images/projects/p09.jpg", alt: "Team on site" },
  { src: "/images/projects/p10.jpg", alt: "Electrical repair work" },
  { src: "/images/projects/p11.jpg", alt: "Commercial electrical project" },
  { src: "/images/projects/p12.jpg", alt: "Installation detail" },
  { src: "/images/projects/p13.jpg", alt: "Service call-out" },
  { src: "/images/projects/p14.jpg", alt: "Wiring project" },
  { src: "/images/projects/p15.jpg", alt: "Site works", tall: true },
  { src: "/images/projects/p16.jpg", alt: "Electrical compliance work" },
  { src: "/images/projects/p17.jpg", alt: "On-site inspection" },
  { src: "/images/projects/p18.jpg", alt: "Completed installation", tall: true },
] as const;
