# Portfolio copy review

Last updated: 2026-06-13

## Purpose

This note records the copy rules for the portfolio site so future edits do not drift back into translationese or generic AI-sounding writing.

The site has two writing modes:

- Korean pages should read like Korean first. Keep product names and common SaaS terms when they are meaningful, but avoid English filler such as `workflow`, `readiness`, `enablement`, `signal`, and `context` when a Korean phrase works better.
- English pages should stay plain and specific. Avoid inflated phrases such as `evidence-led`, `measurable signals`, `at the intersection of`, and repeated abstract nouns when a direct sentence works.

## Tone by location

Hero:

- Use one clear positioning sentence.
- The body can be explanatory, but it should sound like a person describing their work.
- Prefer "무엇을 연결해 어떤 체계로 만든다" over a list of abstract categories.

Section intros:

- Use short titles and one compact body paragraph.
- Avoid claiming that a section "shows context" or "signals philosophy" unless the sentence says what the reader learns.

Case cards:

- Keep the labels short: 문제, 기여, 결과.
- Problem and outcome should be full sentences.
- Metrics and tags can be short noun phrases.

Metrics:

- Each number needs a scope note.
- The note should say what was counted or tested. Avoid vague wording such as "안전 맥락", "반복 개선 신호", or "writing signal".

Operating stack:

- Tool names can stay in English.
- Capability and evidence should explain the work in Korean on Korean pages.
- Do not show an English logo-list style description on the Korean page.

Preview and redaction labels:

- Korean UI labels should be Korean unless they are product names or industry abbreviations.
- Use "재구성 화면", "고객 데이터 없음", and "비공개 상세 보호" rather than English safety boilerplate.

## Current fixes

- Rewrote the Korean hero, selected work, metric notes, stack rows, thinking signals, writing section, confidentiality text, and footer.
- Localized hardcoded UI labels from `src/App.tsx` through `copy.ui`.
- Lightly edited the English page to reduce generic AI copy patterns.
- Added `npm run lint:copy`, and wired it into `npm run lint`.

## Humanization checklist

Before shipping portfolio copy:

- Read the sentence aloud. If it sounds like a literal translation, rewrite it.
- Replace abstract nouns with the actual work: 기획 흐름, 데모 준비, 시장 인사이트, 검토, 인계, 권한.
- Keep English only when it carries domain meaning: `Jira`, `Confluence`, `SRM/S2P`, `Agentic AI`, `Product Ops`, `Storylane`.
- Match the UI location. Headlines are short; body copy explains; cards use short labels; metric notes define scope.
- Run `npm run lint:copy`.

## Skill routing

Use these local Codex skills when reviewing copy:

- Korean copy: `C:\Users\s_talentlee52\.codex\skills\humanize-korean\SKILL.md`
- English copy: `C:\Users\s_talentlee52\.codex\skills\humanizer\SKILL.md`

The Korean skill currently points to an external `references` path that was not present in this environment, so this repo-level checklist and `scripts/check-copy.mjs` act as the local project guardrail.
