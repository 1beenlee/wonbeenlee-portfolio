# Wonbeen Lee — Standalone Career Portfolio

This public repository contains a standalone, multilingual portfolio website for Wonbeen Lee, a Global Product Manager working on enterprise procurement SaaS and Agentic AI.

- **Primary, newer public Career hub:** [PAOS Career](https://personal-ai-ops.vercel.app/wbeen/career/)
- **Standalone portfolio website:** [Wonbeen Lee Portfolio](https://wonbeenlee-portfolio.vercel.app/public/ja)
- **LinkedIn:** [Profile and activity](https://www.linkedin.com/in/wonbeenlee/recent-activity/all/)

> This repository is an older, independently deployed portfolio surface, not the private Personal-KB and not the canonical PAOS source. Some of its career copy and deployment configuration may differ from the newer PAOS Career material. Confirm current factual claims before reusing them in applications.

## Routes

Routes declared in `src/lib/i18n.ts`:

| Route | Audience / language |
| --- | --- |
| `/` · `/en` · `/ja` | Original portfolio variants (KO / EN / JA) |
| `/public` · `/public/en` · `/public/ja` | Public-focused portfolio variants (KO / EN / JA) |

The public variants reuse and selectively override content from the original language modules. The original routes are **not access-controlled**; do not place sensitive content in either set of routes.

## Content architecture

- `src/content/profile.shared.ts` — shared profile metadata
- `src/content/profile.internal.{ko,en,ja}.ts` — base content for each language
- `src/content/profile.public.{ko,en,ja}.ts` — public variants built from the base content
- `src/lib/i18n.ts` — route / locale resolution

The codebase uses React, TypeScript and Vite. Route metadata and site copy are compiled into a static deployment.

## Local development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run lint:copy
npm run lint
npm run build
```

## Source and release boundaries

- Personal history, private evidence and long-term career context are maintained separately in a **private** Personal-KB repository; this public repository is not its operational source of truth.
- Do not copy private source notes, unpublished company plans, internal URLs, real customer information, Jira issue keys, tokens or personal operating files into this repository.
- The deployed Vercel Production and the default GitHub branch may not point to the same commit. Check the actual deployment source, build and target branch before claiming a copy change is live.
- The Japanese copy distinguishes a planned COE / `日本人の配偶者等` process from an already obtained residence status. It must not imply that work authorization is already held.
