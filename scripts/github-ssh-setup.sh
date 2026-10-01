#!/usr/bin/env bash
#
# github-ssh-setup.sh — One-command SSH deploy setup for The Well Trading website.
#
# What it does:
#   1. Ensures an SSH key exists (generates ed25519 if missing)
#   2. Prints the public key to add at https://github.com/settings/keys
#   3. Tests the GitHub SSH connection
#   4. Configures the git remote (git@github.com:...) using SSH
#   5. Commits everything and pushes to main (triggering GitHub Pages deploy)
#
# Usage:
#   bash scripts/github-ssh-setup.sh <github-username>/<repo>
#   e.g.  bash scripts/github-ssh-setup.sh thewelltrading/website
#
set -euo pipefail

REMOTE_REPO="${1:-}"
GIT_NAME="${GIT_NAME:-The Well Trading}"
GIT_EMAIL="${GIT_EMAIL:-admin@thewelltrading.co.za}"
BRANCH="main"

if [[ -z "$REMOTE_REPO" || "$REMOTE_REPO" != *"/"* ]]; then
  echo "✗ Usage: bash scripts/github-ssh-setup.sh <github-username>/<repo>"
  echo "  e.g.   bash scripts/github-ssh-setup.sh thewelltrading/website"
  exit 1
fi

PROJECT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_DIR"

echo "── The Well Trading · GitHub SSH deploy ─────────────────────────"
echo "  Repo target : git@github.com:${REMOTE_REPO}.git"
echo ""

# 1. SSH key
KEY_FILE="$HOME/.ssh/id_ed25519"
if [[ ! -f "$KEY_FILE" ]]; then
  echo "→ No SSH key found. Generating one…"
  mkdir -p "$HOME/.ssh" && chmod 700 "$HOME/.ssh"
  ssh-keygen -t ed25519 -C "${GIT_EMAIL}" -f "$KEY_FILE" -N ""
else
  echo "✓ SSH key found: $KEY_FILE"
fi

# 2. Show public key + instructions
PUB_KEY="$(cat "${KEY_FILE}.pub")"
echo ""
echo "════════════════════════════════════════════════════════════════"
echo "STEP 1 — Add this SSH key to GitHub (if not already added):"
echo "         https://github.com/settings/ssh/new"
echo "────────────────────────────────────────────────────────────────"
echo "$PUB_KEY"
echo "────────────────────────────────────────────────────────────────"
read -r -p "Have you added the key to GitHub? [y/N] " answer
if [[ ! "$answer" =~ ^[Yy]$ ]]; then
  echo "Add the key above, then re-run this script."
  exit 0
fi

# 3. Test connection
echo ""
echo "→ Testing SSH connection to GitHub…"
if ssh -T git@github.com -o StrictHostKeyChecking=accept-new 2>&1 | grep -q "successfully authenticated"; then
  echo "✓ GitHub SSH authentication OK"
else
  echo "✗ Could not authenticate with GitHub via SSH."
  echo "  - Double-check the key was added to https://github.com/settings/keys"
  echo "  - Then re-run this script."
  exit 1
fi

# 4. Git identity (local to this repo)
git config user.name  >/dev/null 2>&1 || git config user.name  "$GIT_NAME"
git config user.email >/dev/null 2>&1 || git config user.email "$GIT_EMAIL"

# 5. Init repo if needed + commit
if [[ ! -d .git ]]; then
  echo "→ Initializing git repository…"
  git init -b "$BRANCH"
fi

# Create an empty GitHub repo if the user has `gh` CLI available
if command -v gh >/dev/null 2>&1; then
  echo "→ Ensuring remote repo exists (gh CLI detected)…"
  gh repo view "$REMOTE_REPO" >/dev/null 2>&1 || gh repo create "$REMOTE_REPO" --public --source=. --remote=origin --disable-wiki || true
fi

git add -A
if git diff --cached --quiet 2>/dev/null; then
  echo "✓ Nothing new to commit."
else
  git commit -m "v2.0 — Upgraded The Well Trading website (Next.js static, GitHub Pages ready)"
fi

# 6. Remote + push
git remote remove origin >/dev/null 2>&1 || true
git remote add origin "git@github.com:${REMOTE_REPO}.git"
echo "→ Pushing to git@github.com:${REMOTE_REPO}.git …"
git push -u origin "$BRANCH" --force

echo ""
echo "════════════════════════════════════════════════════════════════"
echo "✓ Pushed! GitHub Actions is now building & deploying the site."
echo ""
echo "FINAL STEP (one-time) — Enable GitHub Pages:"
echo "  1. Open  https://github.com/${REMOTE_REPO}/settings/pages"
echo "  2. Under 'Build and deployment' → Source → choose: GitHub Actions"
echo "  3. (Optional, custom domain) → add 'thewelltrading.co.za'"
echo "     and point your DNS A records to GitHub Pages (see DEPLOY.md)."
echo ""
echo "Monitor the deploy: https://github.com/${REMOTE_REPO}/actions"
echo "════════════════════════════════════════════════════════════════"
