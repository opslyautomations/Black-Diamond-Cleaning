# Indexing Audit — Black Diamond Cleaning Solutions

**Date:** 2026-06-05  
**Trigger:** ~1,100 non-indexed URLs in Google Search Console (309 404, 147 soft-404, 592 crawled-not-indexed)  
**Scope:** Code-level causes only. No content fabrication. All business facts preserved.

---

## Changelog

### 1. `app/blog/[slug]/page.tsx` — Added `dynamicParams = false`

**Why:** The only dynamic route in the project. Without this flag, Next.js will attempt to server-render any arbitrary slug at runtime. If `getBlogPost(slug)` returns `undefined`, the existing `notFound()` call returns a 404, but the route is still rendered first — adding rendering overhead and leaving a window for soft-404 ambiguity. With `dynamicParams = false`, Next.js returns a hard 404 at the routing layer for any slug not in `generateStaticParams()`, before the component is touched.

**What already existed (correct, no change):**  
- `generateStaticParams()` returns all 10 blog slugs ✅  
- `if (!post) notFound()` correctly calls `notFound()` ✅

---

### 2. `app/not-found.tsx` — Created

**Why:** No top-level `not-found.tsx` existed. While Next.js App Router returns HTTP 404 by default for unmatched routes, a missing `not-found.tsx` means users hitting any 404 see an unstyled fallback. Having the file also makes the 404 behavior explicit and auditable. The component renders a branded page using existing site classes (`btn-primary`, `btn-outline-white`, `section-container`) and returns HTTP 404 via App Router's built-in behavior.

---

### 3. `app/sitemap.ts` — Replaced `new Date()` with static per-entry dates; added `/gallery`

**Why (dates):** The original sitemap used `const now = new Date().toISOString()` stamped to every static entry. This means every build reports *all* pages as modified at the same instant — a mass-edit signal that dilutes freshness and prevents Google from prioritizing genuinely updated pages. Static dates now reflect actual content history from git log.

**Date sources:**
| Date | Source |
|---|---|
| `2026-04-27` | Git: canonical/metadata fix commit `5db4c86` — last touched about, services, support pages |
| `2026-06-01` | Git: performance commit `13ebac7` — layout.tsx updated (affects homepage shell) |
| `2026-06-03` | Git: Local Resources commit `4a798ae` — all 9 service-area pages updated |
| `2026-06-03` | Gallery page newly committed alongside this audit |

Blog post entries already used per-post `date` strings — left unchanged ✅.

**Why (gallery):** `/gallery` existed as a fully rendered, indexed page but was absent from the sitemap. Added with `priority: 0.6` and `lastModified: '2026-06-03'`.

---

### 4. `next.config.mjs` — Added legacy-redirect scaffold

**Why:** A clearly commented `INSTRUCTIONS` block now lives inside `redirects()` explaining the rule: add an entry *only* when a true 1:1 equivalent new page exists. Two placeholder examples are commented out. This prevents someone from adding blanket redirects-to-homepage in the future, which would generate more soft-404s.

The existing www → non-www permanent redirect is unchanged ✅.

---

### 5. `components/Footer.tsx` — Added Gallery to company links

**Why:** `/gallery` was an orphan — in the sitemap (after fix above) but reachable from zero internal links. Added between Reviews and Blog in the Company column. Gallery is now crawlable via the sitewide footer.

---

## Task 2 — Status-Code Audit

| Signal | Status |
|---|---|
| Unknown slug `/blog/fake-slug-xyz` | **404** — `dynamicParams = false` blocks it at routing layer |
| Unknown path `/asdf-nope-123` | **404** — no matching route; App Router default |
| Unknown service-area e.g. `/service-areas/pittsburgh-pa` | **404** — all service-area pages are individual static routes, not a dynamic `[slug]` segment; no route = real 404 |
| Unknown service e.g. `/services/window-cleaning` | **404** — same as above; all service pages are static routes |
| Any page returning "no results" at 200 | **None found** — no route in the codebase renders an empty result set without calling `notFound()` |

**Verify live:** `curl -I https://www.blackdiamondcleaningsolutionsllc.com/asdf-nope-123` should return `HTTP/2 404`.

---

## Task 3 — Canonical + Host Consistency

| Check | Result |
|---|---|
| `metadataBase` in layout.tsx | `new URL('https://www.blackdiamondcleaningsolutionsllc.com')` ✅ |
| www redirect in next.config | Permanent 301 for bare domain ✅ |
| `trailingSlash` setting | Not set (default: `false` = no trailing slash). All canonicals are consistently without trailing slash except homepage root `/` ✅ |
| Homepage canonical | `https://www.blackdiamondcleaningsolutionsllc.com/` (with `/` — correct for root) ✅ |
| All other page canonicals | No trailing slash, www host, absolute URLs ✅ |
| Sitemap host | `https://www.blackdiamondcleaningsolutionsllc.com` ✅ |
| robots.txt sitemap pointer | `https://www.blackdiamondcleaningsolutionsllc.com/sitemap.xml` ✅ |

