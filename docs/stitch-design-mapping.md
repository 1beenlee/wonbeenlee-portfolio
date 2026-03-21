# Stitch Design Mapping

## Retrieved artifacts

- `docs/stitch/screen-reference.png`
- `docs/stitch/exported-code/screen.html`
- Source:
  - Stitch project `18268098272080180081`
  - Stitch screen `ae57a1ad3c134d3b8bb235ab663f219f`

## Applied directly

- Typography stack
  - `Newsreader` for display headings
  - `Manrope` for body copy
  - `Inter` for labels and metadata
- Neutral light palette
  - Moved the site from a warmer card system to cooler neutral surfaces and lighter tonal separation.
- Surface layering
  - Section bands, soft panels, and white content surfaces now carry more of the hierarchy than visible borders.
- CTA treatment
  - Primary actions now use a darker premium button treatment with more deliberate spacing and shape.

## Applied with adaptation

- Floating header behavior
  - Kept the existing top navigation for usability, but translated it into a lighter glass surface.
- Editorial asymmetry
  - Added asymmetry mainly in hero and work layouts, but limited it so longer Japanese and Korean copy still wraps cleanly.
- Card rhythm
  - Reworked work, resume, and contact sections to feel less like a uniform grid and more like editorial groupings.
- Section spacing
  - Increased vertical rhythm and section separation, while keeping anchor navigation and recruiter scanability intact.

## Intentionally not adopted

- Stitch placeholder or mock copy
  - The production site still uses the portfolio content files as the source of truth.
- Image-heavy storytelling patterns
  - The Stitch reference leaned on stronger visual blocks in some sections, but the portfolio does not currently have approved visual assets for that treatment.
- Any layout choice that weakens multilingual readability
  - Extremely compressed headline blocks, overly narrow text columns, and decorative elements that hurt JA/KO balance were not carried over.
- Any pattern that reduces recruiter scanability
  - Top navigation, clear section headers, and structured resume/work summaries were preserved instead of following the reference literally.

## Main local files that carry the design translation

- `app/layout.tsx`
- `app/globals.css`
- `tailwind.config.ts`
- `components/home/design-tokens.ts`
- `components/home/site-header.tsx`
- `components/home/hero-section.tsx`
- `components/home/impact-section.tsx`
- `components/home/work-section.tsx`
- `components/home/about-section.tsx`
- `components/home/writing-section.tsx`
- `components/home/resume-section.tsx`
- `components/home/contact-section.tsx`

## Assumptions and limitations

- Stitch was used as a layout and design-language reference, not as production code.
- The current portfolio remains text-first because no approved public imagery or additional brand assets were introduced in this pass.
- The implementation favors multilingual readability, accessibility, and maintenance over visual fidelity to every Stitch detail.
- Canonical content, routing, and localization architecture remain unchanged from the existing portfolio implementation.
