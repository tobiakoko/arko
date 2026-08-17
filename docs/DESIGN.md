# Design System

## Design Direction

**Concept:** "Engineered trust for local service." Technical precision + warm, plainspoken local credibility. Anchored by three words: **Clear · Credible · Local**. Source of truth: `design/design-direction.md` (validated by top-design, 2026-08-16).

**Signature moment (locked, Phase 4):** Hero shows a **Google map-pack card for "church near me [city]" with an empty name slot** — "Your church — right here." The visitor mentally fills it with their own church. Honest by construction (no fabricated reviews/rankings — Rule 8). The metric-chip strip is the recurring motif below it.

**Personality:** Precision-instrument manual written by a neighbor who shows his work. Not art gallery (old site), not corporate (Hibu).

**References:** Locomotive-type typographic confidence at human scale; AREA 17 editorial restraint; the guide's own competitive wedge (transparency) as a design value.

**top-design audit (Phase 4):** Typography 6→8 · Composition 7→8 · Motion 6→8 · Color 8 · Details 7→8 · **Total ≈6.9 → 7.9** (target 8+ at implementation). Driven by: hero display ~6.5:1 ratio, asymmetric hero (type left, bleeding map-pack card right), choreographed load (expo-out `0.16,1,0.3,1`, ~80ms staggered words, transform/opacity only), warm paper + single signal-green accent, designed focus/selection/forms.

**Key decisions (Phase 4):**
- Signature moment: empty map-pack card (approved)
- Display-to-body: ~6.5:1 hero ratio (approved)
- Smooth scroll: **native** — no Lenis; performance-first, the site is the SEO demo (approved)
- Custom cursor: **native** — accessibility-first; custom cursors belong to the removed aesthetic (approved)
- Color system: validated from design-direction.md §3 — warm paper `#FAFAF7` (never pure white), ink `#16181D` (never pure black), signal green `#0E6E57` accent used only on CTAs/links/key metrics

## Typography

**Pairing (approved, Phase 5):** Space Grotesk (display — "type for a moment") + Inter (body/UI — "type to live with"). Both Google Fonts, free, Inter already in codebase. Structural contrast: geometric display vs. neutral UI.

**Scale (fluid `clamp()`, ~1.25 modular):**
- H1 hero: `clamp(2.75rem, 1rem + 4.5vw, 6.5rem)` · weight 600–700 · `-0.02em` tracking · line-height 1.05 (~6.5:1 vs body at desktop — Phase 4 decision)
- H2: `clamp(1.75rem, 0.5rem + 2.5vw, 2.75rem)` · line-height 1.1 · weight 600
- H3: `clamp(1.25rem, 1rem + 0.5vw, 1.5rem)` · line-height 1.2 · weight 600
- Body: 1rem desktop / 1.0625rem (17px) mobile · line-height 1.6–1.7 · `max-width: 65ch` (66-char optimum)
- Labels/eyebrows: 0.75rem uppercase · 0.12em tracking
- Metrics/prices/rankings: Inter `tabular-nums` 600–700

**Rules:** headings `text-wrap: balance`; never skip heading levels; vary size OR weight OR color between adjacent levels (never all three); links always visually distinct (signal underline); body never below 16px; paragraphs spaced, headings more space above than below.

**Loading strategy (approved, Phase 5):** self-host via `next/font/google` — Space Grotesk (variable) + Inter (variable), `subsets: ['latin']`, `display: 'swap'`, preload display face only. Two variable fonts ≈ 150–180KB combined (Space Grotesk ~60KB + Inter subset ~100KB), under the 200KB budget, zero CLS. Fallbacks: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`.

**Quick-diagnostic:** body ≥16px ✓ · measure <75ch ✓ · line-height ≥1.4 ✓ · level contrast ✓ · <200KB ✓ · fallbacks ✓ · 200% zoom ✓ · no orphans (balance) ✓ · distinct links ✓.

## Tokens

**Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96. Spacing between groups > spacing within groups. Section padding: `py-24` desktop / `py-16` mobile.

**Color palette (9-shade signal green + tinted warm grays, approved Phase 6):**
| Token | Value | Role |
|---|---|---|
| `--color-paper` | `#FAFAF7` | Page background (warm, never pure white) |
| `--color-surface` | `#FFFFFF` | Cards, panels |
| `--color-ink` | `#16181D` | Primary text (never pure black) |
| `--color-ink-soft` | `#4B5160` | Secondary text (AA 7.3:1 on paper) |
| `--color-ink-faint` | `#8A90A0` | Labels/captions (large text/UI only) |
| `--color-line` | `#E4E4DE` | Hairline borders, dividers |
| `--color-signal-50` | `#E7F3EE` | Tints, badges, selected |
| `--color-signal-100` | `#CDE7DC` | Soft fills |
| `--color-signal-200` | `#9BCFBA` | Borders on tint |
| `--color-signal-300` | `#66B596` | Hover fills |
| `--color-signal-400` | `#339A71` | Active fills |
| `--color-signal-500` | `#0E6E57` | **DEFAULT accent** — CTAs, links, key metrics |
| `--color-signal-600` | `#0B5A47` | Hover on accent |
| `--color-signal-700` | `#0A4F3F` | **signal-deep** — focus states |
| `--color-signal-800` | `#063229` | Pressed |
| `--color-signal-900` | `#041F1A` | Max depth |

