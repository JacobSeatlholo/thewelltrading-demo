# 🚀 Deploying The Well Trading Website

This site is a **Next.js 16 static export**. `next build` produces plain HTML/CSS/JS
in `out/`, and GitHub Actions publishes it to **GitHub Pages** automatically on
every push to `main`.

```
Local project ──ssh──▶ GitHub repo ──Actions──▶ GitHub Pages (CDN)
                                              ▼
                              https://thewelltrading.co.za
```

---

## 1. One-time setup — SSH push + first deploy

> **Prerequisite:** the repository must exist on GitHub
> (create it at <https://github.com/new> — name it e.g. `website`, keep it **empty**, no README).
> Skip this if you have the `gh` CLI — the script can create the repo for you.

Run the setup script from the project root:

```bash
bash scripts/github-ssh-setup.sh <your-github-username>/<repo>
# example:
bash scripts/github-ssh-setup.sh thewelltrading/website
```

The script will:

1. Generate an SSH key (`~/.ssh/id_ed25519`) if you don't have one
2. Print the public key → paste it at <https://github.com/settings/ssh/new>
3. Test `ssh -T git@github.com`
4. Commit everything and push to `git@github.com:<user>/<repo>.git` via **SSH**
5. Trigger the **Deploy to GitHub Pages** workflow

Then enable Pages (one time only):

1. Open `https://github.com/<user>/<repo>/settings/pages`
2. **Build and deployment → Source** → select **GitHub Actions**
3. Re-run the workflow (or push any commit) → your site goes live at
   `https://<user>.github.io/<repo>/`

**That's it.** Every future `git push` to `main` redeploys the site automatically.

---

## 2. Using the custom domain (thewelltrading.co.za) — recommended

The repo already contains `public/CNAME` → keeps your SEO and brand address.

**On GitHub:** `Settings → Pages → Custom domain` → enter `thewelltrading.co.za`
→ wait for the DNS check → enable **Enforce HTTPS**.

**At your DNS provider (where thewelltrading.co.za is managed), add:**

| Type  | Name | Value                        |
| ----- | ---- | ---------------------------- |
| `A`    | `@`  | `185.199.108.153`            |
| `A`    | `@`  | `185.199.109.153`            |
| `A`    | `@`  | `185.199.110.153`            |
| `A`    | `@`  | `185.199.111.153`            |
| `CNAME`| `www`| `<user>.github.io.`          |

DNS can take up to 24 h to propagate. Once GitHub verifies it, the site is served
at **https://thewelltrading.co.za**.

> **Current demo setup** (`<user>.github.io/<repo>/`, no custom domain yet):
> `public/CNAME` is removed and the `NEXT_PUBLIC_BASE_PATH` env block in
> `.github/workflows/deploy.yml` is **enabled**, so assets resolve under
> `/<repo-name>`. When you're ready for production on thewelltrading.co.za:
>
> 1. Re-add `public/CNAME` containing `thewelltrading.co.za`
> 2. Remove the `NEXT_PUBLIC_BASE_PATH` env block from the workflow
> 3. Add the custom domain in **Pages settings** and point the DNS (table above)

---

## 3. Everyday workflow

```bash
# make your edits, then:
git add -A
git commit -m "Update content"
git push                 # → auto-deploys in ~1–2 minutes
```

- Watch deploys in the **Actions** tab of the repo.
- Preview locally before pushing: `bun run build && bun run start` → http://localhost:3000

---

## 4. Where things live

| What                        | Where                                  |
| --------------------------- | -------------------------------------- |
| All text/content            | `src/lib/site.ts` (single source)      |
| Pages                       | `src/app/page.tsx` + `src/app/*/page.tsx` |
| Components (nav, footer…)   | `src/components/site/`                 |
| Design tokens / colors      | `src/app/globals.css`                  |
| Images                      | `public/images/`                       |
| Deploy workflow             | `.github/workflows/deploy.yml`         |
| SSH deploy helper           | `scripts/github-ssh-setup.sh`          |

---

## 5. Troubleshooting

| Problem                                  | Fix                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------- |
| `Permission denied (publickey)` on push  | Key not added / wrong key. Re-run step 1–3 of the setup script.     |
| Actions workflow fails on install        | Delete `bun.lock`, commit, push (regenerates lockfile).             |
| Site 404s on GitHub Pages                | Check `Settings → Pages → Source` is **GitHub Actions**, not branch.|
| CSS/JS 404s under `/repo-name` path      | Set `NEXT_PUBLIC_BASE_PATH: /<repo>` in the workflow (see §2 note). |
| Custom domain DNS check pending          | Wait for propagation, re-save the Pages domain.                     |
