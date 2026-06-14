# Codex Sites Deploy Prompt

Use this after opening the Sites plugin in Codex.

```text
@Sites Please check this React + Vite project for Codex Sites compatibility, using https://developers.openai.com/codex/sites as the source of truth.

Project root:
C:\Users\s_talentlee52\wbeen-personal-kb

This is an internal/colleague-sharing personal introduction site. The default route `/` must render the internal Korean version. English internal version is `/en`. Public-ready draft routes are `/public` and `/public/en`. Japanese is not displayed yet, but the content/routing structure should remain easy to extend with `*.ja.ts`.

Please do the following:
1. Confirm this project can be deployed as a Codex Sites app.
2. Keep access initially limited to owner/admins.
3. Do not include or inspect `.wbeen-secrets`.
4. Confirm `.openai/hosting.json` contains no secrets.
5. Save a deployable version first for review.
6. After review approval, deploy that saved version to production.
7. Return the production URL, access mode, and deployment status.
```