Rules: accent appears only on CTAs, links, and key metrics (color last — hierarchy carried by ink/paper); text contrast ≥4.5:1 body, ≥3:1 large; never pure black/white; semantic `result` green `#1D7A3F` for up-metrics only; `caution` amber `#B45309` for audit "fix this" only.

**Shadows (two-layer, elevation only):**
- `shadow-1` (raised — hover lifts): `0 1px 2px rgb(22 24 29 / 0.06), 0 4px 12px rgb(22 24 29 / 0.08)`
- `shadow-2` (floating — modals/menus): `0 4px 8px rgb(22 24 29 / 0.08), 0 16px 32px rgb(22 24 29 / 0.12)`
- Resting cards: **borders, no shadow** (design-direction decision)

## Components

| Component | Decision | Status |
|---|---|---|
| Buttons — primary | Signal-500 fill, paper text, radius 8, weight 500; hover signal-600; focus 2px signal-700 offset ring | approved |
| Buttons — secondary | Surface + 1px line border, ink text, radius 8 | approved |
| Buttons — tertiary | Text link, signal underline on hover | approved |
| Button hierarchy rule | One primary action per section; never two competing primaries | approved |
| Cards | Surface, 1px line border, radius 10; hover `-translate-y-1`, border → ink/20, shadow-1 | approved |
| Metric chips | Signal-50 tint, 1px signal-200 border, radius 6, tabular numerals bold, label ink-faint 0.75rem | approved |
| Signature map-pack card | Google-search-style card: surface, radius 10, 1px line; empty name slot ("Your church — right here.") | approved |
| Forms | Visible uppercase-small labels (0.75rem, ink-faint); inputs 1px line, radius 8, 44px min targets; errors in text, never color-only | approved |
| Guarantee panel | Signal-50 tint + 1px signal-200 border | approved |
| Navigation | Slim, surface 92% + hairline bottom border on scroll; CTA button always visible | approved |
| Footer | Full sitemap, NAP, GBP link, legal; one final CTA | approved |
| Icons | Custom/consistent stroke set, 1.5px; no emoji, no Font Awesome defaults | pending impl |
| Empty/error/404 states | Designed, helpful, with CTA — never default | pending impl |
| `::selection` | Branded signal tint | pending impl |

## UX Audit Findings

Spec-level audit (2026-08-16, ux-heuristics). Quick diagnostic: 7/10 → target 9–10 at launch. No severity-4 issues. Fixes 1–3 are launch-blocking; 4–9 ship with implementation.

| Issue | Heuristic | Severity (0-4) | Fix | Status |
|---|---|---|---|---|
| No "you are here" indicator in spec | 6 Recognition / Trunk Test | 3 | Active-nav state on all pages; breadcrumbs on interior pages (Home > Churches > Frisco) | blocking |
| Mobile header primary CTA hidden in hamburger | 8 Minimalist | 3 | Persistent "Get my scorecard" button in mobile header — never buried in menu | blocking |
| Cancellation path invisible (own promise "leave anytime") | 3 Control & Freedom | 3 | "Cancel anytime after the initial term — no retention maze" visible on pricing + care pages | blocking |
| Nav labels ≠ page titles | 4 Consistency | 2 | Nav labels = page titles verbatim | ship with impl |
| CTA label drift risk | 4 Consistency | 2 | Lock "Get my scorecard" as invariant button label (full form only in hero/landing) | ship with impl |
| Form validation incomplete | 9 Error recovery | 2 | Validate on blur; specific messages; preserve input; mark optional not required | ship with impl |
| No system status on scorecard submit | 1 Visibility of status | 2 | "Sending…" → "Sent — we'll reply within one business day." | ship with impl |
| City-page sameness risk | 4 Consistency | 2 | Unique copy per city + city name in H1 + breadcrumb | ship with impl |
| Word budget unenforced | 8 Minimalist | 2 | "Half the words, then half again" rule on every brief at copy time | ship with impl |
| No search box | Trunk Test | 0 | Not required — 14-page site, nav covers it | non-issue |

Already satisfied: 44px targets · text-not-color errors · skip-to-content + landmarks · `text-wrap: balance` · no hover-only info · plain labels · no happy talk.

## Microcopy & Edge States (Phase 10)

Back-of-the-fence surfaces held to hero standard (steve-jobs-design-review fix #2).

- **404:** held to homepage standard — "You've wandered off the path. Here's the way back: [scorecard CTA] [home link]." Never a bare "404 Not Found." Bonus: church-flavored without being cute ("Every path leads somewhere — this one's a dead end").
- **Form errors:** text-not-color; human + specific ("Enter the church's city"), never "Invalid input." Validate on blur; preserve input on error; mark optional, not required.
- **Scorecard failure states:** submit fails → "Sending failed — your answers are saved. Try again." (nothing lost, retry always present). Email bounce → nurture treats as unsubscribed, no re-attempt loop.
- **Loading states:** scorecard results appear in <1s or show progress; no blank screens. System status everywhere (Phase 7 fix #7): "Sending…" → "Sent — we'll reply within one business day."
- **Empty states:** case studies page before evidence exists → "Case studies coming after our next two builds — proof you can check" (honest placeholder, Rule 8) or the section ships hidden until evidence lands.
- **Nurture email strings:** written at copy time with the word-budget rule; every string read aloud before it ships.
- **Cancellation/offboarding:** one screen, keeps dignity (already Phase 7 fix #3).
- **Rule:** every string on the site passes the read-aloud test and the word budget — microcopy is designed, never left to defaults.

## Microinteraction Inventory
Pending (optional phase — microinteractions; add when interaction polish is needed).