No canonical mismatches found. No changes needed beyond confirming consistency.

---

## Task 5 — robots.txt + Noindex Page Inventory

`app/robots.ts` is correctly configured: allows all crawlers, disallows `/api/`, `/admin/`, `/private/`, points to www sitemap ✅.

### Pages with `noindex`

None. Every page in the project uses `defaultRobots` which exports `{ index: true, follow: true, ... }`. No page carries an explicit `noindex`.

*If a thank-you/confirmation page is added in the future (e.g. `/contact/thank-you`), it should carry `robots: { index: false, follow: false }` and be excluded from the sitemap.*

---

## Task 6 — Thin / Duplicate Content Audit

### Service-Area Pages (9 pages)

All 9 pages share the `LocationPageTemplate` component. The template provides fixed boilerplate sections (hero structure, "Black Diamond Promise" trust signals, full services grid, GHL quote form, final CTA). Unique content per page is limited to: city/state names, one intro paragraph, three reasons, nearby areas, and local resource links.

| Page | Est. unique words | Est. total words | % unique | Soft-404 risk |
|---|---|---|---|---|
| `/service-areas/state-college-pa` | ~155 | ~520 | ~30% | **Medium-High** |
| `/service-areas/scranton-pa` | ~145 | ~510 | ~28% | **Medium-High** |
| `/service-areas/altoona-pa` | ~130 | ~495 | ~26% | **Medium-High** |
| `/service-areas/harrisburg-pa` | ~140 | ~505 | ~28% | **Medium-High** |
| `/service-areas/williamsport-pa` | ~145 | ~510 | ~28% | **Medium-High** |
| `/service-areas/erie-pa` | ~140 | ~505 | ~28% | **Medium-High** |
| `/service-areas/buffalo-ny` | ~150 | ~515 | ~29% | **Medium-High** |
| `/service-areas/rochester-ny` | ~135 | ~500 | ~27% | **Medium-High** |
| `/service-areas/syracuse-ny` | ~130 | ~495 | ~26% | **Medium-High** |

*Word counts are estimates from template analysis; "unique" = intro + reasons + nearby areas + local resource labels.*

**Root cause:** The template is essentially the same page with a name-swap. Google identifies these as near-duplicate thin pages, which is the primary driver of the "Crawled — currently not indexed" bucket.

**What NOT to do:** Adding generic filler paragraphs (e.g. "Erie is a city in Pennsylvania known for...") will not help and may worsen the signal. See MANUAL FOLLOW-UPS.

### Service Pages (5 pages)

All 5 pages use `ServicePageTemplate`. Each has a unique service name, description, what-is-included checklist, key benefits list, and FAQ section. These are substantially more differentiated than the service-area pages.

| Page | Estimated unique content | Soft-404 risk |
|---|---|---|
| `/services/standard-cleaning` | High — distinct checklist, FAQs | Low |
| `/services/deep-cleaning` | High — distinct checklist, FAQs | Low |
| `/services/move-in-move-out-cleaning` | High — distinct checklist, FAQs | Low |
| `/services/recurring-cleaning` | High — distinct checklist, FAQs | Low |
| `/services/commercial-cleaning` | High — distinct checklist, FAQs | Low |

### Blog Posts (10 posts)

All 10 posts have unique, long-form body content (800–1,500 words each) with substantive headings, lists, and paragraphs. No duplicate content issues found.

| Post | Date | Category | Soft-404 risk |
|---|---|---|---|
| deep-cleaning-vs-standard-cleaning | 2025-03-15 | Cleaning Tips | Low |
| how-to-prepare-for-professional-house-cleaning | 2025-03-22 | Cleaning Tips | Low |
| move-out-cleaning-checklist-pennsylvania | 2025-04-01 | Moving Tips | Low |
| how-often-schedule-professional-house-cleaning | 2025-04-08 | Cleaning Tips | Low |
| benefits-of-recurring-house-cleaning-service | 2025-04-15 | Home Care | Low |
| move-in-cleaning-guide-new-home | 2025-04-22 | Moving Tips | Low |
| signs-your-home-needs-a-deep-clean | 2025-05-01 | Cleaning Tips | Low |
| commercial-cleaning-pennsylvania-new-york-businesses | 2025-05-10 | Commercial | Low |
| house-cleaning-tips-for-pet-owners | 2025-05-18 | Home Care | Low |
| what-a-professional-kitchen-deep-clean-includes | 2025-05-25 | Deep Cleaning | Low |

---

## Task 7 — Internal Linking / Orphan Check

