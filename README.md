# Wonbeen Lee Portfolio

Multilingual portfolio site for Wonbeen Lee, built with Next.js, TypeScript, and Tailwind CSS.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Structured localized content for `en`, `ja`, and `ko`

## Routes

- `/` redirects to `/en`
- `/en`
- `/ja`
- `/ko`

## Local development

1. Install dependencies:

```powershell
npm.cmd install
```

2. Start the dev server:

```powershell
npm.cmd run dev
```

3. Open `http://localhost:3000`

## Validation

Run these before deployment:

```powershell
npm.cmd run lint
npm.cmd run typecheck
npm.cmd run build
```

## Content editing

The main editable copy lives in:

- `content/site.en.ts`
- `content/site.ja.ts`
- `content/site.ko.ts`

English is the canonical draft. Japanese and Korean are localized versions that follow the same schema.

Shared rendering and localized labels are handled in:

- `components/portfolio-page.tsx`
- `lib/types.ts`

## Resume asset

The public resume download path is:

`public/resume/wonbeen-lee-resume.pdf`

The current file is already wired to the live CTA buttons. Replace it only with a newer public-safe resume.

## SEO and launch-time settings

Canonical and Open Graph URLs are built from `NEXT_PUBLIC_SITE_URL`.

- If `NEXT_PUBLIC_SITE_URL` is set, the app uses that value.
- If it is not set, the site falls back to `https://wonbeenlee-portfolio.vercel.app`.

Before production launch, set the final domain in your deployment environment.

## Placeholder brand assets

These files are functional placeholders and should be replaced before public launch if stronger branding assets are available:

- `public/favicon.svg`
- `public/og-image.svg`

Current status:

- `favicon.svg` is a usable monogram placeholder.
- `og-image.svg` is a text-based preview asset, not final brand artwork.

## Deployment

### Vercel

Recommended primary deployment target.

1. Push the repository to GitHub.
2. Import the repo into Vercel.
3. Framework preset: `Next.js`
4. Build command: default Vercel build or `npm.cmd run build`
5. Set `NEXT_PUBLIC_SITE_URL` to the final production URL.

Current default deployment alias:

`https://wonbeenlee-portfolio.vercel.app`

### Cloudflare Pages

The app is built as a static-first Next.js site and can be adapted for Cloudflare Pages as a secondary deployment target. Use the current Cloudflare Next.js workflow supported at deployment time and set the same `NEXT_PUBLIC_SITE_URL` value there.

## Source hierarchy

The public repository is intended to contain the deployable site, not the private source pack used to draft it.

For future public-facing edits:

1. Update the canonical English copy in `content/site.en.ts`
2. Localize the same changes in `content/site.ja.ts` and `content/site.ko.ts`
3. Use the latest private resume / LinkedIn export / source materials outside this public repo as the fact-checking reference

## Notes

- Keep all company references public-safe.
- Do not add confidential roadmap details, customer-sensitive content, or internal issue information.
- Do not overstate Japanese proficiency.
- If stronger public-safe metrics become available later, update the proof points in `content/site.en.ts` first and then localize them.
