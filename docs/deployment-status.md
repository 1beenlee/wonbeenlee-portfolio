# Deployment Status

## Current readiness

Status: ready for public deployment and initial publishing.

Validated locally:

- `npm.cmd run lint`
- `npm.cmd run typecheck`
- `npm.cmd run build`

Confirmed implementation state:

- `/` redirects to `/en`
- `/en`, `/ja`, `/ko` are statically generated
- localized metadata is configured
- Open Graph and canonical URLs resolve from `NEXT_PUBLIC_SITE_URL`
- resume download path is wired to `public/resume/wonbeen-lee-resume.pdf`

## Completed in this pass

- Initialized Git in the project directory
- Added a public-repo-safe `.gitignore`
- Excluded private source materials and worklogs from the publishable repo
- Updated fallback site URL to the actual Vercel project alias
- Pushed the codebase to `https://github.com/1beenlee/wonbeenlee-portfolio`
- Created the Vercel project `wonbeenlee-portfolio`
- Completed the first production deployment
- Added project environment variable `NEXT_PUBLIC_SITE_URL`

## Live deployment

- Production URL: `https://wonbeenlee-portfolio.vercel.app`
- Deployment inspect URL:
  - `https://vercel.com/wonbeen-lees-projects/wonbeenlee-portfolio/8WwCGn56U5KqhFsXVWoALMrmQjir`

## Still manual

- Connect the GitHub repository to the Vercel project if you want automatic deploys on push.
- Replace placeholder brand assets when final versions are ready:
  - `public/favicon.svg`
  - `public/og-image.svg`
- Optionally update stronger public-safe proof points in the content files later.

## Known placeholders

- `public/favicon.svg` is a functional placeholder, not final branding
- `public/og-image.svg` is usable for launch but still placeholder-level
- The site is live without a custom domain; it currently uses the default Vercel domain

## Post-deploy validation checklist

- Open `/`, `/en`, `/ja`, and `/ko`
- Confirm the language switcher preserves route context
- Confirm the resume button downloads the PDF
- Check LinkedIn, email, and GitHub links
- Confirm page title, description, canonical URL, and OG image in page metadata
- Check mobile layout, especially hero, work cards, and resume section spacing
