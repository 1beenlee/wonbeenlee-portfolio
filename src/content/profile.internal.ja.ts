import type { SiteCopy } from "./types";

export const internalJa: SiteCopy = {
  meta: {
    audience: "internal",
    locale: "ja",
    label: "AI購買PMポートフォリオ",
    alternatePath: "/en"
  },
  nav: [
    { label: "ミッション", href: "#positioning" },
    { label: "主要プロジェクト", href: "#work" },
    { label: "運営体系", href: "#productOps" },
    { label: "評価指標", href: "#metrics" },
    { label: "スタック", href: "#stack" },
    { label: "キャリア", href: "#timeline" },
    { label: "コンタクト", href: "#contact" }
  ],
  hero: {
    title: "購買SaaS、Agentic AI、Product Opsを統合するCaidentia PM",
    subtitle:
      "emroにて、AI搭載型S2P SaaS『Caidentia』のグローバル製品企画を担当。Jiraを用いた実行プロセス、AI Workplace戦略、市場インサイトの分析、ドキュメントの資産化などを再現性のある運営システムへと統合しています。",
    primaryAction: "主要プロジェクトを見る",
    primaryHref: "#work",
    secondaryAction: "Korean"
  },
  profileCard: {
    eyebrow: "概要",
    summary:
      "再構成したエンタープライズSaaSの画面は、業務フローの構造のみを示しています。内部システム画面、URL、機密顧客データ、チケットキー、サーバー名、実装の詳細は開示していません。",
    highlights: [
      { label: "役割", value: "Global Product Manager" },
      { label: "ドメイン", value: "SRM/S2P SaaS" },
      { label: "担当", value: "Agentic AI + Product Ops" },
      { label: "ビザ", value: "配偶者ビザ（就労制限なし・ビザスポンサー不要）" }
    ]
  },
  sections: {
    positioning: {
      kicker: "Positioning / ミッション",
      title: "複雑な購買業務を、持続可能なシステム体系へと構造化します。",
      body:
        "私の役割は、製品企画、AI業務設計、Jira-Confluenceの運用プロセス、そして市場分析に基づくコミュニケーションが交差する領域にあります。AIを単なる生産性向上ツールとして捉えるのではなく、購買オブジェクト、権限ガード、規格ドキュメント、リリースサイクルといった業務全体のフローに組み込み、再現性を確保します。",
      pillars: [
        {
          title: "購買ドメインの専門性",
          body:
            "PR、RFx、契約、PO、ASN、検収、請求、品目、サプライヤー、支出分析、ロールベースの権限ガードといったS2P/SRMの業務要件に基づいて製品を設計します。"
        },
        {
          title: "フローとしてのAgentic AI",
          body:
            "検索、対話、エージェントモード、ドキュメント解析（RAG）、適切なアクション接続を統合した、実用的なAI Workplaceの方向性を設計します。"
        },
        {
          title: "Product Opsの実行体系",
          body:
            "JiraとConfluenceを活用し、課題の階層構造、テンプレートの標準化、リリースコミュニケーション、意思決定トレースなどをシステムとして定着させます。"
        }
      ]
    },
    selectedWork: {
      kicker: "主要プロジェクト",
      title: "AI、Product Ops、デモ実演、企画AXを連携させる4つの実践事例。",
      body:
        "各事例は、製品の課題、運用ルーティン、業務設計の判断、実証された結果を中心にまとめています。実際のJiraキー、社内URL、顧客名、関係者名、機密性の高いシステム仕様などの詳細は除外しています。",
      cases: [
        {
          id: "agentic-ai",
          label: "事例 A",
          title: "購買業務のためのAgentic AIとAI Workplace",
          category: "Ask Caidentia / AI Workplace",
          problem:
            "エンタープライズの購買ユーザーは、役割や権限、複数のメニューや書類を行き来しながら業務を行います。AIが購買オブジェクト、アクセスルール、検索結果、次の行動とシームレスに紐づかなければ、単なるチャットボットでは実務のフローに浸透しません。",
          contribution:
            "ドキュメント検索、マルチターン対話、メニュー遷移、権限に応じたレスポンス、Chat・Agent Mode・File Insightを束ねるAI Workplaceのロードマップを策定しました。PR-to-RFx自動化、評価意見書の自動作成、内部エージェントツールと連動するフローです。",
          outcome:
            "MVP/Beta段階からAI Workplaceへの展開を見据えた、購買特化型AIのUX構造設計に貢献しました。社内画面や開発ロードマップなどの機密詳細は除外しています。",
          metrics: [
            "購買オブジェクトを認識するAIフロー",
            "権限ガードを反映したAI対話モデル",
            "Chat、Agent、File Insightを統合したAI Workplace設計"
          ],
          previewTitle: "AI Workplace ワークフロー",
          previewSteps: [
            "ユーザーの意図",
            "オブジェクト認識",
            "権限チェック",
            "結果レビュー",
            "次のアクション"
          ],
          tags: [
            "再構成画面",
            "機密詳細を匿名化",
            "顧客データなし",
            "実績に基づく"
          ],
          summary: "Chat、Agent Mode、File Insightを統合したAI Workplaceの方向性を策定し、購買依頼から承認、履歴保存までのフローを自動化しました。",
          highlights: [
            "購買オブジェクトと権限に基づくAIインタラクションモデル of 設計",
            "ドキュメント検索v2やPR-to-RFx自動化などのエージェントフロー設計",
            "Chat、Agent、File Insightを統合したAI Workplaceロードマップの確立"
          ],
          cardMetrics: [
            { label: "購買オブジェクト認識AIフロー" },
            { label: "権限ガードを反映したAI対話モデル" },
            { label: "AI Workplaceロードマップ" }
          ]
        },
        {
          id: "ai-skills",
          label: "事例 B",
          title: "製品企画AXのためのAI Skillエコシステム",
          category: "AI Skills / Product Planning AX",
          problem:
            "有用なプロンプトやアプローチが個人のノウハウにとどまっていては、組織全体へのAI導入や業務改善の定着は困難です。共有可能な資産、レビュー可能なルール、標準プロセスに昇華させて初めて、チーム全体の能力になります。",
          contribution:
            "Jira運用、企画ドキュメント作成、用語統一、プロトタイプ生成、成果物レビュー、リリース準備、ユーザーフロー、ポートフォリオ管理などを自動化・サポートするAI Skillエコシステムを構築しました。アイデア受付から企画、検証、リリースまでのパイプラインとしてAIを配置しています。",
          outcome:
            "単発のプロンプト利用を、製品企画AXのための反復可能な開発エコシステムへと転換しました。10以上の専用AI Skillを定義し、15回以上のバージョンアップを重ねて企画・開発フロー全体を高速化しています。",
          metrics: [
            "10以上の専用AI Skill",
            "15回以上のバージョンアップデート",
            "アイデア受付からリリースまでの企画パイプライン化"
          ],
          previewTitle: "AI Skill エコシステム",
          previewSteps: [
            "アイデア受付",
            "要件定義",
            "プロトタイプ",
            "品質レビュー",
            "リリース準備"
          ],
          tags: [
            "再構成画面",
            "機密詳細を匿名化",
            "実績に基づく",
            "反復可能なフロー"
          ],
          summary: "製品企画AXの加速に向け、planning-doc-writer、term-manager、caid-ppg-design-system、prototype-template-maker、user-flow、output-reviewer、caid-jira、linear-pm、compound-engineering、release-prepなどの企画実務全体を自動化し自律改善する10種のAI Skillを設計・構築しました。",
          highlights: [
            "企画文書作成、用語翻訳、モックアップ生成など10種の専用スキルを設計",
            "Jira/Linear連携を介したバックログ整理およびチケット管理の自動化",
            "エラーフィードバックログに基づく自律的スキル改善（Compound Engineering）の適用"
          ],
          cardMetrics: [
            { value: "10種", label: "専用AI Skill" },
            { value: "15回+", label: "バージョンアップ" },
            { value: "v3.5.0", label: "主要スキルバージョン" }
          ],
          skillsList: [
            {
              name: "planning-doc-writer",
              version: "v3.5.0",
              updatedAt: "2026-03-26",
              description: "MRD、One Pager、PRD、FRD、Lo-fiワイヤーフレーム、ユーザー体験マップ（UJM）の企画文書を一括生成します。",
              principle: "Ready条件の確認と他モジュールへの影響度分析を含め、役割定義やSKUに応じたマークダウンの設計書を構築し、Confluenceへ自動発行します。",
              impact: "要件定義およびPRD作成にかかる時間を1〜2日から30分〜1時間へと90%以上短縮しました。"
            },
            {
              name: "term-manager",
              version: "v2.0.0",
              updatedAt: "2026-06-05",
              description: "標準用語集の検証および多言語翻訳キーの一貫性チェックを行います。",
              principle: "1,910語の標準用語、892のボタン辞書、12,030の多言語ライブラリに基づき、日英の用語マッピング確認と名称競合を例外処理ルールに沿って自動で整理します。",
              impact: "100件以上の用語・翻訳検証にかかる時間を半日から数分以内へと大幅に短縮しました。"
            },
            {
              name: "caid-ppg-design-system",
              version: "v0.75",
              updatedAt: "2026-06-08",
              description: "企画書ベースのHTMLインタラクティブプロトタイプ自動変換（UX LayerとしてInteraction Hint & Prototype Navigatorを搭載）",
              principle: "Grayscale Lofiモード、Caidentia 1.0 Violetモード、Neo Blueモードのスタイル選択に対応。デモ実演や仕様レビューを効率化するため、画面内での操作可能エリアを明示する『Interaction Hint』や、画面遷移・多言語検証パネルを提供する『Prototype Navigator』UXレイヤーを自動組み込みします。",
              impact: "モックアップ生成とUI仕様検証のプロセスを2〜5日から10〜30分以内へと短縮しました。"
            },
            {
              name: "prototype-template-maker",
              version: "v1.1.0",
              updatedAt: "2026-05-15",
              description: "ローカル検証可能なMDI（マルチドキュメントインターフェース）の画面構造テンプレート作成",
              principle: "Mock Dataを含む独立実行型のHTMLを生成し、実際のリリース前におけるレイアウト配置やタブ間のインタラクション検証を大幅に効率化します。",
              impact: "画面テンプレートの構築とレイアウト動作検証の期間を3日から15分以内へと短縮しました。"
            },
            {
              name: "user-flow",
              version: "v1.2.0",
              updatedAt: "2026-05-20",
              description: "User Storyの構造化定義とExcel形式のQAテストケースシード資料の作成",
              principle: "Figma上のワイヤーフレームや企画要件をJTBD（Jobs-to-be-Done）基準で整理し、開発スプリントですぐに使える機能テストケースExcelを自動でビルドします。",
              impact: "QAテストケースシナリオの設計と起票にかかる時間を2時間から30分以内へと短縮しました。"
            },
            {
              name: "output-reviewer",
              version: "v1.0.5",
              updatedAt: "2026-06-12",
              description: "企画書や設計仕様書が用語標準やデザインシステム規則に準拠しているかの多角的評価",
              principle: "生成されたPRDとUser Flow Excel間の不整合、多言語の整合性、UIコンポーネントライブラリガイドの遵守度などを検証し、優先度の明確なレビューレポートを作成します。",
              impact: "企画成果物の整合性・品質レビュー時間を1〜2時間から10〜20分へと削減し、仕様上の欠陥防止に貢献しました。"
            },
            {
              name: "caid-jira",
              version: "v1.5.0",
              updatedAt: "2026-06-01",
              description: "企画Jiraチケットの移管およびバックログの動的同期",
              principle: "Atlassian DC APIを介して企画Jira上のイニシアティブや機能を制御し、要件定義完了やデザイン・開発フェーズ移行に伴うステータス更新を自動処理します。",
              impact: "チケットの一括起票やステータス制御の自動化により、Jira運用コストを95%削減しました。"
            },
            {
              name: "linear-pm",
              version: "v2.1.0",
              updatedAt: "2026-06-10",
              description: "Linearベースの開発スプリント進捗集計と週次報告（Weekly）の自動化",
              principle: "Linear APIを活用して開発バックログや課題ステータス、リリースサイクルの進捗率を自動で集計し、成長レビュー用のポートフォリオ候補も記録・保存します。",
              impact: "サイクル進捗の可視化と週次報告書の原案作成時間を1時間から5分以内へと削減しました。"
            },
            {
              name: "compound-engineering",
              version: "v0.9.0",
              updatedAt: "2026-06-13",
              description: "ユーザーフィードバックに基づくAI Skillの自己改善ループの設計",
              principle: "業務遂行中に発生したユーザーの修正操作やエラーシグナルをバックログとして蓄積し、AI Skill自体のアップデートへとつなげる自律的な改善プロセスを構築しました。",
              impact: "操作エラーログに基づくスパンごとのAI Skill機能改善とバージョンアッププロセスを自動化しました。"
            },
            {
              name: "release-prep",
              version: "v1.2.0",
              updatedAt: "2026-04-21",
              description: "機能別リリースノートのドラフトおよびデモ実演用シナリオスクリプトの作成",
              principle: "Jiraの要件、PRD、ユーザーフローを解析し、社内のドキュメント規格に準拠したマークダウン形式のリリースノートスニペットと、デモ実演のナレーション原稿を構築します。",
              impact: "リリース資料および実演台本の作成コストを80%以上削減しました。"
            }
          ]
        },
        {
          id: "product-ops",
          label: "事例 C",
          title: "Jira-Confluenceを活用したプロダクト企画の運営体系",
          category: "Market Intelligence in Gartner, Salesforce, SAMSUNG",
          problem:
            "製品ロードマップ、要件定義、進捗管理、意思決定の履歴、リリースプロセスがばらばらに機能していると、大企業向け製品で安定した開発ペースを維持するのは困難です。",
          contribution:
            "企画の階層構造、ドキュメントのテンプレート化、進行ステータスの同期、リリースノート作成のルーティンをJira-Confluenceベースで統合・システム化しました。PO変更管理、ウィジェット型ホーム、契約AI、Item 360などの機能要件定義もこのプロセスを通じて管理しています。",
          outcome:
            "320件以上のJira Epicを構造化し、企画完了から開発受け渡しまでのプロセスで12倍の効率化を実現しました。定常的な仕様作成にかかる時間を60分から5分へと短縮しました。",
          metrics: [
            "320件以上のJira Epicの階層化",
            "特定プロセスにおける12倍の効率改善",
            "Jira-Confluenceによるリリース・ドキュメント管理"
          ],
          previewTitle: "企画管理ダッシュボード",
          previewSteps: [
            "目標定義",
            "イニシアティブ",
            "機能セット",
            "機能要件",
            "リリースノート",
            "デモ実演"
          ],
          tags: [
            "再構成画面",
            "機密詳細を匿名化",
            "実績に基づく",
            "実証済みのワンフロー"
          ],
          summary: "アイデアの受付からリリース、フィードバック収集までの全プロダクト要件定義サイクルを、Jira-Confluenceベースの統一運用ルーティンとして定着させました。",
          highlights: [
            "要件定義の階層、テンプレート、ステータス同期、リリース工程の標準設計",
            "PO変更管理、ダッシュボードポータル、契約AI、品目360度ビュー等の実装サポート",
            "機密性の高いメタ情報を外部に出さない、円滑な開発スプリント移管プロセスの構築"
          ],
          cardMetrics: [
            { value: "320+", label: "Jira Epic構造化" },
            { value: "12x", label: "企画実行効率の向上" },
            { value: "60分 → 5分", label: "要件定義の作成時間" }
          ]
        },
        {
          id: "gartner-demo",
          label: "事例 D",
          title: "GTMデモ支援と市場インサイト分析",
          category: "Market Intelligence in Gartner, Salesforce, SAMSUNG",
          problem:
            "グローバルSaaSのデモ実演および主要アナリスト評価（IDC MarketScape 2025 S2P/P2P Major PlayerやThe Hackett Group 2025-2026 '50 to Know'選定製品）においては、AI S2P/P2Pの価値をわかりやすく端的に説明する必要があります。製品のコア価値、デモ用ダミーデータ、アナリスト向けのベンチマーク文脈を整えることで、高い評価につながります。",
          contribution:
            "デモ用シナリオの設計、デモ環境の構築およびStorylaneを用いた操作ガイドの作成、リアルタイムの課題対応を担当し、主要グローバル調査機関（IDC、Forrester、Hackettなど）向けのアナリストベンチマーク製品分析資料の整理とデモ準備を主導・支援しました。機密保持のため、実際の顧客対話や特定フィードバックなどは除外しています。",
          outcome:
            "主要デモシナリオ3件とサポートシナリオ9件を構築し、グローバルアナリスト評価（Major Playerや50 to Knowなど）における製品プレゼンデータの整備をサポートし、製品改善に向けた市場フィードバックループを確立しました。",
          metrics: [
            "3回以上の市場インサイト収集セッション",
            "9件以上の営業・デモ用シナリオ",
            "グローバルアナリスト評価対応および100件以上の市場シグナルの分析"
          ],
          previewTitle: "デモ・評価対応プロセス",
          previewSteps: [
            "営業・顧客の要件",
            "デモデータとベンチマーク",
            "シナリオ・スクリプト",
            "課題対応と改善点",
            "市場フィードバック分析"
          ],
          tags: [
            "再構成画面",
            "実績に基づく"
          ],
          summary: "グローバルGartner Symposium等の主要イベント向けデモ環境・シナリオを整備し、グローバル調査機関（IDC、Forrester、Hackett等）による評価に向けて製品説明資料を作成・支援しました。",
          highlights: [
            "グローバルビジネス要件に沿った、ストーリーに基づくGTMデモシナリオの策定",
            "グローバル調査機関（IDC、Forrester、Hackett等）向け製品要件・実績データの提供および評価準備支援",
            "100件以上の市場情報分析を通じた、プロダクトと営業戦略の同期サポート"
          ],
          cardMetrics: [
            { value: "3回+", label: "インサイトセッション" },
            { value: "9件+", label: "デモシナリオ" },
            { value: "100件+", label: "市場シグナル収集" }
          ]
        }
      ]
    },
    productOps: {
      kicker: "Product Ops / AI & 運営体系",
      title: "AI製品企画プロセスと協業基盤の設計",
      body: "製品のアイデア創出から要件定義、開発実行、リリース、測定、そして継続的な改善に至るプロダクトライフサイクル全体の運営プロセスを構築・標準化しました。AI技術を部分的な業務支援として終わらせず、各ステップの成果物品質と意思決定を高度化する役割を担わせています。",
      stages: [
        {
          id: "discover",
          title: "発見",
          items: ["市場およびユーザー調査", "課題定義の検証", "機会規模の分析"]
        },
        {
          id: "define",
          title: "定義",
          items: ["製品戦略の策定", "ロードマップと優先度設定", "目標指標（KPI）設計"]
        },
        {
          id: "build",
          title: "構築",
          items: ["アジャイル開発実行", "クロスファンクション連携", "品質と使いやすさの保証"]
        },
        {
          id: "launch",
          title: "リリース",
          items: ["GTM（市場参入）計画", "製品変更の管理体系", "展開とユーザー教育"]
        },
        {
          id: "measure",
          title: "測定",
          items: ["利用データ分析", "AIによる改善示唆", "反復的なフィードバック"]
        }
      ],
      copilotTitle: "AI Copilot",
      copilotBody: "製品企画ライフサイクル全体にわたり、インテリジェントなデータ解析や文書チェック、作業の自動化を実行します。",
      copilotFeatures: ["インサイト抽出", "予測分析", "作業自動化"],
      loopLabel: "継続的自律改善ループ"
    },
    evidenceMetrics: {
      kicker: "実績指標",
      title: "測定可能な業務規模と影響範囲",
      body:
        "以下の指標は、取り組んできたプロダクトマネジメント業務のスケールと方向性を示しています。各データが何を反映し、開示範囲において何を保護しているかもあわせて明記しています。",
      metrics: [
        {
          label: "構造化されたJira Epic",
          value: "320+",
          note: "企画要件の管理構造基準です。実際のURL、機密属性、および課題詳細は除外しています。"
        },
        {
          label: "企画効率の向上",
          value: "12x",
          note: "一部の要件定義から開発受け渡しまでのルーティンで、作業時間が60分から5分に削減された結果に基づきます。"
        },
        {
          label: "市場情報の収集・調査",
          value: "3+",
          note: "グローバルアナリスト評価や大規模デモイベントへの対応を含みます。"
        },
        {
          label: "GTM用デモシナリオ",
          value: "9+",
          note: "グローバルビジネス向けの営業支援やデモ実演を目的として構築したシナリオ群です。"
        },
        {
          label: "専用AI Skill",
          value: "10+",
          note: "単発の対話にとどまらず、プロダクト要件定義プロセスに統合・再現された自作のAI機能群です。"
        },
        {
          label: "Skillのアップデート履歴",
          value: "15+",
          note: "企画書作成、翻訳、プロトタイプ生成、レビュー等の各プロセスにおいて繰り返された改善記録です。"
        },
        {
          label: "LinkedInアティクル",
          value: "5",
          note: "AIの導入、要件設計、製品評価、ガバナンス設計に関して発信した考察記事です。"
        }
      ]
    },
    operatingStack: {
      kicker: "運営スタック",
      title: "ツール名称にとどまらない、どのようなケイパビリティを実現したか",
      body:
        "単なるツールアイコンの羅列ではありません。企画、AI業務構築、市場調査、デモ実演がどのような再現可能な運用システムとして稼働しているかを示します。",
      items: [
        {
          tool: "Jira",
          capability: "企画階層構造の確立、ステータス変更の管理、開発連携、チケットイニシャル整理",
          evidence: "320件以上のJira Epicおよびバックログ階層設計"
        },
        {
          tool: "Confluence",
          capability: "ドキュメント再利用化、リリースノート履歴の蓄積、意思決定プロセスの可視化",
          evidence: "Jira-Confluenceの連動型プロダクト運営"
        },
        {
          tool: "Storylane / demo tooling",
          capability: "顧客誘導用のインタラクティブデモ構築、デモシナリオの構造化、営業支援資産",
          evidence: "営業サポートおよび9件以上のデモシナリオ"
        },
        {
          tool: "AI Skills",
          capability: "企画文書の高速生成、用語検証、HTMLモックアップ作成、成果物チェック、リリース準備の自動化",
          evidence: "10以上のAI Skill、15回以上のバージョンアップ",
          hidden: true
        },
        {
          tool: "Figma / synthetic prototypes",
          capability: "機密情報を排除した概念画面の作成、仕様レビュー用デザインの整合サポート",
          evidence: "代表的な画面構造を共有するための概念プレビュー"
        },
        {
          tool: "Linear",
          capability: "linear-pmやcompound-engineeringスキルと連動したタスク・エラーログの自動トラッキング",
          evidence: "バックログ課題の体系的管理と自律的な業務改善ループの適用"
        },
        {
          tool: "Workflow Orchestration w/ MCP",
          capability: "AIによる要件ドラフト、多言語翻訳、API紐付け、コード生成支援と全体の進捗フロー制御",
          evidence: "Claude, ChatGPT, Antigravity, Cursor, Genspark等の検証活用"
        },
        {
          tool: "Compliance & Trust",
          capability: "SOC 2 Type II, ISO/IEC 27001/27017/27018, SAP S/4HANA Certified Integration",
          evidence: "グローバル企業のセキュリティ基準やERP統合仕様に適合した開発環境の理解",
          hidden: true
        }
      ]
    },
    timeline: {
      kicker: "Career Timeline / キャリアの軌跡",
      title: "技術文書の構造化から、製品企画プロセス全体を駆動하는PMへ",
      body: "テクニカルライターとして培った仕様の明確化や関係部署の合意形成力を基盤とし、複雑なエンタープライズSaaS製品の企画立案やJira運用の高効率化を担うグローバルプロダクトマネージャーへと成長を遂げています。",
      events: [
        {
          period: "2025 - 現在",
          role: "Global Product Manager",
          company: "emro",
          description: "AIを活用した購買SaaSであるCaidentiaの製品企画、JiraベースのProduct Ops構築、AI Workplace（Agentic AI）設計、グローバルデモ支援などのプロダクトマネジメントを主導しています。",
          skills: ["製品戦略とロードマップ", "Jira/Confluenceの運用", "Agentic AIの製品設計", "多部署間の合意形成"]
        },
        {
          period: "2024 - 2025",
          role: "Technical Writer",
          company: "emro",
          description: "製品の要件定義の構造化、多言語（i18n）管理プロセスの整備、エンジニアとビジネス部門間のコミュニケーション摩擦を低減하는ドキュメンテーション設計を担当しました。",
          skills: ["情報の階層構造化", "要件の明確化", "i18n（多言語化）管理", "製品ドキュメントの設計"]
        }
      ]
    },
    thinkingSignals: {
      kicker: "判断基準",
      title: "一貫したプロダクト運営の行動指針",
      body:
        "これらの指針は、実務とAIの統合を成功させる基盤です。実用的なAIには、実務コンテキストの理解、システム構造、そして人間のレビューが必要です。",
      items: [
        {
          title: "AIは魔法ではなく実務フローです",
          body:
            "重要なのはAIの単発の出力品質ではなく、再現可能でレビュー・改善し続けられる業務フローの設計です。"
        },
        {
          title: "製品企画の判断力こそが核心です",
          body:
            "AI은検索、起票、レビューなどを高速化しますが、スコープの決定や製品価値の最終判断は人間に委ねられます。"
        },
        {
          title: "再現性は単発の生産性に勝ります",
          body:
            "プロンプトの工夫よりも、反復可能で改善し続けられる仕組みの設計こそが持続的な付加価値を生み出します。"
        },
        {
          title: "標準はコラボレーションのインターフェースです",
          body:
            "テンプレートや用語統一、課題の階層設計などの基準は、AIアシスト業務をスケールさせる共通言語となります。"
        },
        {
          title: "エンタープライズAIには権限コンテキストが不可欠です",
          body:
            "企業向け製品では、ロールや組織定義、ドキュメントごとの機密ガード、安全な次のアクション設計が守られるべきです。"
        },
        {
          title: "Skillは個人の生産성을組織のケイパビリティに変えます",
          body:
            "個別のプロンプト活用やノウハウをAI Skillとして体系化することで、再現可能な資産に変換します。"
        }
      ]
    },
    writing: {
      kicker: "発信活動 / LinkedIn",
      title: "自身の経験とプロダクト思考を共有する",
      body:
        "AIを実際の製品企画実務に落とし込む過程（再現性、チームの実行力、ガバナンス設計）で得た経験や洞察を発信しています。",
      items: [
        {
          title: "LinkedIn投稿",
          body:
            "AI導入、プロダクトOps、ガバナンス、チーム開発などの知見をまとめた発信活動を行っています。"
        },
        {
          title: "AI導入におけるフレーミング",
          body:
            "単発の素晴らしい出力にとどまらず、チームが再利用できるオペレーションに落とし込む方法論を整理しています。"
        },
        {
          title: "経験と知見の共有",
          body:
            "実際のプロジェクト運用を通じて得た学びやプラクティスを言語化し、コミュニティに共有しています。"
        }
      ]
    },
    confidentiality: {
      kicker: "非公開情報の保護",
      title: "公開情報と守秘義務の厳格な分離",
      body:
        "本ポートフォリオは、守秘義務に基づき業務プロセスと製品設計の構造的な結果を中心にまとめており、機密情報は保護されています。",
      note: {
        title: "公開の範囲",
        body:
          "掲載している製品画面は抽象的なエンタープライズSaaSのモックアップとして再構成されたものであり、実際の稼働画面ではありません。社内URL、実際の顧客データ、JiraチケットID、サーバー名、機密のロードマップなどの詳細は含んでいません。",
        rules: [
          "代表画面は業務フローを明示するためのイメージ画像であり、実際の稼働環境ではありません。",
          "顧客名、パートナー名、関係者の名称などは一般化・匿名化して記載しています。",
          "指標データは、実証された範囲のみに基づき正確に記述しています。",
          "製品デザインと業務設計のプロセスおよび結果のみを対象としています。"
        ]
      }
    },
    contact: {
      kicker: "コンタクト",
      title: "業務やネットワーキングに関するご連絡",
      body:
        "協業、ネットワーキング、採用などに関するご連絡はLinkedInへお願いいたします。GitHubでは公開可能な技術検証コードを公開しています。配偶者ビザを取得しており、就労制限はなくビザスポンサーは不要です。",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/wonbeenlee/",
          note: "プロフィール、キャリア履歴、コンタクト"
        },
        {
          label: "GitHub",
          href: "https://github.com/1beenlee",
          note: "検証コードやオープンソースの確認"
        }
      ]
    }
  },
  ui: {
    primaryNavigationLabel: "メインナビゲーション",
    switchLanguageLabel: "言語切り替え",
    heroPreviewAriaLabel: "再構成されたエンタープライズSaaSプレビュー画面",
    heroPreviewChromeTitle: "再構成されたSaaS画面イメージ",
    heroPreviewBadge: "機密情報の保護",
    previewTableHeaders: ["オブジェクト", "スコープ", "アクション"],
    previewTableRows: [
      ["PR-000", "ロール + 組織", "承認"],
      ["RFx-000", "閲覧のみ", "遷移"]
    ],
    caseProblemLabel: "課題",
    caseContributionLabel: "貢献",
    caseOutcomeLabel: "結果",
    syntheticPreviewKicker: "製品イメージのプレビュー",
    syntheticPreviewNote: "業務の構造を説明するために再構成されたダミー画面です。実際のデータは含んでいません。",
    operatingStackAriaLabel: "運営ツールスタック"
  },
  footer: {
    note:
      "AI購買製品企画、JiraベースのProduct Ops、Agentic AIの設計。",
    backToTop: "ページトップへ"
  }
};
