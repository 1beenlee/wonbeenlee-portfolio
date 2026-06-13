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
    secondaryAction: "Korean"
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
          ]
        },
        {
          id: "product-ops",
          label: "Case B",
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
            "Release note"
          ],
          tags: [
            "Representative preview",
            "Sensitive details anonymized",
            "Evidence-backed",
            "One tested workflow"
          ]
        },
        {
          id: "gartner-demo",
          label: "Case C",
          title: "Gartner Demo Enablement and Market Intelligence",
          category: "Gartner Supply Chain Symposium/Xpo",
          problem:
            "Global SaaS demos need concise product narratives, prepared demo data, issue handling, and market context so sales teams can explain AI-enabled S2P/P2P value clearly.",
          contribution:
            "Supported demo readiness through scenario structure, demo environment preparation, Storylane-style narratives, live issue triage, development-team coordination, and on-site market intelligence. Public wording keeps customer conversations, leads, environment details, and private feedback out of scope.",
          outcome:
            "Helped connect product capabilities to global sales language with 3 main Gartner demo scenarios and 9 supporting scenarios, plus a market-intelligence feedback loop for product and sales alignment.",
          metrics: [
            "3 main Gartner demo scenarios",
            "9 supporting Gartner demo scenarios",
            "Market intelligence feedback loop"
          ],
          previewTitle: "Demo enablement flow",
          previewSteps: [
            "Sales need",
            "Demo data",
            "Scenario script",
            "Issue triage",
            "MI feedback"
          ],
          tags: [
            "Representative preview",
            "Sensitive details anonymized",
            "No customer data",
            "Evidence-backed"
          ]
        },
        {
          id: "ai-skills",
          label: "Case D",
          title: "AI Skill Ecosystem for Product Planning AX",
          category: "AI Skills / Product Planning AX",
          problem:
            "AI adoption stalls when useful prompts remain personal habits instead of reviewed workflows, standards, and reusable operating assets.",
          contribution:
            "Built an AI Skill ecosystem for product planning work across Jira operations, planning documents, terminology, prototype generation, output review, release support, user flows, and product portfolio assets. The system frames AI as a pipeline from idea intake to planning, visualization, review, and release communication.",
          outcome:
            "Turned prompt usage into a repeatable workflow ecosystem for product planning AX, with 9+ AI Skills and 15+ version updates across planning, review, Jira, release, and prototype workflows.",
          metrics: [
            "9+ AI Skills",
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
          label: "Main Gartner demo scenarios",
          value: "3",
          note: "Prepared main scenario count for demo readiness; customer and lead details are excluded."
        },
        {
          label: "Supporting Gartner scenarios",
          value: "9",
          note: "Supporting scenario set for sales enablement and demo conversations."
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
          evidence: "Gartner demo enablement case"
        },
        {
          tool: "AI Skills",
          capability: "Repeatable planning workflows, terminology checks, prototype support, and quality review",
          evidence: "9+ Skills and 15+ version updates"
        },
        {
          tool: "Figma / synthetic prototypes",
          capability: "Safe product previews and cross-functional alignment",
          evidence: "Representative previews; no real internal screens"
        },
        {
          tool: "Claude / ChatGPT / MCP",
          capability: "AI-assisted planning, review, search, handoff, and workflow orchestration",
          evidence: "AI Skill ecosystem and Product Ops workflows"
        }
      ]
    },
    timeline: {
      kicker: "Career Timeline",
      title: "Transitioning from technical writer to enterprise product manager.",
      body: "Leveraging structured documentation, analysis depth, and stakeholder alignment to design and lead B2B SaaS product systems.",
      events: [
        {
          period: "2021 - 2023",
          role: "Technical Writer",
          company: "emro",
          description: "Structured complex product requirements and authored specifications, reducing alignment overhead between engineering and business units.",
          skills: ["Information Architecture", "Requirement Analysis", "Cross-Functional Alignment"]
        },
        {
          period: "2023 - Present",
          role: "Global Product Manager",
          company: "emro",
          description: "Leading global product planning for the AI-enabled SRM/S2P SaaS platform Caidentia, driving Jira-based Product Ops and Agentic AI workflow planning.",
          skills: ["Product Strategy & Roadmap", "Jira/Confluence Product Ops", "Agentic AI Workflow"]
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
      title: "Writing signals the same operating philosophy.",
      body:
        "My public writing focuses on bringing AI into real product planning work: context quality, repeatable workflows, team capability, verification, and governance.",
      items: [
        {
          title: "5 LinkedIn articles",
          body:
            "A compact public signal around AI adoption, product judgment, workflow design, capability, and governance."
        },
        {
          title: "AI adoption framing",
          body:
            "AI becomes real when it moves from impressive one-off outputs to repeatable workflows that teams can inspect."
        },
        {
          title: "Public profile anchor",
          body:
            "LinkedIn and GitHub are the external anchors for writing, contact, and public product-adjacent work."
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
      title: "For product, AI workflow, and Product Ops conversations.",
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
