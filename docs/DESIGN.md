# Design System

## Design Direction

**Brand essence:** Welcome — a church's front door: warm, calm, considered. Atmosphere: "sanctuary warmth, engineered."

**Visual tension:** Warmth vs precision — editorial serif + ivory paper-tones against a disciplined grid, hairline rules, engineering restraint.

**Signature moment (approved):** "Your church in the search results" — hero contains a mock Google search field; typing **"church near me"** reveals "Your Church · Sunday 9:00 & 11:00 AM · 4.9★ (87)" at the top of the map pack. Demonstration UI (truthful), screenshot-worthy, sells the exact outcome. Secondary signature detail: the **$10,000** figure set in monument amber type.

**Technical ambition:** 60fps choreographed load (word-staggered headline reveal, expo-out `cubic-bezier(0.16,1,0.3,1)`), Lenis smooth scroll, search demo as the only interactive flourish, LCP < 2.5s, transform/opacity-only animation, `prefers-reduced-motion` respected. Custom cursor: **native** (declined by user).

**Personality:** Editorial warmth. Restrained. No gradients, no pure black/white, no emoji, no AI-purple. One accent, used like treasure.

**References:** Locomotive (monochromatic tension + bold type), Studio Freight (choreography), AREA 17 (editorial craft); church benchmarks: elevationchurch.org, vouschurch.com, marinerschurch.org (design reference only — content stays our own).

## Color system (approved)

| Token | Value | Job |
|---|---|---|
| Paper | `#FAF7F2` | Page background |
| Surface | `#FFFDF8` | Cards, forms |
| Ink | `#1C1917` | Headlines + body (never `#000`) |
| Text-secondary | `#57534E` | Supporting copy |
| Border | `#E7E5E4` | Hairlines, cards |
| **Accent Amber** | `#B45309` | THE $10,000 figure, selection color, hover details, small labels — ≤10% of any screen |
| Sanctuary Dark | `#1C1917` bg / ivory text | One dark chapter (Ad Grant section) |
| Text on ink buttons | `#FAF7F2` | Primary CTA: ink bg, paper text |

Functional CSS custom properties drive everything (`--color-paper`, `--color-ink`, `--color-accent`, `--color-surface`, `--color-border`, `--color-text-secondary`, `--color-sanctuary`). Accent appears only on CTAs-adjacent details, links, and the $10K figure.

## Typography (approved)

**Pairing:** Fraunces (variable serif — display/"type for a moment") + Figtree (variable sans — body & UI/"type to live with"). Rejected: Inter/Roboto/system for display (generic), Playfair (overused/cold), Instrument Serif (too thin).

**Scale (fluid clamp, no breakpoint jumps):**
| Level | Size | Line-height | Tracking |
|---|---|---|---|
| $10,000 monument figure | `clamp(4rem, 3rem + 10vw, 12rem)` | 0.95 | −0.03em |
| H1 (hero) | `clamp(2.5rem, 1.75rem + 4vw, 5.5rem)` | 1.05 | −0.02em |
| H2 | `clamp(1.75rem, 1.5rem + 1.5vw, 2.75rem)` | 1.15 | −0.01em |
| H3 | `clamp(1.25rem, 1.15rem + 0.5vw, 1.5rem)` | 1.25 | 0 |
| Body | `clamp(1.0625rem, 1rem + 0.25vw, 1.125rem)` (17→18px) | 1.6 | 0 |
| Labels/captions | `0.875rem` uppercase | 1.3 | +0.08em |

**Rules:** body `max-width: 65ch`; 18px body on mobile; `text-wrap: balance` on headings; no orphaned headline words (manual breaks); links distinct by color AND underline.

**Loading:** both via `next/font` (Latin subset, self-hosted WOFF2, `font-display: swap`, preload display). Fraunces wght-only ~130KB; Figtree ~65KB; combined ≤195KB worst case, ~150KB typical. Fallbacks: `Fraunces, Georgia, 'Times New Roman', serif` · `Figtree, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` — no FOIT.

## Tokens (approved)

**Spacing** (px): 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128. Section rhythm `py-24` desktop / `py-16` mobile. Container `max-w-6xl` (1152px) + `px-6`. Cards `p-8`. Rule: spacing between groups > spacing within groups.

