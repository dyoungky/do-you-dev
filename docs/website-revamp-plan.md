# Website Revamp Plan

> Status: **Implemented.**
> Scope: `do-you-dev` (Next.js 16 / App Router). Pivot from personal portfolio toward productized web-design & development services.

## Locked decisions

1. **Route:** rename `/work` → `/solutions` (308 redirect kept for `/work` + `/work/:slug`).
2. **Portfolio:** keep the real projects, presented as **template / solution designs** customers can choose between — each with a **build-time estimate in days**.
3. **Currency:** all prices in **DKK**.
4. **Tiers:** 3-tier model — WordPress Starter → Custom Frontend → Full-Stack Web App.
5. **Location/branding:** **Østerbro, Copenhagen, Denmark** (correct the old "Seoul" reference).

---

## Current state (what exists today)

- **Homepage** (`app/page.tsx`): `Hero` → `Cases` (portfolio slider) → `Services` → `Contact`
- **/work** (`app/work/page.tsx`): portfolio list of 4 real projects, plus dynamic case-study pages `app/work/[slug]/page.tsx` (placeholder "Lorem ipsum" content)
- **/about** (`app/about/page.tsx`): intro → skills → **experience** → education
- **/prices** (`app/prices/page.tsx`): `PricesHero` → `Prices` → `Process` → `FAQ`

### Inconsistencies to fix along the way (hurt SEO & credibility)

- `app/layout.tsx` metadata says *"based in Seoul"*, but Contact/Footer say *"Copenhagen, Denmark"*.
- Pricing is in Korean Won (`₩`) while the business is Denmark-based.
- Every page shares the same `<title>`/description (no per-page metadata); no sitemap, robots, OpenGraph, or structured data.

---

## Change 1 — Remove the "Experience" section

**Scope:** `app/about/page.tsx` only.

- Delete the `experience` array (lines ~10–41) and the entire `{/* Experience */}` block (lines ~120–145).
- Keep Skills and Education. Education already has a top border, so spacing stays clean.

Small, self-contained. No other files reference it.

---

## Change 2 — "Work" → Package / Industry Solutions

The big pivot: from a **personal portfolio** to a **productized services** model. Recommended structure: **3 package tiers**, with **industry use-cases** layered on top (industries map to tiers rather than being a separate axis — cleaner, avoids combinatorial mess).

### Proposed packages

| Package | Best for (industries) | Stack | Hosting / Backend | Typical build price |
|---|---|---|---|---|
| **Starter — WordPress** | Local businesses, restaurants, clinics, tradespeople | WordPress + custom theme, page builder | Managed WP host (Simply.com / One.com / SiteGround) | Lower |
| **Professional — Custom Frontend** | Brands, portfolios, marketing sites, professional services | React / Next.js, headless CMS (Sanity) optional | Vercel / Netlify (static/SSR), CMS cloud | Mid |
| **Full-Stack — Web App** | E-commerce, SaaS, booking, dashboards | Next.js + Node/API routes + database | Vercel + managed DB (Supabase / Neon), auth, storage | Higher |

### Each package card/detail will include (per request)

- **What's included** (design + build deliverables)
- **Tech stack**
- **Where it's deployed** — front end + backend host, database, CMS
- **Ongoing cost of ownership** (transparent, realistic EU numbers), e.g.:
  - Domain: ~€10–15/yr (`.dk` ~40 DKK/yr, `.com` ~€12/yr)
  - WordPress hosting: ~€5–30/mo · Vercel: free→€20/mo Pro · DB: free→€25/mo
  - Business email (Google Workspace): ~€6/user/mo · SSL: free/included
  - Optional maintenance retainer
- **What the client owns** (code, domain, accounts)

### File / route changes

1. **New route** `/solutions` (recommended name) replacing the portfolio focus of `/work`. Add a redirect from `/work` → `/solutions` so existing links/SEO don't break.
2. **New `Packages` component** on the homepage replacing `Cases` (the portfolio slider) in `app/page.tsx`. Keeps the same visual language (serif headings, `#293465`, fade-in via `useInView`).
3. **`/solutions` page**: hero + 3 package tiers + a "total cost of ownership" explainer + industry examples + CTA.
4. **`/solutions/[slug]`**: repurpose the existing `[slug]` template into **package detail pages** (e.g., `wordpress-starter`, `custom-frontend`, `full-stack-app`) covering deliverables, stack, hosting, costs, and FAQ.

**Open decision:** Keep the real portfolio projects (Ferm Living, NAME, Dkemy, Back Roads) as a smaller "Recent work / proof" strip for credibility, or remove entirely in favor of packages? **Recommendation: keep a slim "Selected work" proof strip** — strong social proof for selling services.

---

## Change 3 — SEO (marketed as a secondary service, and applied to this site)

Two distinct things, both worth doing.

### 3a. Technical SEO for *this* website (code changes)

- Add `metadataBase`, canonical URLs, and **per-page metadata** (`/`, `/solutions`, `/about`, `/prices`, each `[slug]`).
- Add **OpenGraph + Twitter card** metadata and an OG image.
- Add `app/sitemap.ts` and `app/robots.ts` (Next.js file conventions).
- Add **JSON-LD structured data**: `ProfessionalService`/`LocalBusiness` (Copenhagen), `Service` per package, `FAQPage` (reuse existing FAQ), `BreadcrumbList` on detail pages.
- Fix the Seoul→Copenhagen and currency inconsistencies.
- Accessibility/perf wins that also help SEO: reconsider global `cursor: none`, add real `alt` text, `width/height` on images, and `next/image` where practical.
- **Note:** `AGENTS.md` warns this Next.js version has breaking changes — verify the metadata/sitemap/robots APIs against `node_modules/next/dist/docs/` before writing code.

### 3b. SEO + Ads as a *service offering* (content/positioning)

Positioned honestly as a **secondary add-on**, not core expertise:

- A section (on `/solutions` or `/prices`) covering: on-page SEO setup, technical SEO, basic keyword/content guidance, and **paid ads** (Google Ads / Meta) as an optional bolt-on — framed as "we set you up right and can point you to specialists for ongoing campaigns."
- Add 2–3 SEO/ads FAQ entries to `app/components/FAQ.tsx`.

---

## Proposed nav / IA changes

- `Nav` and `Footer`: `Work` → `Solutions`. Update `Hero` links. (`app/components/Nav.tsx`, `app/components/Footer.tsx`, `app/components/Hero.tsx`)
- `Services` and `Prices` copy updated to reference the packages so the story is consistent end-to-end.

---

## Implementation order (once approved)

1. Remove Experience (quick win).
2. Fix location/currency + base metadata.
3. Build `Packages` component + `/solutions` + `/solutions/[slug]`; redirect `/work`.
4. Wire SEO service content + FAQ additions.
5. Technical SEO: sitemap, robots, per-page metadata, JSON-LD, OG image.

---

## Decisions needed before building

1. **Route name:** `/solutions`, `/packages`, or keep `/work`?
2. **Portfolio:** keep a slim "Selected work" proof strip, or remove real projects entirely?
3. **Currency & price points:** switch to EUR/DKK? Concrete build prices on packages, or "From €X / on request"?
4. **Package names/tiers:** OK with the 3-tier Starter / Professional / Full-Stack model, or a different split?
5. **Ongoing-cost numbers:** OK to publish the realistic ranges listed, or keep it qualitative ("hosting from €X/mo")?
6. **Branding/location:** confirm Copenhagen, Denmark (and correct the Seoul reference)?
