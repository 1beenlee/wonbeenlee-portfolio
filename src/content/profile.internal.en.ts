import type { SiteCopy } from "./types";

export const internalEn: SiteCopy = {
  meta: {
    audience: "internal",
    locale: "en",
    label: "AI Product PM Portfolio",
    alternatePath: "/"
  },
  nav: [
    { label: "What I do", href: "#positioning" },
    { label: "Work", href: "#work" },
    { label: "System", href: "#productOps" },
    { label: "Metrics", href: "#metrics" },
    { label: "Stack", href: "#stack" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" }
  ],
  hero: {
    title: "Product Manager solving complex SaaS problems through AI leverage and Product Ops systems.",
    subtitle:
      "I lead product planning for Caidentia, a global SRM/S2P SaaS at emro. I frame AI beyond isolated productivity prompts—automating team workflow bottlenecks, designing stable process guardrails, and structuring repeatable Product Ops.",
    primaryAction: "View case studies",
    primaryHref: "#work",
    secondaryAction: "Japanese"
  },
  profileCard: {
    eyebrow: "Representative preview",
    summary:
      "Reconstructed enterprise SaaS views show the workflow shape without exposing internal product screens, URLs, customer data, issue keys, page IDs, server names, or implementation details.",
    highlights: [
      { label: "Role", value: "Global Product Manager" },
      { label: "Domain", value: "SRM/S2P SaaS" },
      { label: "Focus", value: "AI Leverage + Product Ops" }
    ]
  },
  sections: {
    positioning: {
      kicker: "Positioning / What I do",
      title: "I turn procurement complexity into operable product systems.",
      body:
        "My role focuses on identifying execution bottlenecks in product design and establishing repeatable standards to scale them. I treat AI as a powerful leverage layer, controlled under strict human product judgment and quality guardrails.",
      pillars: [
        {
          title: "Procurement domain depth",
          body:
            "Plan around real SRM/S2P objects such as PRs, RFx, contracts, POs, ASN, GR, invoices, items, suppliers, spend context, and role-based access."
        },
        {
          title: "AI Leverage & Guardrail",
          body:
            "Design an AI Workplace connecting search, agents, and document insights with robust quality gates to mitigate hallucinations and security risks."
        },
        {
          title: "Product Ops & Workflow",
          body:
            "Unify Jira and Confluence to automate specifications from intake to release, building operating routines that scale across the team."
        }
      ]
    },
    selectedWork: {
      kicker: "Selected Work",
      title: "Four evidence-backed cases across AI, Product Ops, demo readiness, and planning AX.",
      body:
        "These cases focus on product problems, operating routines, workflow decisions, and scoped outcomes. Detailed Jira keys, internal URLs, page IDs, customer names, people names, and private system details are intentionally excluded.",
      cases: [
        {
          id: "agentic-ai",
          label: "Case A",
          title: "Agentic AI and AI Workplace for Procurement",
          category: "Ask Caidentia / AI Workplace",
          problem:
            "[Problem Context]\nEnterprise procurement users navigate multiple screens, docs, and strict roles. Providing a generic Q&A chatbot failed to align with complex procurement workflows and access control rules, hindering actual adoption.\n\n[Product Judgment]\nInstead of a generic chatbot, I defined core procurement domain objects (PRs, RFx, contracts) and permission boundaries to scope the AI’s actions. I also established a core product policy: AI must never execute critical actions without human review and confirmation.",
          contribution:
            "[Planning & Execution]\nDefined Confluence-based specifications and feature sets, mapping out a roadmap in Jira to integrate Chat, Agent Mode, and File Insight. Structured permission verification checkpoints and draft reviews into the specification and Figma flows.\n\n[AI Leverage]\nOrchestrated specialized AI pipelines for enterprise search (RAG) v2, evaluation drafting, and PR-to-RFx data conversion to drastically cut down repetitive spec-processing time.",
          outcome:
            "[Review & Guardrail]\nIntegrated Role-Based Access Control (RBAC) into AI search queries to prevent permission leaks. Added explicit user-in-the-loop validation screens before letting AI trigger subsequent business actions.\n\n[Outcome & Impact]\nEstablished a secure AI UX framework that evolved MVP chatbot capabilities into a consolidated procurement-specialized AI Workplace, safeguarding data and workflow compliance.",
          metrics: [
            "Procurement object-aware AI workflow",
            "Permission-aware AI interaction model",
            "AI Workplace direction across Chat, Agent Mode, and File Insight"
          ],
          previewTitle: "AI Workplace workflow map",
          previewSteps: [
            "User intent",
            "Object detection",
            "Permission guard",
            "Result review",
            "Next agent action"
          ],
          tags: [
            "Representative preview",
            "Sensitive details anonymized",
            "No customer data",
            "Evidence-backed"
          ],
          summary: "Evolved simple prompting into repeatable standards, combining AI speed with human-in-the-loop quality gates to reduce PRD writing time by 90% and secure procurement workflow compliance.",
          highlights: [
            "Planned AI interaction model based on procurement objects and permissions",
            "Designed agent workflows including document search v2 and PR-to-RFx automation",
            "Established AI Workplace direction integrating Chat, Agent Mode, and File Insight"
          ],
          cardMetrics: [
            { label: "Procurement object-aware AI workflow" },
            { label: "Permission-aware AI interaction model" },
            { label: "AI Workplace direction" }
          ]
        },
        {
          id: "ai-skills",
          label: "Case B",
          title: "AI Skill Ecosystem for Product Planning AX",
          category: "AI Skills / Product Planning AX",
          problem:
            "[Problem Context]\nWriting specifications, translating UI glossary terms, validating prototypes, and formatting release notes created significant planning bottlenecks. If AI prompts remain personal habits, they cannot scale to team-wide capabilities.\n\n[Product Judgment]\nInstead of attempting full automation of PM tasks, I defined strict 'Quality Gates' requiring human PM sign-off. I established policies to regulate AI input/output schemas to prevent multilingual inconsistencies and UI breaks.",
          contribution:
            "[Planning & Execution]\nStructured a 5-stage product planning lifecycle—from Intake to PRD writing, HTML prototyping, Jira syncing, and Release preparation—designing 10 specialized AI Skills for each step.\n\n[AI Leverage]\nUsed custom AI tools (such as planning-doc-writer and user-flow) to automate PRD drafts and Excel QA test-case seeds, drastically reducing raw copywriting and formatting overhead.",
          outcome:
            "[Review & Guardrail]\nBuilt `output-reviewer` to audit terminology, and introduced a `Prototype Navigator (with Interaction Hints)` to let humans verify responsive HTML layouts and translations. Implemented a `compound-engineering` feedback model to continuously auto-improve AI versions based on user corrections.\n\n[Outcome & Impact]\nEstablished a repeatable workflow ecosystem with 10 AI skills and 15+ version upgrades, reducing bulk glossary reviews from half a day to minutes and PRD creation from days to under an hour.",
          metrics: [
            "10+ AI Skills",
            "15+ Skill version updates",
            "Idea-to-release planning pipeline"
          ],
          previewTitle: "AI Skill ecosystem map",
          previewSteps: [
            "Intake",
            "Planning",
            "Prototype",
            "Review",
            "Release"
          ],
          tags: [
            "Representative preview",
            "Sensitive details anonymized",
            "Evidence-backed",
            "Repeatable workflow"
          ],
          summary: "Built an AI Skill ecosystem supporting 10 specialized tools—planning-doc-writer, term-manager, caid-ppg-design-system, prototype-template-maker, user-flow, output-reviewer, caid-jira, linear-pm, compound-engineering, and release-prep—to automate and continuously improve product planning workflows.",
          highlights: [
            "Defined 10 custom AI Skills covering document writing, translations, and prototyping",
            "Integrated Jira/Linear APIs to automate backlog mapping and ticket syncing",
            "Implements feedback loops with a Compound Engineering model to auto-upgrade skills"
          ],
          cardMetrics: [
            { value: "10 Skills", label: "Custom AI Tools" },
            { value: "15+", label: "Version Upgrades" },
            { value: "v3.5.0", label: "Core Skill Version" }
          ],
          skillsList: [
            {
              name: "planning-doc-writer",
              version: "v3.5.0",
              updatedAt: "2026-03-26",
              description: "Generates MRD, One Pager, PRD, FRD, Lo-fi Wireframes, and User Journey Maps in one workflow.",
              principle: "Uses Quality Gates and Impact Analysis checklist references to write modular markdown specifications aligned with Persona and SKU parameters, and auto-publishes to Confluence.",
              impact: "Reduced PRD writing time from 1-2 days to 30 mins-1 hour (90%+ reduction)"
            },
            {
              name: "term-manager",
              version: "v2.0.0",
              updatedAt: "2026-06-05",
              description: "Manages standard glossary consistency and multilingual UI translations.",
              principle: "Maintains 1:1:1 mapping (Korean, English, and physical code keys) across 1,910 terms, 892 buttons, and 12,030 labels using UI english checks and exception workflows.",
              impact: "Shortened bulk term review (100 items) from half a day to under 10 minutes"
            },
            {
              name: "caid-ppg-design-system",
              version: "v0.75",
              updatedAt: "2026-06-08",
              description: "Converts requirements into single-file responsive HTML prototypes with UX Layer (Interaction Hint & Prototype Navigator).",
              principle: "Generates Vanilla JS pages in grayscale Lofi, Caidentia 1.0 (Violet theme), or Neo mode (M3+AI Blue theme) equipped with 'Interaction Hint' (identifying interactive areas) and 'Prototype Navigator' (active view selector & i18n review panel) to streamline design review and demo interactions.",
              impact: "Reduced interactive HTML prototyping and UI verification from 2-5 days to 10-30 minutes"
            },
            {
              name: "prototype-template-maker",
              version: "v1.1.0",
              updatedAt: "2026-05-15",
              description: "Generates local-sandbox ready HTML tab structures.",
              principle: "Generates standalone layouts with mock data to dry-run MDI menu templates, shortening UI lifecycle loops before release.",
              impact: "Shortened MDI tab layout design and verification from 3 days to under 15 minutes"
            },
            {
              name: "user-flow",
              version: "v1.2.0",
              updatedAt: "2026-05-20",
              description: "Compiles user story hierarchies and Excel QA test-case seeds.",
              principle: "Extracts JTBD and User Story specs from Figma contexts, building structured Excel sheets utilized directly as test cases in QA sprints.",
              impact: "Automated QA test case seed generation from Figma, reducing workflow to under 30 minutes"
            },
            {
              name: "output-reviewer",
              version: "v1.0.5",
              updatedAt: "2026-06-12",
              description: "Reviews SaaS artifacts against glossary and design system rules.",
              principle: "Parses PRDs and User Flow Excels to evaluate consistency in translations, component libraries, and logic, compiling a structural review report.",
              impact: "Reduced PRD and User Flow consistency review time from 1-2 hours to 10-20 minutes"
            },
            {
              name: "caid-jira",
              version: "v1.5.0",
              updatedAt: "2026-06-01",
              description: "Coordinates product planning Jira transitions and tickets.",
              principle: "Integrates with Planning Jira to batch-create features, assign planning PICs, map backlog hierarchies, and automate status transitions.",
              impact: "Saved 95% of Jira administration overhead by automating bulk feature creation and status transitions"
            },
            {
              name: "linear-pm",
              version: "v2.1.0",
              updatedAt: "2026-06-10",
              description: "Integrates Linear cycles, weekly reporting, and session logs.",
              principle: "Aggregates engineering backlogs, tracks sprint cycles, auto-generates Weekly report drafts, and logs active sessions to candidate portfolios.",
              impact: "Reduced Weekly status report generation and cycle tracking from 1 hour to 5 minutes"
            },
            {
              name: "compound-engineering",
              version: "v0.9.0",
              updatedAt: "2026-06-13",
              description: "Gathers feedback to auto-improve AI Skill versions.",
              principle: "Monitors user correction markers and error signals, building an improvement backlog to compound version upgrades.",
              impact: "Automated version upgrades of AI Skills based on feedback and error logs"
            },
            {
              name: "release-prep",
              version: "v1.2.0",
              updatedAt: "2026-04-21",
              description: "Drafts feature-specific Caidentia release note snippets and demo scripts.",
              principle: "Reads Jira planning context, PRDs, and user flows to structure markdown release note snippets and narration scripts aligned with standard templates.",
              impact: "Reduced release snippet and demo script creation effort by 80%"
            }
          ]
        },
        {
          id: "product-ops",
          label: "Case C",
          title: "Jira-Confluence Product Planning Operating System",
          category: "Product Ops",
          problem:
            "[Problem Context]\nDisconnects between roadmaps, requirement specs, release notes, and decision logs created alignment overhead and obscured planning progress across engineering and business teams.\n\n[Product Judgment]\nInstead of simple task board tracking, I designed a policy to map Jira Epics and Feature Sets 1:1 to key product metrics, enforcing strict 'Definition of Ready' gates before handing specifications to dev teams.",
          contribution:
            "[Planning & Execution]\nStructured 320+ Jira Epics under a unified hierarchy, using Confluence as the Single Source of Truth to log decision trails and auto-draft release narration scripts.\n\n[AI Leverage]\nIntegrated Atlassian DC APIs with AI Skills (`caid-jira`, `linear-pm`) to automate batch ticket creation and status transitions directly from Confluence PRD contexts.",
          outcome:
            "[Review & Guardrail]\nEnforced a boundary between private metadata and public release snippets to ensure security, and designed a manual validation step for PMs to sign off before release notes are published.\n\n[Outcome & Impact]\nStandardized the product planning operating system, improving one tested planning transition workflow by 12x (reducing time from 60 to 5 minutes) in colleague testing.",
          metrics: [
            "320+ Jira epics structured",
            "12x efficiency gain for one tested workflow",
            "Jira-Confluence planning and release routines"
          ],
          previewTitle: "Planning operating board",
          previewSteps: [
            "Goal",
            "Initiative",
            "Feature set",
            "Feature",
            "Release note",
            "Release demo"
          ],
          tags: [
            "Representative preview",
            "Sensitive details anonymized",
            "Evidence-backed",
            "One tested workflow"
          ],
          summary: "Unified requirements, status tracking, and release logs into a Single Source of Truth on Jira-Confluence, streamlining agile handoff and removing workflow silos.",
          highlights: [
            "Structured agile planning, templates, and release routines into a unified system",
            "Supported feature planning work such as PO Change, Widget Based Home, Contract+AI, and Item 360",
            "Linked agile systems without exposing private issue metadata"
          ],
          cardMetrics: [
            { value: "320+", label: "Structured Jira Epics" },
            { value: "12x", label: "Workflow Efficiency Gain" },
            { value: "60m → 5m", label: "Planning Time Reduced" }
          ]
        },
        {
          id: "gartner-demo",
          label: "Case D",
          title: "GTM Demo Enablement and Market Intelligence",
          category: "Market Intelligence in Gartner, Salesforce, SAMSUNG",
          problem:
            "[Problem Context]\nSecuring top-tier analyst reviews (such as IDC MarketScape Major Player 2025 and Hackett Group '50 to Know') required demonstrating the value and benchmark performance of S2P/P2P AI features under tight constraints.\n\n[Product Judgment]\nInstead of presenting complex, exhaustive feature sets, I scoped the GTM demo around 3 primary business-aligned stories and 9 supporting scenarios tailored directly to analyst and buyer decision contexts.",
          contribution:
            "[Planning & Execution]\nConstructed interactive demo environments using Storylane and compiled analyst-ready documentation to streamline benchmarking responses and live evaluations.\n\n[AI Leverage]\nLeveraged the `release-prep` AI Skill to analyze Jira specs and PRDs, auto-generating analyst-aligned responses and multi-lingual release notes to accelerate GTM readiness.",
          outcome:
            "[Review & Guardrail]\nMaintained security protocols by auditing mock demo data to prevent leakage of client feedback, pricing, or internal product roadmaps.\n\n[Outcome & Impact]\nContributed to securing Major Player and '50 to Know' recognitions, and established a feedback loop capturing over 100+ market signals to refine the core product roadmap.",
          metrics: [
            "3+ MI activities",
            "9+ demo scenarios",
            "Benchmarking and 100+ market signals captured"
          ],
          previewTitle: "Demo Enablement & Response Flow",
          previewSteps: [
            "Sales/Analyst Needs",
            "Demo Data & Benchmarks",
            "Scenario Script",
            "Issue Triage",
            "MI Feedback & Report"
          ],
          tags: [
            "Representative preview",
            "Evidence-backed"
          ],
          summary: "Built demo environments and scenarios for major events (Gartner Symposium, etc.) and prepared product data for global research firms (IDC, Forrester, Hackett, etc.) to support favorable evaluations.",
          highlights: [
            "Planned storyline-based GTM demo scenarios aligned with global business narratives",
            "Prepared planning and functional data to support benchmarking responses for global research firms (IDC, Forrester, Hackett, etc.)",
            "Designed market intelligence feedback loops to align product and sales",
            "Gathered and analyzed 100+ market signals to align product and sales alignment"
          ],
          cardMetrics: [
            { value: "3+", label: "MI Activities" },
            { value: "9+", label: "Demo Scenarios" },
            { value: "100+", label: "Market Signals Captured" }
          ]
        }
      ]
    },
    productOps: {
      kicker: "Product Ops / AI & Product Ops System",
      title: "AI Product Operating System & Collaboration",
      body: "Designed an integrated product operating system connecting stages from Discover to Define, Build, Launch, Measure, and Iterate. AI is treated as a core system component rather than a generic utility, guaranteeing artifact quality and alignment across the product lifecycle.",
      stages: [
        {
          id: "discover",
          title: "Discover",
          items: ["Market & User Research", "Problem Validation", "Opportunity Sizing"]
        },
        {
          id: "define",
          title: "Define",
          items: ["Product Strategy", "Roadmap & Prioritization", "OKRs & Metrics"]
        },
        {
          id: "build",
          title: "Build",
          items: ["Agile Delivery", "Cross-functional Alignment", "Quality & UX Excellence"]
        },
        {
          id: "launch",
          title: "Launch",
          items: ["Go-to-Market", "Change Management", "Enablement"]
        },
        {
          id: "measure",
          title: "Measure",
          items: ["Product Analytics", "AI-driven Insights", "Iterate & Optimize"]
        }
      ],
      copilotTitle: "AI Copilot",
      copilotBody: "Embedded intelligence across the product lifecycle supporting insight, prediction, and automation.",
      copilotFeatures: ["Insights", "Predictions", "Automation"],
      loopLabel: "Continuous Learning Loop"
    },
    evidenceMetrics: {
      kicker: "Evidence Metrics",
      title: "Evidence metrics with clear scope.",
      body:
        "These metrics show the scale and direction of the work. Each note states what the number covers and what remains outside the public portfolio.",
      metrics: [
        {
          label: "Jira epics structured",
          value: "320+",
          note: "Planning hierarchy and backlog structure; no issue keys, URLs, or private metadata shown."
        },
        {
          label: "Efficiency gain",
          value: "12x",
          note: "One tested planning workflow improved from 60 minutes to 5 minutes in colleague testing."
        },
        {
          label: "Market intelligence activities",
          value: "3+",
          note: "Global analyst and GTM event response to capture market intelligence."
        },
        {
          label: "GTM demo scenarios",
          value: "9+",
          note: "Demo scenarios prepared for sales enablement and demo support."
        },
        {
          label: "AI Skills",
          value: "9+",
          note: "Reusable product planning workflows, not one-off prompt snippets."
        },
        {
          label: "Skill version updates",
          value: "15+",
          note: "Iteration signal across planning, review, Jira, release, and prototype workflows."
        },
        {
          label: "LinkedIn articles",
          value: "5",
          note: "Public writing around AI adoption, workflow design, product judgment, capability, and governance."
        }
      ]
    },
    operatingStack: {
      kicker: "Operating Stack",
      title: "Tools are framed by the capability they enable.",
      body:
        "This is not a logo list. It shows how product planning, AI workflow design, market intelligence, and demo preparation become repeatable work.",
      items: [
        {
          tool: "Jira",
          capability: "Planning hierarchy, status tracking, execution rhythm, and issue handoff",
          evidence: "320+ epics and planning backlog structure"
        },
        {
          tool: "Confluence",
          capability: "Reusable documentation, release context, decision records, and planning memory",
          evidence: "Jira-Confluence Product Ops case"
        },
        {
          tool: "Storylane / demo tooling",
          capability: "Short demo narratives, prepared scenario flows, and sales enablement assets",
          evidence: "GTM demo enablement and 9+ scenarios"
        },
        {
          tool: "AI Skills",
          capability: "Repeatable planning workflows, terminology checks, prototype support, and quality review",
          evidence: "10+ Skills and 15+ version updates",
          hidden: true
        },
        {
          tool: "Figma / synthetic prototypes",
          capability: "Safe product previews and cross-functional alignment",
          evidence: "Representative previews; no real internal screens"
        },
        {
          tool: "Linear",
          capability: "Task and feedback loop tracking integrated with linear-pm and compound-engineering skills (Notion as operational fallback)",
          evidence: "Structured backlog tracking and self-improving process routines"
        },
        {
          tool: "Workflow Orchestration w/ MCP",
          capability: "AI-assisted planning, spec writing, translations, developer handoff, code generation, and workflow orchestration",
          evidence: "Claude, ChatGPT, Antigravity, Cursor, Genspark"
        },
        {
          tool: "Compliance & Trust",
          capability: "SOC 2 Type II, ISO/IEC 27001/27017/27018, SAP S/4HANA Certified Integration",
          evidence: "Complied with global enterprise trust standards and integration certifications",
          hidden: true
        }
      ]
    },
    timeline: {
      kicker: "Career Timeline",
      title: "Transitioning from technical writer to enterprise product manager.",
      body: "Leveraging structured documentation, analysis depth, and stakeholder alignment to design and lead B2B SaaS product systems.",
      events: [
        {
          period: "2025 - Present",
          role: "Global Product Manager",
          company: "emro",
          description: "Leading global product planning for the AI-enabled SRM/S2P SaaS platform Caidentia, driving Jira-based Product Ops and Agentic AI workflow planning.",
          skills: ["Product Strategy & Roadmap", "Jira/Confluence Operations", "Agentic AI Workflow", "Cross-Functional Alignment"]
        },
        {
          period: "2024 - 2025",
          role: "Technical Writer",
          company: "emro",
          description: "Structured complex product requirements and authored specifications, reducing alignment overhead between engineering and business units.",
          skills: ["Information Architecture", "Requirement Analysis", "i18n Management", "Product Docs."]
        }
      ]
    },
    thinkingSignals: {
      kicker: "Thinking Signals",
      title: "Principles behind the work.",
      body:
        "These working beliefs connect the case studies: useful AI needs domain grounding, operating structure, human review, and governance.",
      items: [
        {
          title: "AI as workflow, not magic",
          body:
            "The useful question is not whether AI can answer once, but whether a team can operate, inspect, and improve the workflow repeatedly."
        },
        {
          title: "Product judgment remains central",
          body:
            "AI accelerates search, drafting, review, and handoff; product judgment still sets scope, risk, and decision quality."
        },
        {
          title: "Repeatability beats one-off productivity",
          body:
            "A reusable routine is more valuable than a clever isolated prompt because it can be reviewed and improved."
        },
        {
          title: "Standards are the interface",
          body:
            "Templates, terminology, issue structure, and release routines let teams scale AI-assisted work without losing quality."
        },
        {
          title: "Procurement AI needs permissions",
          body:
            "Enterprise AI must respect role, organization scope, document access, result visibility, and safe next actions."
        },
        {
          title: "Skills turn productivity into capability",
          body:
            "AI Skills make personal workflow gains available as a repeatable product planning asset."
        }
      ]
    },
    writing: {
      kicker: "Writing / LinkedIn",
      title: "Sharing learning and philosophy through writing.",
      body:
        "My public writing focuses on bringing AI into real product planning work: context quality, repeatable workflows, team capability, verification, and governance.",
      items: [
        {
          title: "LinkedIn Posts",
          body:
            "A compact public signal around AI adoption, product judgment, workflow design, capability, and governance."
        },
        {
          title: "AI adoption framing",
          body:
            "AI becomes real when it moves from impressive one-off outputs to repeatable workflows that teams can inspect."
        },
        {
          title: "Sharing experiences",
          body:
            "Writing and sharing real learnings gained by observing, listening, and experimenting across various channels."
        }
      ]
    },
    confidentiality: {
      kicker: "Redaction & Confidentiality",
      title: "Public portfolio, private details protected.",
      body:
        "The work is presented at the level of product judgment, workflow structure, and scoped outcomes while private operational details stay protected.",
      note: {
        title: "Confidentiality note",
        body:
          "Screens are reconstructed as neutral enterprise SaaS previews. Internal URLs, real customer data, issue keys, page IDs, server names, sensitive roadmap details, customer conversations, private feedback, and evaluation material are not shared.",
        rules: [
          "Representative views show workflow shape, not production screens.",
          "Customer, partner, and individual references are generalized or anonymized.",
          "Metrics are scoped to the work they actually measure.",
          "Case studies emphasize product judgment, operating systems, and outcomes."
        ]
      }
    },
    contact: {
      kicker: "Contact",
      title: "Let’s talk Product, AI & Ops",
      body:
        "For collaboration, networking, or hiring conversations, LinkedIn is the best place to reach me. GitHub holds selected public technical and product-adjacent work.",
      links: [
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/wonbeenlee/",
          note: "Profile, writing, and professional contact"
        },
        {
          label: "GitHub",
          href: "https://github.com/1beenlee",
          note: "Public technical work and experiments"
        }
      ]
    }
  },
  ui: {
    primaryNavigationLabel: "Primary navigation",
    switchLanguageLabel: "Switch language",
    heroPreviewAriaLabel: "Representative enterprise SaaS preview",
    heroPreviewChromeTitle: "Representative enterprise SaaS view",
    heroPreviewBadge: "Confidential details protected",
    previewTableHeaders: ["Object", "Scope", "Action"],
    previewTableRows: [
      ["PR-000", "Role + org", "Review"],
      ["RFx-000", "Read-only", "Navigate"]
    ],
    caseProblemLabel: "Problem",
    caseContributionLabel: "Contribution",
    caseOutcomeLabel: "Outcome",
    syntheticPreviewKicker: "Representative preview",
    syntheticPreviewNote: "Reconstructed workflow view. No customer data.",
    operatingStackAriaLabel: "Operating stack"
  },
  footer: {
    note:
      "AI-enabled procurement product management, Jira-based Product Ops, and Agentic AI workflows.",
    backToTop: "Top"
  }
};
