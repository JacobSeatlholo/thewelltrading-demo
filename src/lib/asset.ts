/**
 * Prefixes a root-absolute asset path ("/images/...") with the configured
 * base path when deploying under a sub-directory (GitHub Pages project site,
 * e.g. username.github.io/<repo>/).
 *
 * This helper is required because Next.js does NOT apply `basePath` to
 * `next/image` string srcs when `images.unoptimized` is enabled (which is
 * mandatory for `output: "export"`), nor to metadata icon paths.
 *
 * Set NEXT_PUBLIC_BASE_PATH=/​<repo-name> at build time to activate.
 * Leave it unset for custom-domain deploys — asset() then returns the path
 * unchanged, so this is safe for production (thewelltrading.co.za).
 */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return path.startsWith("/") ? `${BASE_PATH}${path}` : path;
}
