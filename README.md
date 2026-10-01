# The Well Trading — Website v2

The upgraded website for **The Well Electrical Trading** — a 100% African
female-owned electrical contractor based in Kraaifontein, Cape Town.

> Live: [https://thewelltrading.co.za](https://thewelltrading.co.za)

Built with **Next.js 16 + Tailwind CSS 4**, exported as a fully static site and
deployed to **GitHub Pages** via GitHub Actions.

## ✨ What's in the upgrade

| Before (WordPress)                   | Now (Next.js static)                          |
| ------------------------------------ | --------------------------------------------- |
| Heavy WordPress + Elementor stack    | Zero-database static export, CDN-fast         |
| Services page broken (404)           | Dedicated Services page, 7 services detailed  |
| Generic template look                | Bespoke "dark electric" brand design          |
| No WhatsApp/contact shortcuts        | Sticky WhatsApp button + click-to-call        |
| Weak SEO                             | Per-page metadata, sitemap.xml, robots.txt    |
| Manual updates via WP admin          | Edit `src/lib/site.ts`, push, auto-deploy     |

## 🗂 Pages

- `/` — Home (hero, values, services, founder, projects, CTA)
- `/about/` — Founder story, mission & vision
- `/services/` — Electrical, Solar Backup, COC, Cable Reticulation, Generators, Refrigeration & A/C, Building & Road Maintenance
- `/projects/` — Successful projects gallery
- `/social-responsibility/` — Skills training programme & community initiatives
- `/contact/` — Contact cards, enquiry form (email/WhatsApp), map

## 🛠 Local development

```bash
bun install     # install dependencies
bun run dev     # dev server on http://localhost:3000
bun run lint    # code quality check
bun run build   # static export → out/
bun run start   # preview the exported site
```

## 🚀 Deployment (GitHub Pages via SSH)

See **[DEPLOY.md](./DEPLOY.md)** for the complete step-by-step guide, or just run:

```bash
bash scripts/github-ssh-setup.sh <your-github-username>/<repo>
```

## 📝 Editing content

Nearly all text, contact details, services and gallery items live in
**`src/lib/site.ts`** — edit once, reflected everywhere. Images live in
`public/images/`.
