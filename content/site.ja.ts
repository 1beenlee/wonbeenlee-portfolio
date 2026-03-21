import { assetPaths, contactLinks } from "@/lib/portfolio-config";
import type { SiteContent } from "@/lib/types";

export const siteJa: SiteContent = {
  locale: "ja",
  languageName: "日本語",
  seo: {
    title:
      "Wonbeen Lee — Global Product Manager | AI-enabled B2B SaaS, Product Ops, SRM/S2P",
    description:
      "AI活用型B2B SaaS、プロダクト企画基盤、ワークフローデザイン、SRM/S2P領域に取り組むGlobal Product Manager、Wonbeen Leeのポートフォリオ。"
  },
  nav: {
    switcherLabel: "言語",
    sections: [
      { id: "impact", label: "実績" },
      { id: "work", label: "仕事" },
      { id: "about", label: "紹介" },
      { id: "writing", label: "視点" },
      { id: "resume", label: "経歴" },
      { id: "contact", label: "連絡先" }
    ]
  },
  hero: {
    eyebrow: "AI活用型 Global Product Manager",
    title: "複雑な業務フローを、明確で拡張可能なプロダクト構造へ整理します。",
    summary:
      "emroでCaidentiaに携わるGlobal Product Managerです。SRM/S2P SaaSを軸に、プロダクト企画、ワークフロー設計、部門横断の実行設計、そしてAI活用の実務的な落とし込みに取り組んでいます。",
    currentRole: "Global Product Manager at emro",
    location: "Tokyo, Japan",
    ctas: [
      { label: "履歴書を見る", href: assetPaths.resume },
      {
        label: "LinkedIn",
        href: contactLinks.linkedinHref,
        external: true
      },
      { label: "連絡する", href: "#contact" }
    ]
  },
  impact: {
    title: "Selected Impact",
    intro:
      "エンタープライズ業務の複雑さを整理し、企画と実行の精度を高めてきた取り組みを公開可能な範囲でまとめています。",
    items: [
      {
        title: "グローバルSRM/S2P製品の企画を担当",
        detail:
          "emroではCaidentiaの企画業務を担い、複雑な利害関係や要件をプロダクト優先順位、企画資料、実行基準へ整理してきました。"
      },
      {
        title: "企画・UX・開発の受け渡しを明確化",
        detail:
          "企画ドキュメント、レビューの流れ、協業パターンを整え、曖昧さを減らしながらチームが前に進みやすい状態をつくってきました。"
      },
      {
        title: "B2B現場での実行支援に従事",
        detail:
          "GC Companyでの6か月間のインターンでは、部門横断のB2B運営とデータに基づく実行支援を担当し、エンタープライズ契約の獲得に関わる業務に貢献しました。"
      },
      {
        title: "Moawordleを企画・運営",
        detail:
          "韓国語WordleプロジェクトMoawordleを企画・運営し、50,000人以上のユニークプレイヤーと180,000回以上のプレイを記録しました。"
      }
    ]
  },
  work: {
    title: "Work Highlights",
    intro:
      "守秘義務に配慮しながら、複雑な業務をどのように整理し、プロダクトとして前に進めてきたかが伝わる形でまとめています。",
    cases: [
      {
        title: "エンタープライズ向けプロダクト企画基盤の整備",
        context:
          "Caidentiaは、複数の業務フローと関係者が絡むSRM/S2P領域のプロダクトです。",
        problem:
          "企画の品質と再現性を高めつつ、実行スピードを落とさない設計が必要でした。",
        role:
          "企画構造の整理、要求の翻訳、プロダクト範囲の明確化を担当しました。",
        approach:
          "企画資料、レビューの節目、受け渡しの流れを定義し、議論しやすく引き継ぎやすい形に整えました。",
        outcome:
          "企画と実行の進め方に一貫性を持たせ、関係者間での認識合わせをしやすくしました。"
      },
      {
        title: "AI活用を実務に接続するプロダクト視点",
        context:
          "AIへの関心は高い一方で、実務でどう価値に結びつけるかの整理が求められていました。",
        problem:
          "AIを抽象的に語るのではなく、企画品質や実行支援にどう役立てるかを具体化する必要がありました。",
        role:
          "AI活用の論点を整理し、プロダクト企画と運用設計の文脈に接続しました。",
        approach:
          "要約、構造化、企画支援など、実務の流れに組み込みやすいユースケースに焦点を絞りました。",
        outcome:
          "新規性よりも実行価値を重視した、地に足のついたAI活用の見方を形にしました。"
      },
      {
        title: "調達業務の複雑さをプロダクト判断へ変換",
        context:
          "調達・サプライヤー関連ワークフローは依存関係が多く、要件が複雑になりやすい領域です。",
        problem:
          "業務ロジックをそのまま扱うのではなく、プロダクト・UX・開発が共通理解できる形に落とし込む必要がありました。",
        role:
          "業務の複雑さを企画観点へ翻訳し、優先順位や協業の前提を整理しました。",
        approach:
          "論点を分解し、問題設定、責任範囲、企画入力を明確にする形で構造化しました。",
        outcome:
          "何を作るべきか、どこから議論すべきかが見えやすい状態をつくりました。"
      },
      {
        title: "Moawordleのリーン運営",
        context:
          "Moawordleは韓国語版Wordleをテーマにした軽量なサイドプロジェクトです。",
        problem:
          "運営負荷を抑えながら、継続利用されるシンプルな体験を作る必要がありました。",
        role:
          "プロダクト企画、開発調整、利用指標の確認を担当しました。",
        approach:
          "範囲を絞り、繰り返し使いたくなる核心体験に集中しました。",
        outcome:
          "低い運営負荷のまま、50,000人以上のユニークプレイヤーと180,000回以上のプレイを達成しました。"
      }
    ]
  },
  about: {
    title: "About",
    paragraphs: [
      "私はB2B SaaS、プロダクトオペレーション、ワークフロー設計、そしてAI活用型システムの交点で仕事をしています。現在は、複雑なエンタープライズ業務を、より明確で進めやすいプロダクト構造へ変えることに注力しています。",
      "私の強みは、何を作るかを考えるだけでなく、それを進めるための運営基盤まで含めて設計できる点です。企画資料、レビューの流れ、UXとの連携、関係者調整を一体のものとして扱います。",
      "今後は日本およびグローバルな環境で、丁寧なコミュニケーション、部門横断の実行力、そして現実的なAI活用が求められるプロダクト組織により深く関わっていきたいと考えています。"
    ]
  },
  writing: {
    title: "Writing & Insights",
    intro:
      "今後、公開記事として育てていきたいテーマです。現時点では、私がどのような問いを持ってプロダクトに向き合っているかを示しています。",
    items: [
      {
        tag: "AI x Product Ops",
        title: "AIはプロダクト実務のどこで効くのか",
        summary:
          "企画支援、要約、構造化といった場面で、AIが実務の品質をどう高められるかを整理します。"
      },
      {
        tag: "Enterprise UX",
        title: "複雑な業務を扱うための設計",
        summary:
          "画面の見た目より前に、業務フローをどう整理するかがUXの出発点になるという視点を扱います。"
      },
      {
        tag: "Global PM",
        title: "チームと市場をまたいで伝わる企画",
        summary:
          "ドキュメント、意思決定、コミュニケーションをどう整えると、国や職能をまたいでも進みやすくなるかを考えます。"
      }
    ]
  },
  resume: {
    title: "Resume Snapshot",
    intro:
      "グローバルなプロダクト職の採用文脈で重要になる経歴、学歴、受賞、言語情報を簡潔にまとめています。",
    snapshot: {
      experience: [
        {
          title: "Global Product Manager",
          subtitle: "emro Inc. · Caidentia",
          period: "2024年9月 – 現在",
          detail:
            "グローバルSRM/S2P SaaSにおけるプロダクト企画を担当し、ワークフロー整理、要求の翻訳、企画資料、AI活用の論点整理まで幅広く担っています。"
        },
        {
          title: "B2B Team Intern",
          subtitle: "GC Company",
          period: "2024年3月 – 2024年8月",
          detail:
            "B2B運営とデータに基づく実行支援に従事し、エンタープライズ契約の獲得につながる業務を支えました。"
        },
        {
          title: "Earlier product and startup experience",
          subtitle: "DiningCode, fanCake, Konkuk University",
          period: "2020年 – 2022年",
          detail:
            "エンタープライズ領域に進む前に、プロダクト、スタートアップ実行、サービス運営の基盤を築きました。"
        }
      ],
      education: [
        {
          title: "Global Business Certificate",
          subtitle: "University of Washington",
          period: "2022年 – 2023年",
          detail: "GPA 3.86/4.0"
        },
        {
          title: "BA in Media and Communication",
          subtitle: "Konkuk University",
          period: "2017年 – 2025年",
          detail: "GPA 3.64/4.0"
        },
        {
          title: "BA in Human ICT",
          subtitle: "Konkuk University",
          period: "2017年 – 2025年",
          detail: "Interdisciplinary major · GPA 3.91/4.0"
        }
      ],
      awards: [
        {
          title: "Frontier Spirit Award",
          subtitle: "emro Inc.",
          period: "2026年1月",
          detail:
            "主体的なオーナーシップと、プロダクト企画基準およびAI関連の取り組みへの貢献が評価されました。"
        },
        {
          title: "Excellence Award in Digital Market Idea Competition",
          subtitle: "KB Securities",
          period: "2022年5月",
          detail:
            "家族内の金融学習を支えるサービスアイデア提案で受賞しました。"
        },
        {
          title: "Excellence Award in Preliminary Start-up Package",
          subtitle: "KISED",
          period: "2021年11月",
          detail:
            "政府支援型スタートアッププログラムでの成果が評価されました。"
        }
      ],
      languages: [
        "韓国語 — ネイティブ",
        "英語 — 業務上十分に使用可能",
        "日本語 — 基礎〜限定的な業務対応レベル"
      ],
      resumeLabel: "履歴書をダウンロード"
    }
  },
  contact: {
    title: "Contact",
    intro:
      "AI活用型B2B SaaS、エンタープライズソフトウェア、あるいはグローバル志向のプロダクト組織に関するご相談や採用のご連絡を歓迎しています。",
    items: [
      {
        label: "Email",
        value: contactLinks.emailAddress,
        href: contactLinks.emailHref
      },
      {
        label: "LinkedIn",
        value: contactLinks.linkedinLabel,
        href: contactLinks.linkedinHref
      },
      {
        label: "GitHub",
        value: contactLinks.githubLabel,
        href: contactLinks.githubHref
      }
    ]
  },
  footer: {
    note: "エンタープライズプロダクト、ワークフロー設計、AI活用型システムに焦点を当てた、多言語対応の公開ポートフォリオです。"
  },
  ui: {
    heroMetaLabels: {
      currentRole: "現在の役割",
      location: "拠点"
    },
    workCaseLabels: {
      context: "背景",
      problem: "課題",
      role: "担当",
      approach: "進め方",
      outcome: "結果"
    },
    aboutSidebarTitle: "注力領域",
    aboutSidebarItems: [
      "AI活用型B2B SaaS",
      "プロダクト企画基盤",
      "エンタープライズワークフロー設計",
      "部門横断の実行",
      "日本・グローバル機会"
    ],
    resumeSectionLabels: {
      experience: "経験",
      educationAwards: "学歴・受賞",
      languages: "言語"
    }
  }
};
