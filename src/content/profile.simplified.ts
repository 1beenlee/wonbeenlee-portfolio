import type { Locale, NavItem } from "./types";

export type SimplifiedTrackId = "product" | "planning";
export type SimplifiedPreviewVariant = "workflow" | "nodes" | "signals" | "pipeline";

export type SimplifiedCaseCard = {
  caseId: string;
  track: SimplifiedTrackId;
  category: string;
  title: string;
  summary: string;
  chips: [string, string, string];
  preview: {
    variant: SimplifiedPreviewVariant;
    label: string;
    title: string;
    items: string[];
  };
};

export type SimplifiedCopy = {
  nav: NavItem[];
  hero: {
    eyebrow: string;
    headline: string;
    description: string;
    domainLine: string;
    primaryAction: string;
    contactAction: string;
    detailedAction: string;
  };
  tracks: {
    id: SimplifiedTrackId;
    title: string;
    description: string;
    items: [string, string, string, string];
    proofs: [string, string];
  }[];
  selectedWork: {
    kicker: string;
    title: string;
    body: string;
    action: string;
    cases: SimplifiedCaseCard[];
  };
  workStyle: {
    kicker: string;
    title: string;
    steps: { title: string; body: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    linkedin: string;
    email: string;
    emailPopoverTitle: string;
    copyEmail: string;
    emailCopied: string;
    emailCopyFailed: string;
    github: string;
    detailed: string;
  };
  detailedIntro: { eyebrow: string; title: string; body: string; returnLabel: string };
};

const copies: Record<Locale, SimplifiedCopy> = {
  ko: {
    nav: [{ label: "대표 작업", href: "#work" }, { label: "일하는 방식", href: "#how" }, { label: "연락", href: "#contact" }],
    hero: {
      eyebrow: "Wonbeen Lee",
      headline: "Product PM × Planning AX",
      description: "제품을 기획하고, 기획이 반복되게 만듭니다.",
      domainLine: "AI 기반 SRM/S2P 제품 기획 · Product Ops · Agentic AI",
      primaryAction: "대표 작업 보기",
      contactAction: "연락하기",
      detailedAction: "상세 포트폴리오 보기"
    },
    tracks: [
      { id: "product", title: "Product PM", description: "제품 방향을 정합니다.", items: ["SRM/S2P", "Agentic AI", "Feature Planning", "Release"], proofs: ["AI Workplace", "9+ Demo"] },
      { id: "planning", title: "Planning AX", description: "기획이 반복되게 만듭니다.", items: ["Jira", "AI Skills", "Workflow Automation", "Review System"], proofs: ["320+ Epics", "12x Gain"] }
    ],
    selectedWork: {
      kicker: "Selected Work",
      title: "대표 작업",
      body: "제품을 설계하고, 기획 방식을 정비한 일들",
      action: "자세히 보기",
      cases: [
        { caseId: "agentic-ai", track: "product", category: "Product PM / AI", title: "Procurement AI Workflow", summary: "구매 업무에 맞는 AI Workplace 흐름과 권한 기반 검토 시나리오를 설계했습니다.", chips: ["AI Workplace", "Caidentia", "Permission guard"], preview: { variant: "workflow", label: "AI workflow sketch", title: "AI Workplace 업무 흐름", items: ["User intent", "Object", "Guard", "AI suggestion", "Action"] } },
        { caseId: "ai-skills", track: "planning", category: "Planning AX / AI", title: "AI Skill System", summary: "planning-doc-writer와 Linear 연계를 포함한 반복 가능한 기획 Skill 흐름을 정리했습니다.", chips: ["planning-doc-writer", "Linear", "release-prep"], preview: { variant: "nodes", label: "Skill workflow map", title: "기획 Skill 파이프라인", items: ["Intake", "Planning", "Prototype", "Review", "Release"] } },
        { caseId: "gartner-demo", track: "product", category: "Product PM / GTM", title: "Demo & Market Intelligence", summary: "Gartner 대응과 Storylane 데모 준비를 연결해 제품 설명력을 높였습니다.", chips: ["Gartner", "Storylane", "9+ scenarios"], preview: { variant: "signals", label: "Demo preparation flow", title: "시장 신호에서 데모까지", items: ["Market signals", "Storyline", "Storylane demo", "GTM feedback"] } },
        { caseId: "product-ops", track: "planning", category: "Planning AX / Ops", title: "Jira-Confluence Product Ops", summary: "Jira와 Confluence를 기준으로 요구사항, 리뷰, 릴리즈 흐름을 정리했습니다.", chips: ["Jira", "Confluence", "320+ epics"], preview: { variant: "pipeline", label: "Planning ops flow", title: "기획 운영 흐름", items: ["Intake", "Analyze", "Prioritize", "Deliver"] } }
      ]
    },
    workStyle: { kicker: "How I Work", title: "문제를 정리하고, 실행 가능한 구조로 바꿉니다.", steps: [{ title: "Clarify", body: "문제와 기준을 정리합니다." }, { title: "Structure", body: "흐름과 역할을 나눕니다." }, { title: "Systemize", body: "반복 가능한 방식으로 만듭니다." }, { title: "Communicate", body: "결정과 근거를 공유합니다." }] },
    contact: { kicker: "Contact", title: "제품·AI·Product Ops 관련 대화를 환영합니다", body: "제품 기획, AI workflow, Product Ops에 대한 의견과 제안은 LinkedIn이나 이메일로 편하게 연락해 주세요.", linkedin: "LinkedIn에서 보기", email: "이메일로 연락하기", emailPopoverTitle: "이메일 주소", copyEmail: "복사", emailCopied: "이메일 주소를 복사했습니다.", emailCopyFailed: "복사하지 못했습니다. 주소를 직접 선택해 주세요.", github: "GitHub 보기", detailed: "상세 포트폴리오 보기" },
    detailedIntro: { eyebrow: "Detailed Portfolio", title: "상세 포트폴리오", body: "핵심 요약에서 다룬 사례를 실제 기여, 결과, 산출물 흐름 중심으로 더 자세히 정리했습니다.", returnLabel: "핵심 요약 보기" }
  },
  en: {
    nav: [{ label: "Selected Work", href: "#work" }, { label: "How I Work", href: "#how" }, { label: "Contact", href: "#contact" }],
    hero: { eyebrow: "Wonbeen Lee", headline: "Product PM × Planning AX", description: "I shape products and build repeatable ways to plan them.", domainLine: "AI-enabled SRM/S2P · Product Ops · Agentic AI", primaryAction: "View selected work", contactAction: "Contact", detailedAction: "View detailed portfolio" },
    tracks: [
      { id: "product", title: "Product PM", description: "Sets the product direction.", items: ["SRM/S2P", "Agentic AI", "Feature Planning", "Release"], proofs: ["AI Workplace", "9+ Demos"] },
      { id: "planning", title: "Planning AX", description: "Makes planning repeatable.", items: ["Jira", "AI Skills", "Workflow Automation", "Review System"], proofs: ["320+ Epics", "12x Gain"] }
    ],
    selectedWork: {
      kicker: "Selected Work", title: "Selected work", body: "Products I shaped and planning systems I improved", action: "View details",
      cases: [
        { caseId: "agentic-ai", track: "product", category: "Product PM / AI", title: "Procurement AI Workflow", summary: "Designed an AI Workplace flow and permission-aware review scenarios for procurement.", chips: ["AI Workplace", "Caidentia", "Permission guard"], preview: { variant: "workflow", label: "AI workflow sketch", title: "AI Workplace workflow", items: ["User intent", "Object", "Guard", "AI suggestion", "Action"] } },
        { caseId: "ai-skills", track: "planning", category: "Planning AX / AI", title: "AI Skill System", summary: "Built a repeatable planning Skill flow connecting planning-doc-writer with Linear.", chips: ["planning-doc-writer", "Linear", "release-prep"], preview: { variant: "nodes", label: "Skill workflow map", title: "Planning skill pipeline", items: ["Intake", "Planning", "Prototype", "Review", "Release"] } },
        { caseId: "gartner-demo", track: "product", category: "Product PM / GTM", title: "Demo & Market Intelligence", summary: "Connected Gartner response planning with Storylane demo preparation to sharpen the product story.", chips: ["Gartner", "Storylane", "9+ scenarios"], preview: { variant: "signals", label: "Demo preparation flow", title: "From signal to demo", items: ["Market signals", "Storyline", "Storylane demo", "GTM feedback"] } },
        { caseId: "product-ops", track: "planning", category: "Planning AX / Ops", title: "Jira-Confluence Product Ops", summary: "Structured requirements, reviews, and releases around Jira and Confluence.", chips: ["Jira", "Confluence", "320+ epics"], preview: { variant: "pipeline", label: "Planning ops flow", title: "Planning operations", items: ["Intake", "Analyze", "Prioritize", "Deliver"] } }
      ]
    },
    workStyle: { kicker: "How I Work", title: "Turn unclear problems into structures teams can use.", steps: [{ title: "Clarify", body: "Set the problem and criteria." }, { title: "Structure", body: "Separate the flow and roles." }, { title: "Systemize", body: "Make the approach repeatable." }, { title: "Communicate", body: "Share decisions and rationale." }] },
    contact: { kicker: "Contact", title: "Conversations about product, AI, and Product Ops are welcome", body: "For thoughts or proposals on product planning, AI workflows, or Product Ops, feel free to reach out on LinkedIn or by email.", linkedin: "View LinkedIn", email: "Send an email", emailPopoverTitle: "Email address", copyEmail: "Copy", emailCopied: "Email address copied.", emailCopyFailed: "Copy failed. Select the address to copy it manually.", github: "View GitHub", detailed: "View detailed portfolio" },
    detailedIntro: { eyebrow: "Detailed Portfolio", title: "Detailed portfolio", body: "A closer look at the contributions, outcomes, and deliverable flows behind the cases in the key summary.", returnLabel: "View key summary" }
  },
  ja: {
    nav: [{ label: "主な実績", href: "#work" }, { label: "仕事の進め方", href: "#how" }, { label: "お問い合わせ", href: "#contact" }],
    hero: { eyebrow: "Wonbeen Lee", headline: "Product PM × Planning AX", description: "プロダクトを企画し、その企画が繰り返し機能する仕組みをつくります。", domainLine: "AI対応SRM/S2P · Product Ops · Agentic AI", primaryAction: "主な実績を見る", contactAction: "問い合わせる", detailedAction: "詳細ポートフォリオを見る" },
    tracks: [
      { id: "product", title: "Product PM", description: "プロダクトの方向性を定めます。", items: ["SRM/S2P", "Agentic AI", "機能企画", "リリース"], proofs: ["AI Workplace", "9+ Demos"] },
      { id: "planning", title: "Planning AX", description: "企画を再現可能な仕組みにします。", items: ["Jira", "AI Skills", "業務自動化", "レビュー設計"], proofs: ["320+ Epics", "12x Gain"] }
    ],
    selectedWork: {
      kicker: "Selected Work", title: "主な実績", body: "プロダクト設計と企画プロセスの改善事例", action: "詳しく見る",
      cases: [
        { caseId: "agentic-ai", track: "product", category: "Product PM / AI", title: "Procurement AI Workflow", summary: "調達業務に合わせたAI Workplaceの流れと、権限に基づくレビューシナリオを設計しました。", chips: ["AI Workplace", "Caidentia", "Permission guard"], preview: { variant: "workflow", label: "AI workflow sketch", title: "AI Workplaceの業務フロー", items: ["User intent", "Object", "Guard", "AI suggestion", "Action"] } },
        { caseId: "ai-skills", track: "planning", category: "Planning AX / AI", title: "AI Skill System", summary: "planning-doc-writerとLinearを連携し、繰り返し使える企画Skillの流れを整理しました。", chips: ["planning-doc-writer", "Linear", "release-prep"], preview: { variant: "nodes", label: "Skill workflow map", title: "企画Skillパイプライン", items: ["Intake", "Planning", "Prototype", "Review", "Release"] } },
        { caseId: "gartner-demo", track: "product", category: "Product PM / GTM", title: "Demo & Market Intelligence", summary: "Gartner対応とStorylaneのデモ準備をつなぎ、製品の伝え方を改善しました。", chips: ["Gartner", "Storylane", "9+ scenarios"], preview: { variant: "signals", label: "Demo preparation flow", title: "市場シグナルからデモへ", items: ["Market signals", "Storyline", "Storylane demo", "GTM feedback"] } },
        { caseId: "product-ops", track: "planning", category: "Planning AX / Ops", title: "Jira-Confluence Product Ops", summary: "JiraとConfluenceを基準に、要件、レビュー、リリースの流れを整理しました。", chips: ["Jira", "Confluence", "320+ epics"], preview: { variant: "pipeline", label: "Planning ops flow", title: "企画運用フロー", items: ["Intake", "Analyze", "Prioritize", "Deliver"] } }
      ]
    },
    workStyle: { kicker: "How I Work", title: "課題を整理し、実行できる仕組みに変えます。", steps: [{ title: "Clarify", body: "課題と判断基準を整理します。" }, { title: "Structure", body: "流れと役割を分けます。" }, { title: "Systemize", body: "繰り返し使える形にします。" }, { title: "Communicate", body: "判断と根拠を共有します。" }] },
    contact: { kicker: "Contact", title: "プロダクト・AI・Product Opsに関する対話を歓迎します", body: "プロダクト企画、AIワークフロー、Product Opsへのご意見やご提案は、LinkedInまたはメールでお気軽にご連絡ください。", linkedin: "LinkedInを見る", email: "メールを送る", emailPopoverTitle: "メールアドレス", copyEmail: "コピー", emailCopied: "メールアドレスをコピーしました。", emailCopyFailed: "コピーできませんでした。アドレスを選択して手動でコピーしてください。", github: "GitHubを見る", detailed: "詳細ポートフォリオを見る" },
    detailedIntro: { eyebrow: "Detailed Portfolio", title: "詳細ポートフォリオ", body: "概要で紹介した事例を、実際の貢献、成果、成果物の流れまで詳しくまとめています。", returnLabel: "概要を見る" }
  }
};

export function getSimplifiedCopy(locale: Locale): SimplifiedCopy {
  return copies[locale];
}
