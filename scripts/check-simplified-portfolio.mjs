import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const read = (path) => readFileSync(resolve(root, path), "utf8");
const expectIncludes = (source, expected, context) => {
  if (!source.includes(expected)) {
    throw new Error(`${context}: missing ${expected}`);
  }
};

const i18n = read("src/lib/i18n.ts");
const app = read("src/App.tsx");
const styles = read("src/styles.css");
const productOrbit = read("src/components/ProductOrbit.tsx");
const simplifiedCopy = read("src/content/profile.simplified.ts");
const simplifiedHero = read("src/components/SimplifiedHero.tsx");
const simplifiedWork = read("src/components/SimplifiedSelectedWork.tsx");
const simplifiedContact = read("src/components/SimplifiedContactBand.tsx");
const simplifiedWorkStyle = read("src/components/SimplifiedWorkStyle.tsx");
const detailedPage = read("src/pages/DetailedPortfolioPage.tsx");
const headerCopies = [
  read("src/content/profile.internal.ko.ts"),
  read("src/content/profile.internal.en.ts"),
  read("src/content/profile.internal.ja.ts")
];
const simplifiedStyles = styles.slice(styles.indexOf("24. Simplified + Detailed Portfolio"));

for (const hardcodedPalette of [
  /rgba\(45,\s*212,\s*191,/,
  /rgba\(59,\s*130,\s*246,/,
  /rgba\(96,\s*165,\s*250,/,
  /rgba\(103,\s*232,\s*249,/
]) {
  if (hardcodedPalette.test(simplifiedStyles)) {
    throw new Error(`Simplified styles must use theme tokens instead of ${hardcodedPalette}`);
  }
}

for (const route of ["/detailed", "/detailed/en", "/detailed/ja"]) {
  expectIncludes(i18n, `\"${route}\"`, "detailed route contract");
}
expectIncludes(i18n, "pageMode", "route page mode contract");
expectIncludes(app, "SimplifiedPortfolioPage", "simplified page composition");
expectIncludes(app, "DetailedPortfolioPage", "detailed page composition");
expectIncludes(productOrbit, "Planning OS", "ProductOrbit core label");
if (productOrbit.includes("Product Planning OS")) {
  throw new Error("ProductOrbit core label must not use the overflowing Product Planning OS text");
}

for (const contract of ["cases:", "caseId:", "track:", "chips:", "preview:", "variant:"]) {
  expectIncludes(simplifiedCopy, contract, "fixed simplified card slot contract");
}

for (const forbidden of ["이야기해 보세요", "전체 증거 보기", "두 개의 트랙으로 만든 결과", "자기개선하는", "채용 및 협업 문의", "Simplified로 돌아가기", "전체 포트폴리오"]) {
  if (simplifiedCopy.includes(forbidden)) {
    throw new Error(`forbidden simplified copy remains: ${forbidden}`);
  }
}

for (const requiredCopy of [
  "상세 포트폴리오",
  "핵심 요약 보기",
  "핵심 요약에서 다룬 사례를 실제 기여, 결과, 산출물 흐름 중심으로 더 자세히 정리했습니다.",
  "제품·AI·Product Ops 관련 대화를 환영합니다",
  "제품 기획, AI workflow, Product Ops에 대한 의견과 제안은 LinkedIn이나 이메일로 편하게 연락해 주세요.",
  "이메일 주소를 복사했습니다.",
  "구매 업무에 맞는 AI Workplace 흐름과 권한 기반 검토 시나리오를 설계했습니다.",
  "planning-doc-writer와 Linear 연계를 포함한 반복 가능한 기획 Skill 흐름을 정리했습니다.",
  "Gartner 대응과 Storylane 데모 준비를 연결해 제품 설명력을 높였습니다.",
  "Jira와 Confluence를 기준으로 요구사항, 리뷰, 릴리즈 흐름을 정리했습니다.",
  "LinkedIn에서 보기",
  "이메일로 연락하기",
  "GitHub 보기"
]) {
  expectIncludes(simplifiedCopy, requiredCopy, "v4 user-facing copy contract");
}

for (const previewLabel of ["AI workflow sketch", "Skill workflow map", "Demo preparation flow", "Planning ops flow"]) {
  expectIncludes(simplifiedCopy, `label: "${previewLabel}"`, "v4.1 technical preview label contract");
}

for (const localeCopy of headerCopies) {
  expectIncludes(localeCopy, 'label: "AI Product PM Portfolio"', "shared header subtitle contract");
}

for (const anchor of ["AI Workplace", "Caidentia", "Permission guard", "planning-doc-writer", "Linear", "release-prep", "Gartner", "Storylane", "9+ scenarios", "Jira", "Confluence", "320+ epics"]) {
  expectIncludes(simplifiedCopy, anchor, "public trust anchor contract");
}

expectIncludes(simplifiedWork, "proof-preview-connector", "continuous evidence preview connector");
expectIncludes(detailedPage, "depth-continuity-line", "subtle summary-to-detail continuity cue");
expectIncludes(simplifiedContact, "simplified-contact-aux", "secondary GitHub treatment");
expectIncludes(simplifiedContact, "navigator.clipboard.writeText", "email clipboard interaction");
expectIncludes(simplifiedContact, "email-popover", "email popover interaction");
expectIncludes(simplifiedContact, 'event.key === "Escape"', "email popover escape behavior");
expectIncludes(app, "isAtPageBottom", "scroll spy bottom fallback");
expectIncludes(app, "lastSectionId", "scroll spy last section fallback");
expectIncludes(simplifiedWork, "simplified-section--work", "summary-only work spacing contract");
expectIncludes(simplifiedWorkStyle, "simplified-section--how", "summary-only process spacing contract");
expectIncludes(simplifiedContact, "simplified-section--contact", "summary-only contact spacing contract");
expectIncludes(styles, ".simplified-section--work .section-intro", "work subtitle spacing contract");
expectIncludes(styles, ".simplified-section--contact .section-intro", "contact subtitle spacing contract");
expectIncludes(styles, ".email-popover", "email popover style contract");
expectIncludes(styles, ".proof-preview--signals .proof-preview-node { transform: none;", "signal preview centerline contract");

expectIncludes(simplifiedHero, 'href="#contact"', "hero contact CTA");
if (simplifiedWork.includes('className="primary-button proof-action"')) {
  throw new Error("Selected Work CTA must not use primary-button styling");
}

for (const selector of [
  ".simplified-hero",
  ".track-grid",
  ".track-card--product",
  ".track-card--planning",
  ".proof-grid",
  ".proof-preview--workflow",
  ".proof-preview--nodes",
  ".proof-preview--signals",
  ".proof-preview--pipeline",
  ".work-style-grid",
  ".detailed-intro-band"
]) {
  expectIncludes(styles, selector, "responsive style contract");
}

for (const breakpoint of [1160, 1040, 760, 480]) {
  expectIncludes(styles, `@media (max-width: ${breakpoint}px)`, "breakpoint contract");
}

console.log("Simplified portfolio structure contract passed.");
