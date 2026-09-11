# AST Portal — Mirror the 13-Section Structure (with AST content only)

Repo: /Users/mateo_akel/Documents/ventneuf/repositories/tarek-website/al-saad-telecom, branch `main`. Next.js 16 App Router, SCSS modules, lucide-react OK. Visual idiom: AST black theme, Space Grotesk headings, mono labels, classification strips — read src/app/portal/telecommunications/page.tsx + PortalShell as exemplars.

## CONTENT DISCIPLINE (absolute)
Every claim must trace to existing AST material: src/data/*.ts (stats, industries, offices, projects, solutions), src/data/portal/*.ts (domains, programs, training, vendors, products, documents), or public pages (about, values, solutions). NEVER borrow Lunasat claims: no ITAR/FCPA/UKBA (AST claims TRACE only — see TraceBadge + about page), no 57k radios / Centers of Excellence / FSR-since-2007, no Lebanon. AST facts: Iraq-focused, 2 offices (offices.ts), 30+ years, TRACE certified, stats.ts numbers (3,750+ km borders, 200+ team, 700,000+ ops hours, 40,000+ training hours, 8,000+ trained, engineers %).

## Target nav (src/lib/portal/nav.ts) — extend NavItem with `index?: string; badge?: string` (keep existing icon field); PortalShell renders index before label (muted mono) and badge chip after (like a small bordered tag):
- Briefing: 00 Hub /portal · 01 Overview /portal/overview · 02 Why AST /portal/why-ast
- Domains: 03 Telecommunications /portal/telecommunications · 03 Security /portal/security (existing pages, untouched)
- Proof: 04 Proven Delivery /portal/proven-delivery · 05 Programs /portal/experience (existing page; nav label "Programs") · 06 Iraq Footprint /portal/footprint · 07 Technology Partners /portal/technology-partners
- Operations: 08 Compliance & Governance /portal/compliance · 09 Support & Sustainment /portal/training (existing page; relabeled) · 10 Solutions by Sector /portal/sectors
- Resources: 11 Document Center /portal/documents (existing; add notice) · 12 Become a Partner /portal/become-a-partner
- Tier 2: Deal Rooms /portal/deal-rooms, badge "PROVISIONED"

## New pages (each: page.tsx + page.module.scss, server components, robots inherit portal layout)
- 01 Overview: local-partner thesis with AST framing — systems integrator, 30+ years, Iraq depth, engineer-heavy team (use the about-page copy + stats.ts engineer stat verbatim), multidisciplinary domains. Frame: "your channel into Iraq" — as positioning language only, grounded in existing copy.
- 02 Why AST: de-risk Iraq market entry — in-country presence (2 offices, offices.ts), long-term government/critical-infrastructure track record (about/projects), TRACE due-diligence membership, training record (40,000+ hours, 8,000+ trained). 4–6 proof blocks.
- 04 Proven Delivery: stat wall from src/data/stats.ts VERBATIM (all entries) + a depth column from training.ts sustainment themes.
- 06 Iraq Footprint: Iraq operations map/blocks — offices from offices.ts, sector split matching industries.ts entries; note "client names disclosed in Tier-2 deal rooms only".
- 07 Technology Partners: logo grid from src/data/portal/vendors.ts (all 8 vendors incl. L3Harris), white-filter CSS (filter: brightness(0) invert(1); opacity .85; height 26-32px), domain chips from each vendor's product coverage (derive from products.ts vendor→subsection mapping or keep a simple static label per vendor grounded in vendors.ts blurbs). Framing line: "You'd be in good company." NO client/deployment claims.
- 08 Compliance & Governance: TRACE membership as the lead tile (reuse TraceBadge content/copy), plus governance posture grounded ONLY in existing site language (due diligence, transparent operations — see values page). Then a `[ STANDARDS ]` section listing anything already claimed in repo data (check certifications-like data; if none exists, keep it to TRACE + process discipline from training.ts — do NOT invent ISO/ITAR).
- 10 Solutions by Sector: sector cards from src/data/industries.ts (title + one-liner each); Telecommunications and Security link to /solutions/telecommunications and /solutions/security (public pages); others get chip `[ BRIEF ON REQUEST ]` linking to /portal/become-a-partner. No new deep pages.
- 12 Become a Partner: intake form mirroring the pattern in the LUNASAT repo (read /Users/mateo_akel/Documents/ventneuf/repositories/tarek-website/lunasat/src/lib/portal/actions.ts `submitPartnerInquiry` + lunasat/src/app/portal/become-a-partner/*): add the same `submitPartnerInquiry` + `InquiryFormState` to AST's src/lib/portal/actions.ts (same validation/error strings/console.log pattern), client InquiryForm with useActionState; domain select = Telecommunications / Security / Multiple; country select = Iraq / Regional / Other; `// PRINCIPAL / OEM` field; success `[ LOGGED ]` + "Your inquiry has been logged and routed. Expect contact from the relevant desk."
- Deal Rooms: locked Tier-2 page mirroring lunasat/src/app/portal/deal-rooms (read it): `[ TIER 2 // RESTRICTED ]`, per-relationship rooms with named logins provisioned individually, holds named clients & programs / deployment photography / co-branded material / pipeline & pricing, closing "Access is provisioned individually. Contact your AST counterpart.", inline SVG lock, no form.

## Modifications to existing files
- Hub /portal/page.tsx: rebuild as briefing-room cover — AST wordmark (reuse /logo-ast.svg as in PortalShell), one positioning line grounded in existing copy ("A trusted systems integrator... Iraq" style), card grid GENERATED from portalNav (skip Hub; Deal Rooms card gets `[ TIER 2 // PROVISIONED PER RELATIONSHIP ]` chip instead of enter CTA), keep session strip + NDA ACK display if present.
- /portal/documents: add notice block verbatim: "Downloads are provisioned per recipient and watermarked. Files in this preview are placeholders."
- PortalShell: render nav index + badge (add .navIndex/.navBadge styles consistent with AST tokens).

## Verification
`npx tsc --noEmit` clean (delete .next first if stale). No next dev/build (controller does build + visual QA). Commit only your files, explicit paths, co-author trailer `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`. Do NOT push.
