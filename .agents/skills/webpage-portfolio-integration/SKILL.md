---
name: webpage-portfolio-integration
description: 'Analyze an external/standalone HTML page added to the root directory, extract its content and semantics, formulate a contextual placement strategy within the website architecture, and port it into a Next.js subpage adhering strictly to the portfolio design system, color tokens, and UX rules without regressions.'
license: MIT
metadata:
  author: vikas
  version: "1.0.0"
---

# Webpage Portfolio Integration Skill

This skill governs the systematic ingestion, extraction, architectural planning, and design-system translation of any standalone webpage (e.g. an HTML landing page, course offering, or product pitch added to the repository root) into Vikas Bandaru's portfolio.

It enforces a strict **"Propose First, Review, Then Port"** protocol to guarantee zero visual regressions and 100% adherence to existing design tokens.

---

## Core Principles

1. **Suggest First, Await Confirmation (Mandatory Stop):**
   * Never execute code or modify the site before delivering an analysis report outlining the extracted content, proposed URL route, and contextual entry points (e.g., from `/work`, `/collaborate`, or home sections).
   * Wait for explicit user confirmation before porting.
2. **Zero Color & Style Regressions:**
   * **Never** invent ad-hoc Tailwind colors (e.g. `bg-blue-600`, `bg-[#f8fafc]`, `border-slate-200`) or independent nested navigation bars.
   * **Always** use the portfolio's native design tokens defined in `app/globals.css`:
     * Backgrounds: `bg-background-50`, `bg-background-100`, `bg-background-200`
     * Inks / Text: `text-foreground-950`, `text-foreground-700`, `text-foreground-500`
     * Primary Buttons & Accents: `bg-primary-500 hover:bg-primary-600 text-white`
     * Cards & Borders: `bg-background-50/80`, `border-background-200`, `shadow-xs`
     * Accents & Badges: `bg-primary-50 text-primary-700 border-primary-200/60`
3. **Harmonious Subpage Anatomy:**
   * Every ported subpage MUST begin with the standardized `EditorialSubpageHero` component:
     * Dark backdrop (`bg-foreground-950`)
     * Ambient texture (`/images/editorial/hero-network.webp`)
     * Eyebrow pill badge with animated status dot
     * Serif italic highlight for distinction
     * 3 structured summary metrics/stats
4. **Natural Human Voice & Anti-AI Copy Rules:**
   * Strictly eliminate excessive em-dashes (`—`). Use natural colons (`:`), commas, periods, or conjunctions (`instead of`, `rather than`).
   * No marketing puffery or synthetic buzzwords (*streamline, delve, comprehensive tapestry*).
   * Ensure direct, honest positioning (clear pricing, genuine student expectations, transparent contact avenues).
5. **No Collateral Damage:**
   * Port the page as an isolated App Router route (`app/<section>/<slug>/page.tsx`).
   * Do not touch `globals.css` or `app/layout.tsx`.
   * Only touch existing pages (`/work`, `/contact`, etc.) to add surgical, non-intrusive entry links.

---

## 4-Step Execution Workflow

### Step 1 — Inspection & Content Extraction
Read the standalone file in the root folder completely:
* Identify the **core offer / thesis** (e.g. course duration, target audience, pricing, curriculum, deliverables).
* Extract all **interactive anchors** (contact forms, mailto links, payment buttons, FAQs, bonus toolkits).
* Check placeholders that must be updated (e.g., `YOUR-EMAIL@example.com`, placeholder WhatsApp numbers).

### Step 2 — Strategy & Placement Proposal (Stop & Report)
Deliver a concise report answering:
1. **URL & Route Architecture**: Where does this live? (e.g. `/cohorts/<name>` or `/builds/<name>`).
2. **Contextual Touchpoints**: Which existing page naturally links to this? (e.g. Under *Track 01* of `/work`, or a dedicated badge in `/about`).
3. **Contact / Conversion Mechanism**: WhatsApp direct chat (`https://wa.me/...`) with contextual prefilled text and desktop QR code, plus email backup.
4. **STOP and wait for the user's approval.**

### Step 3 — Porting into Next.js & Design System
Once approved:
1. Create `app/<section>/<slug>/page.tsx` using:
   * `"use client"` if modals/state are required.
   * `EditorialSubpageHero` as the top hero.
   * `Reveal` wrapper on each content section for staggered transitions.
   * Responsive grids matching the site (`max-w-content mx-auto px-6 md:px-10 py-16 md:py-20`).
2. Integrate WhatsApp direct connect (`+91 8096990227`) and the mobile QR scanner modal for desktop viewers.
3. Replace all contrastive em-dashes with clean, natural punctuation.
4. Add the contextual entry CTA in the designated parent page (e.g., `app/work/page.tsx`).

### Step 4 — Verification & Delivery
1. Run `npm run build` to ensure type safety, zero build warnings, and successful static page generation.
2. Confirm the original global background, navbar, and existing subpages remain completely untouched.
3. Commit and push the updates cleanly to git.
