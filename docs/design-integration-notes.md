# Design Integration Notes

## Current structure

- App entry: `app/[locale]/page.tsx`
- Page composer: `components/portfolio-page.tsx`
- Section components:
  - `components/home/site-header.tsx`
  - `components/home/hero-section.tsx`
  - `components/home/impact-section.tsx`
  - `components/home/work-section.tsx`
  - `components/home/about-section.tsx`
  - `components/home/writing-section.tsx`
  - `components/home/resume-section.tsx`
  - `components/home/contact-section.tsx`
  - `components/home/site-footer.tsx`

## Content mapping

- All multilingual homepage content lives in:
  - `content/site.en.ts`
  - `content/site.ja.ts`
  - `content/site.ko.ts`
- Shared content schema lives in `lib/types.ts`
- Shared URLs and asset paths live in `lib/portfolio-config.ts`

## Redesign-sensitive files

- `components/home/design-tokens.ts`
  - Main class tokens for shell, cards, section spacing, hero surface, and contact panel
- `app/globals.css`
  - Global background treatment, selection color, scroll behavior, and shell overlay
- Section components in `components/home/`
  - Best place to change hierarchy, spacing, and section-specific composition

## CTA and string ownership

- Hero CTA labels and hrefs live in each locale content file under `hero.ctas`
- Contact card labels and values live in each locale content file under `contact.items`
- Shared section labels that appear inside the UI live in each locale content file under `ui`
- Locale switching logic lives in `components/language-switcher.tsx`

## Maintainability notes

- Metadata is centralized through `lib/metadata.ts`
- Canonical URL base comes from `NEXT_PUBLIC_SITE_URL` with fallback in `lib/site.ts`
- Resume download path is centralized in `lib/portfolio-config.ts` as `assetPaths.resume`
- OG image placeholder path is centralized in `lib/portfolio-config.ts` as `assetPaths.ogImage`

## Content constraints

- Resume remains the highest-priority source for dates, education, awards, and language levels
- Keep emro/Caidentia descriptions public-safe
- Do not add internal roadmap details, issue keys, customer-sensitive details, or unpublished metrics
- Do not overstate Japanese proficiency
- Prefer scope, ownership, artifact, and workflow wording over abstract product buzzwords

## Visual audit for incoming design work

- Most ready for redesign:
  - Header
  - Hero
  - Selected Impact
  - Contact
- Likely to need the most hierarchy tuning:
  - Work Highlights
  - Resume Snapshot
- Most sensitive to spacing/rhythm changes:
  - Hero to Impact transition
  - Work Highlights card density
  - Resume three-column section on medium breakpoints

## Recommended redesign workflow

1. Update `components/home/design-tokens.ts` for global surface and spacing shifts.
2. Apply section-level layout changes inside the individual `components/home/*-section.tsx` files.
3. Only touch `content/site.*.ts` if the design direction changes copy length or CTA wording.
4. Recheck `/en`, `/ja`, `/ko` together after each visual pass so hierarchy remains balanced across languages.