| Page | In sitemap | Footer link | Navbar link | Homepage link | Orphan? |
|---|---|---|---|---|---|
| `/` | ✅ | ✅ | ✅ | — | No |
| `/about` | ✅ | ✅ | ✅ | No | No |
| `/contact` | ✅ | ✅ | ✅ | ✅ (CTA buttons) | No |
| `/reviews` | ✅ | ✅ | No | ✅ (GBP link) | No |
| `/gallery` | ✅ (after fix) | ✅ (after fix) | No | No | **Borderline** |
| `/specials` | ✅ | ✅ | No | ✅ (offer banner) | No |
| `/blog` | ✅ | ✅ | No | ✅ (blog preview) | No |
| `/blog/[slug]` (×10) | ✅ | No | No | ✅ (3 recent) | No — all linked from blog index + homepage |
| `/services/standard-cleaning` | ✅ | ✅ | ✅ | ✅ | No |
| `/services/deep-cleaning` | ✅ | ✅ | ✅ | ✅ | No |
| `/services/move-in-move-out-cleaning` | ✅ | ✅ | ✅ | ✅ | No |
| `/services/recurring-cleaning` | ✅ | ✅ | ✅ | ✅ | No |
| `/services/commercial-cleaning` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/state-college-pa` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/scranton-pa` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/altoona-pa` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/harrisburg-pa` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/williamsport-pa` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/erie-pa` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/buffalo-ny` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/rochester-ny` | ✅ | ✅ | ✅ | ✅ | No |
| `/service-areas/syracuse-ny` | ✅ | ✅ | ✅ | ✅ | No |

**Resolution:** `/gallery` was the only true orphan. Fixed by:
1. Adding it to `app/sitemap.ts`
2. Adding it to the footer Company links in `components/Footer.tsx`

**Recommendation:** Add `/gallery` to the Navbar mobile menu and/or the homepage section links as a further improvement (manual task — outside scope of this audit's code changes).

---

## Manual Follow-Ups (Human Action Required)

### HIGH PRIORITY

**1. Service-area pages need genuine local content to index reliably**

All 9 service-area pages are ~26–30% unique content. Google's "Crawled — currently not indexed" bucket (592 URLs in your GSC report) is almost certainly dominated by these pages plus legacy phantom URLs.

These pages will not reliably index until each has substantially more city-specific content that cannot be found on any other page. Examples of genuinely unique content per city:
- A real customer story or quote attributed to that city
- Specific neighborhoods, ZIP codes, or landmarks served
- Local considerations (e.g. "Erie's lake-effect winters mean...")
- A city-specific FAQ (e.g. "Do you clean Penn State off-campus housing?")

**Do not generate this content with AI.** It will read as generic and will not fool Google's quality signals. Source it from real customers, real local knowledge, or real operational experience in each market.

Until this content is added, the service-area pages may sit in the "Crawled — currently not indexed" bucket indefinitely regardless of technical fixes.

---

**2. The 309 "Not Found" URLs in GSC — review and do NOT redirect blindly**

GSC is reporting 309 URLs returning 404. These are presumably legacy URLs from a previous version of the site (the git history shows a rebuild on 2026-04-23 that replaced a gallery-based site with the current blog-based structure).

Action:
- Export the full 404 URL list from GSC
- For each URL, determine if a true equivalent new page exists
- If yes: add a `{ source, destination, permanent: true }` entry to the `redirects()` array in `next.config.mjs` (the scaffold is now in place)
- If no equivalent page exists: leave it as a real 404 and let it decay from Google's index naturally (this takes 3–6 months)
- **Do not redirect dead URLs to the homepage** — that produces soft-404s and makes things worse

---

**3. The 147 "Soft 404" URLs in GSC — investigate sources**

Soft-404s are pages that return HTTP 200 but signal "nothing here" to Google. With `dynamicParams = false` now in place on the blog route, no new soft-404s should be generated from unknown slugs. Investigate any remaining ones:
- Check if they correspond to old service-area or service slugs (e.g. `/cleaning/state-college`)
- If they map 1:1 to current pages, add a redirect; otherwise leave as 404

---

**4. `/gallery` — add to Navbar**

The gallery page is now in the sitemap and footer, but not in the Navbar (neither desktop dropdown nor mobile menu). Consider adding a "Gallery" link to the Navbar's mobile menu at minimum. This is a low-effort internal-link improvement that helps Google discover the page faster.

---

**5. Blog post `dateModified` — keep updated**

The blog article schema uses `dateModified: post.date` (same as `datePublished`). If a post is ever updated, add a `dateModified` field to the `BlogPost` interface in `lib/blog-posts.ts` and update the schema. Stale `dateModified` values reduce freshness signals.

---

**6. Verify OG image route `/api/og` is excluded from sitemap**

The `/api/og` route is a server-rendered image endpoint, not a page. It is correctly absent from the sitemap. Confirm that `robots.ts` disallows `/api/` (it does ✅). No action needed — just noting for the record.

---

## What This Audit Does NOT Change

- No business facts (NAP, phone, services, pricing) were changed
- No page content was added, removed, or reworded
- No canonical URLs were changed (all were already correct)
- No redirects were added (scaffold only — see Manual Follow-Ups #2)
- No service-area pages were removed or consolidated
- No blog posts were modified
