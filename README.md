# Portfolio

Public portfolio site for Wonbeen Lee, built with React, TypeScript, and Vite.

This repository is the web-facing portfolio application. The broader personal knowledge base and source archives live separately in `1beenlee/wbeen-personal-kb`.

## Routes

- `/` - internal Korean portfolio
- `/en` - internal English portfolio
- `/public` - public-ready Korean portfolio
- `/public/en` - public-ready English portfolio

## Development

```powershell
npm install
npm run dev
```

## Validation

```powershell
npm run lint:copy
npm run lint
npm run build
```

## Content Model

Portfolio copy lives in `src/content`.

- `profile.shared.ts` contains shared profile metadata.
- `profile.internal.ko.ts` and `profile.internal.en.ts` contain the main portfolio copy.
- `profile.public.ko.ts` and `profile.public.en.ts` inherit internal copy and override public route metadata.

Sensitive details such as real customer data, internal URLs, Jira issue keys, page IDs, server names, secrets, tokens, and private evaluation material must not be committed.