**Color (warm-tinted):**
| Token | Value | Use |
|---|---|---|
| ink | `#1C1917` | Headlines |
| text-body | `#44403C` | Paragraphs (7.5:1 on paper) |
| text-secondary | `#57534E` | Supporting copy |
| text-tertiary | `#78716C` | Captions/labels only |
| paper | `#FAF7F2` | Base |
| surface | `#FFFDF8` | Cards, forms |
| surface-2 | `#F5F0E8` | Alternating sections |
| border | `#E7E5E4` | Hairlines |
| border-strong | `#D6D3D1` | Inputs, secondary buttons |
| amber-700/600/800/100 | `#B45309` `#D97706` `#92400E` `#FEF3C7` | Accent scale |
| sanctuary | `#1C1917` bg · paper text · `rgba(250,247,242,0.12)` borders | Dark chapter |

**Shadows (two-layer, transparent ink):**
- `xs` buttons: `0 1px 2px rgb(28 25 23/0.06)`
- `sm` resting cards: `0 1px 2px rgb(28 25 23/0.05), 0 4px 8px rgb(28 25 23/0.05)`
- `md` hover/raised: `0 4px 8px rgb(28 25 23/0.06), 0 12px 24px rgb(28 25 23/0.08)`
- `lg` floating: `0 8px 16px rgb(28 25 23/0.08), 0 24px 48px rgb(28 25 23/0.12)`

**Grayscale-first rule:** hierarchy runs on size/weight/spacing; amber is the only color lever and reserved for accent elements ($10K figure, links, selection, small labels).

## Components (approved — one primary action per section)

| Component | Decision |
|---|---|
| Primary button | Ink bg, paper text, radius 12, `px-6 py-3.5` semibold 17px, shadow-xs; hover stone-800 + shadow-md + −1px lift; focus 2px amber ring offset 2px. No white-on-amber |
| Secondary button | Transparent, 1px border-strong, ink text, same geometry |
| Tertiary link | Amber-700 text + arrow, underline on hover |
| Inputs | Surface bg, 1px border-strong, radius 10, `py-3`; focus 2px amber ring; uppercase 13px tertiary labels; width 300–500px |
| Cards | Surface, 1px border, radius 16, `p-8`, shadow-sm; hover shadow-md |
| Nav | Sticky, paper/85 + backdrop blur, hairline bottom; links secondary→ink hover; one primary CTA |
| Chapters | Alternate paper / surface-2; one sanctuary-dark section (Ad Grant) |

## UX Audit Findings (approved — all ship at build)

| Issue | Heuristic | Severity | Fix | Status |
|---|---|---|---|---|
| Nav overload (8+CTA) | Aesthetic & minimalist | 3 | Trim to 5 + CTA: Church Websites · Google Ad Grant · Pricing · Results · About; Contact → footer + CTA; Nonprofits page linked from footer | ship |
| Health Check form silent failure | Error prevention / system status | 4→prevented | Inline validation on blur; error = what+why+fix; never clear input; "Sending…" → "Check sent — we reply within 24 hours"; privacy note | ship |
| Hero search demo hover-only | Flexibility | 3 | Tap + focus-triggered; default state reveals result | ship |
| Tertiary gray too light | Contrast | 2 | Labels use text-secondary `#57534E`; tertiary only for metadata | ship |
| Tap targets <44px | Error prevention | 2 | All interactive ≥44×44; mobile menu button 48px | ship |
| Mobile nav buried | User control | 2 | Full-screen overlay + blur; sticky bottom Health Check bar on mobile | ship |
| Term inconsistency | Consistency | 2 | Locked terms: "Church Website Health Check" / "Google Ad Grant" (first-mention rule) | ship |
| No skip link/landmarks | Accessibility | 2 | Skip-to-content, semantic landmarks, visible focus | ship |
| Form progress/escape | System status / freedom | 2 | "Step 2 of 3", restart link, back preserves answers | ship |
| Undesigned 404/error pages | Help & recovery | 2 | "Find your way home" 404 → Health Check; no dead ends | ship |

**Trunk test:** passes by design (logo+descriptor, matching page titles, active nav + breadcrumbs, one obvious action per page, blog search).
**Score:** 7.5/10 audited → 9.5/10 when the list ships.

## Microinteraction Inventory
| Interaction | Trigger/Rules/Feedback/Loops | Fix | Status |
|---|---|---|---|
| Hero search demo | Focus hero field → typed query reveals map-pack result (staggered) → "Your Church" highlighted | In build | pending |
| Headline reveal | Word-by-word slide-up, 80ms stagger, expo-out, on load (200–800ms) | In build | pending |
| Buttons | Hover: subtle lift + shadow elevation; active: press; focus: 2px amber ring | In build | pending |
| Selection color | `::selection` = amber bg, paper text | In build | pending |
| Cards | Hover: 1px border darkens + 2px lift, 200ms ease | In build | pending |