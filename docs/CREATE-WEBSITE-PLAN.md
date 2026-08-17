# Create Website Plan

## Context
- **Product/service:** Arko Media Labs — DFW web design + local marketing studio for home-service businesses (contractors, auto shops); church line via referral; med spa opportunistic year-2.
- **Audience:** DFW home-service business owners; church staff (separate funnel).
- **Primary conversion goal:** Lead capture — "Get my free DFW Visibility Scorecard"; direct CTA = "Book a 15-min call."
- **Scope:** Full multi-page site: home, 4 service pages, 5 city pages, case studies, pricing, about, contact, church landing path, legal + accessibility statement.
- **Tech stack:** Next.js 16 + Tailwind 4, repo root `/Users/tobi/arko`.
- **Proof assets:** 5 existing clients (Ron's Body Shop, DLBC Tampa, DCLM Lewisville, Afromerica Entertainment, Ossei Prempeh); 1 case study in progress; 0 published reviews yet. **Rule 8 active: no invented evidence.**
- **Craft:** Maximal — the site is the demo of the product (guide §6 step-0 SEO).
- **Prior work to reuse:** `IMPLEMENTATION-GUIDE.md` (positioning, pricing, site blueprint) and `design/design-direction.md` (design direction: light-first, signal green, Space Grotesk + Inter). Phases 1–2 validate existing positioning; Phases 4–7 validate + port design-direction.md into DESIGN.md rather than re-deriving.
- **Date started:** 2026-08-16.
- **Mode:** All 11 skills installed to `~/.agents/skills/`; phases run by reading each skill's SKILL.md (orchestrator not loadable via skill tool).

## Phase Status
| Phase | Skill | Status | Artifact | Date |
|---|---|---|---|---|
| 1 | one-page-marketing | done | MARKETING.md, CUSTOMER.md | 2026-08-16 |
| 2 | storybrand-messaging | done | POSITIONING.md, WEBSITE.md | 2026-08-16 |
| 3 | made-to-stick | done | POSITIONING.md, WEBSITE.md | 2026-08-16 |
| 4 | top-design | done | DESIGN.md | 2026-08-16 |
| 5 | web-typography | done | DESIGN.md | 2026-08-16 |
| 6 | refactoring-ui | done | DESIGN.md | 2026-08-16 |
| 7 | ux-heuristics | done | DESIGN.md | 2026-08-16 |
| 8 | cro-methodology | done | WEBSITE.md, EXPERIMENTS.md | 2026-08-16 |
| 9 | scorecard-marketing | done | WEBSITE.md, MARKETING.md | 2026-08-16 |
| 10 | steve-jobs-design-review | done | WEBSITE.md, DESIGN.md | 2026-08-16 |
Statuses: pending · in-progress · awaiting-evidence · done · deferred: <reason> · skipped: <reason>

## Key Decisions
| Date | Phase | Decision | Rationale |
|---|---|---|---|
| 2026-08-16 | Intake | Full journey run; check-in before every phase | User requirement |
| 2026-08-16 | Intake | All 10 constituent skills installed globally | Smooth journey, no mid-phase installs |
| 2026-08-16 | Intake | Phases 1–2 validate existing positioning; 4–7 port design-direction.md into DESIGN.md | Prior artifacts exist; reuse per skill rule 7 |
| 2026-08-16 | Intake | Artifacts written to docs/ per artifact-templates.md | Resumability across sessions |
| 2026-08-16 | 1 | Niche: churches-first (owner decision, twice confirmed) | Owner override of PVP recommendation (auto 23/30); personal mission + existing church clients; auto/home-service kept as expansion |
| 2026-08-16 | 1 | Primary goal: scorecard lead; booked call = transitional | Guide's CTA hierarchy; Phase 9 alignment |
| 2026-08-16 | 2 | One-liner locked: "We help DFW churches that can't be found on Google get found by first-time guests — so more families walk through the door." | Passed cocktail-party test; problem-led; pairs with homepage stakes |
| 2026-08-16 | 2 | Customer-as-hero confirmed; no "We…" openings in headlines | StoryBrand SB7 rule |
| 2026-08-16 | 3 | Hero hook locked: "Nobody searches a church to read about it. They're deciding where to go this Sunday." | SUCCESs — Unexpected trait was 4/10; hook opens curiosity gap and connects to core message |
| 2026-08-16 | 3 | Sticky rewrites approved (subhead, value cards, stakes) | Concrete trait fix |
| 2026-08-16 | 3 | Citable claims register created; testimonial + customer story marked launch-blocked | Rule 8 gate |
| 2026-08-16 | 4 | Signature moment: empty map-pack card ("Your church — right here.") | Honest by construction; instantly understood outcome |
| 2026-08-16 | 4 | Hero ratio ~6.5:1; native scroll (no Lenis); native cursor | Performance-first (site = SEO demo); accessibility-first; restrained for church audience |
| 2026-08-16 | 4 | Color system validated (paper/ink/signal green) from design-direction.md | top-design pillar 4: warm not pure, one accent, functional hierarchy |
| 2026-08-16 | 5 | Typography: Space Grotesk + Inter, next/font self-hosted (~150–180KB) | Structural contrast; sub-200KB budget; zero CLS |
| 2026-08-16 | 6 | Tokens approved: spacing 4–96, signal 9-shade scale, tinted warm grays, two-layer shadow scale | refactoring-ui scales; borders-over-shadows retained |
| 2026-08-16 | 6 | Button hierarchy: primary filled signal / secondary outline / tertiary text; one primary per section | refactoring-ui hierarchy levers |
| 2026-08-16 | 7 | UX fix list approved: all 9 ship; 3 majors (you-are-here, mobile CTA, cancellation path) launch-blocking | No sev-4 issues at spec level; design-time deletions |
| 2026-08-16 | 8 | Big-5 O/CO table approved (8 counters, placements at friction) · proof hierarchy audited (case studies/testimonials launch-gated) · experiment backlog logged (E1–E5, ICE 6.0–8.0) · ships-now vs awaits-evidence split agreed | cro-methodology; proof acquisition = interviews + DLBC/DCLM + Sinatra-test win |
| 2026-08-16 | 9 | Scorecard spec locked: 10 scored questions / 5 categories (Ownership + Maintenance weighted) + 3 qualifying · tiers Low 0–24 / Med 25–38 (sweet spot) / High 39–50 · email-first capture · PDF report · tier CTAs · nurture W1/W3/W6 tier-segmented + monthly drip | scorecard-marketing; promise = delivery, score never steered |
| 2026-08-16 | 10 | Verdict NOT DONE 7/10 → closed to 9/10 with 2 fixes: ① CTA label unified ("Get my scorecard" invariant) ② Microcopy & Edge States specced in DESIGN.md. Journey complete; launch gates = cold demo on real device (<1s first screen) + evidence collection (Rule 8) | steve-jobs-design-review; binary verdict, no "pretty good" |
| 2026-08-16 | Build | Site built from spec: 22 routes, design system (tokens/typography/components), map-pack hero, scorecard (13 Q / tiers / print report), services, city pages + schema, legal, 404, sitemap; build + lint clean | Implementation per WEBSITE.md + DESIGN.md |

## Next Actions
- [x] Phase 1: one-page-marketing — niche (churches-first), scorecard goal, USP, Before/During grid (owner: user + agent) — done 2026-08-16
- [x] Phase 2: storybrand-messaging — BrandScript, one-liner, sitemap, homepage brief (owner: user + agent) — done 2026-08-16
- [x] Site built from spec (2026-08-16): 22 routes; build + lint clean
- [ ] Set `RESEND_API_KEY` (+ optionally `LEAD_TO_EMAIL`) before launch so lead emails actually deliver — until then, leads log to server console (owner: user)
- [ ] Cold demo review on real device: first screen <1s, scorecard click-through, mobile nav + persistent CTA (Phase 10 launch gate — re-run the review)
- [ ] Customer-interview exercise (5 pastor interviews) to validate avatar language and pain priorities (owner: user, due before Phase 8 proof work)
- [ ] Collect evidence for testimonials + case-study metrics from DLBC Tampa and DCLM Lewisville (owner: user, before launch — Rule 8 gate)