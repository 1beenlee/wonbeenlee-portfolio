import type { SiteCopy } from "./types";

export const internalEn: SiteCopy = {
  meta: {
    audience: "internal",
    locale: "en",
    label: "AI Procurement PM Portfolio",
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
    title: "Caidentia PM connecting procurement SaaS, Agentic AI, and Product Ops.",
    subtitle:
      "I work on AI-enabled SRM/S2P SaaS as a Global Product Manager at emro. My work connects product planning, Jira-based execution systems, AI Workplace strategy, market intelligence, and external-facing product assets into repeatable operating systems.",
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
      { label: "Focus", value: "Agentic AI + Product Ops" }
    ]
  },
  sections: {
    positioning: {
      kicker: "Positioning / What I do",
      title: "I turn procurement complexity into operable product systems.",
      body:
        "My work sits where Caidentia product planning, AI workflow design, Jira-Confluence operating routines, and market-facing communication meet. I frame AI around procurement objects, permissions, planning artifacts, release routines, and reviewable workflows rather than isolated productivity prompts.",
      pillars: [
        {
          title: "Procurement domain depth",
          body:
            "Plan around real SRM/S2P objects such as PRs, RFx, contracts, POs, ASN, GR, invoices, items, suppliers, spend context, and role-based access."
        },
        {
          title: "Agentic AI as workflow",
          body:
            "Shape AI Workplace directions that connect search, chat, agent mode, file insight, permissions, result review, and safe next actions."
        },
        {
          title: "Product Ops execution",
          body:
            "Structure issue hierarchy, reusable templates, release communication, decision records, and handoff routines through Jira and Confluence."
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
            "Enterprise procurement users move across many menus, documents, roles, and permissions. A generic chatbot is not enough unless AI connects to procurement objects, access rules, search results, and next actions.",
          contribution:
            "Planned Agentic AI workflows across read-only document search, multi-turn Q&A, menu navigation, see-more behavior, permission-aware responses, and the AI Workplace direction combining Chat, Agent Mode, and File Insight. Related work also connects to PR-to-RFx automation, evaluation opinion drafting, document finder v2, and internal agent tooling.",
          outcome:
            "Helped shape a procurement-specific AI UX structure from MVP/Beta capabilities toward an AI Workplace direction while keeping internal screens, implementation details, and sensitive roadmap material out of public view.",
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
          summary: "Planned the AI Workplace direction combining Chat, Agent Mode, and File Insight to automate procurement workflows from request to approval.",
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
            "AI adoption stalls when useful prompts remain personal habits instead of reviewed workflows, standards, and reusable operating assets.",
          contribution:
            "Built an AI Skill ecosystem for product planning work across Jira operations, planning documents, terminology, prototype generation, output review, release support, user flows, and product portfolio assets. The system frames AI as a pipeline from idea intake to planning, visualization, review, and release communication.",
          outcome:
            "Turned prompt usage into a repeatable workflow ecosystem for product planning AX, with 10+ AI Skills and 15+ version updates across planning, review, Jira, release, and prototype workflows.",
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
            "Product planning becomes fragile when goals, issue hierarchy, requirements, release notes, status tracking, and decision records live in disconnected routines.",
          contribution:
            "Structured Jira and Confluence-based operating routines across planning hierarchy, templates, state tracking, release communication, reusable documentation, and issue handoff. The same system also supports feature planning work such as PO Change, Widget Based Home, Contract+AI, Item 360, and release preparation without exposing private issue metadata.",
          outcome:
            "Structured 320+ Jira epics and improved one tested planning workflow from 60 minutes to 5 minutes in colleague testing, a 12x efficiency gain for that specific workflow.",
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
          summary: "Structured Jira and Confluence-based operating routines across planning hierarchy, templates, state tracking, release communication, and issue handoff.",
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
            "In global SaaS demos and major analyst evaluations (for products recognized in IDC MarketScape 2025 S2P/P2P as a Major Player and The Hackett Group 2025-2026 '50 to Know' list), AI S2P/P2P value and benchmark outcomes must be explained clearly and concisely. Product narrative, demo data, issue triage, and market benchmarking contexts must align to secure favorable ratings.",
          contribution:
            "Designed demo scenarios, prepared demo environments and Storylane-style narratives, and supported live issue triage while coordinating the preparation of product analysis and demo materials for global analyst firms (IDC, Forrester, Hackett, etc.). Public disclosures exclude client names, leads, and private feedback.",
          outcome:
            "Helped secure favorable benchmark evaluations (such as Major Player and 50 to Know) by preparing product data and 3 main and 9 supporting demo scenarios, and established a market feedback loop.",
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
