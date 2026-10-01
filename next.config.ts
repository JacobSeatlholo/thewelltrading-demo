import type { NextConfig } from "next";

/**
 * Configuration for The Well Trading website.
 *
 * - `output: "export"` produces a fully static site in `out/` for GitHub Pages.
 * - `NEXT_PUBLIC_BASE_PATH` — set to "/<repo-name>" ONLY when deploying to a
 *   GitHub *project* page (username.github.io/<repo>) WITHOUT a custom domain.
 *   Leave empty when using the custom domain (thewelltrading.co.za).
 * - `NEXT_DIST_DIR` — optional override so a verification build can run
 *   alongside the dev server without clobbering `.next`.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: true,
  },
  distDir: process.env.NEXT_DIST_DIR || ".next",
  reactStrictMode: false,
};

export default nextConfig;
