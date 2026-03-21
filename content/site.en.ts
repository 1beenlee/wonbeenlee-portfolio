import { assetPaths, contactLinks } from "@/lib/portfolio-config";
import type { SiteContent } from "@/lib/types";

export const siteEn: SiteContent = {
  locale: "en",
  languageName: "English",
  seo: {
    title:
      "Wonbeen Lee — Global Product Manager | AI-enabled B2B SaaS, Product Ops, SRM/S2P",
    description:
      "Portfolio of Wonbeen Lee, a Global Product Manager focused on AI-enabled B2B SaaS, product planning systems, workflow design, and SRM/S2P software."
  },
  nav: {
    switcherLabel: "Language",
    sections: [
      { id: "impact", label: "Impact" },
      { id: "work", label: "Work" },
      { id: "about", label: "About" },
      { id: "writing", label: "Writing" },
      { id: "resume", label: "Resume" },
      { id: "contact", label: "Contact" }
    ]
  },
  hero: {
    eyebrow: "AI-enabled Global Product Manager",
    title: "I turn complex enterprise workflows into clear, scalable product systems.",
    summary:
      "Global Product Manager at emro, working on Caidentia, a global SRM/S2P SaaS platform. I focus on product planning, workflow design, and cross-functional execution for AI-enabled B2B software.",
    currentRole: "Global Product Manager at emro",
    location: "Tokyo, Japan",
    ctas: [
      { label: "View resume", href: assetPaths.resume },
      {
        label: "LinkedIn",
        href: contactLinks.linkedinHref,
        external: true
      },
      { label: "Get in touch", href: "#contact" }
    ]
  },
  impact: {
    title: "Selected Impact",
    intro:
      "A product profile built on enterprise workflow simplification, planning discipline, and practical AI adoption.",
    items: [
      {
        title: "Owned product planning for a global SRM/S2P platform",
        detail:
          "At emro, led end-to-end product planning work for Caidentia by turning complex stakeholder needs into feature priorities, planning artifacts, and execution standards."
      },
      {
        title: "Built clearer handoffs across planning, UX, and delivery",
        detail:
          "Structured product work into reusable planning documents, review flows, and collaboration patterns that helped teams move with more clarity and less ambiguity."
      },
      {
        title: "Contributed to enterprise-facing B2B execution",
        detail:
          "During a six-month internship at GC Company, supported cross-functional B2B operations and data-driven execution that helped secure an enterprise contract."
      },
      {
        title: "Shipped and operated a side project with real traction",
        detail:
          "Planned and managed Moawordle, a Korean Wordle project that reached 50,000+ unique players and 180,000+ total plays."
      }
    ]
  },
  work: {
    title: "Work Highlights",
    intro:
      "Public-safe case summaries that show how I structure product work, align teams, and translate complex domains into usable product decisions.",
    cases: [
      {
        title: "Building product planning systems for enterprise software",
        context:
          "Caidentia sits in a workflow-heavy SRM/S2P environment where product decisions affect multiple teams and business processes.",
        problem:
          "Planning needed to become clearer and more repeatable without making delivery slower or more process-heavy.",
        role:
          "Owned product planning structure, requirements framing, and the translation of stakeholder inputs into usable product scope.",
        approach:
          "Defined planning artifacts, review checkpoints, and collaboration flows that made decisions easier to document, discuss, and hand off.",
        outcome:
          "Created a more structured operating rhythm for planning and execution while keeping the work public-safe and interview-defensible."
      },
      {
        title: "Applying AI thinking to real product operations",
        context:
          "AI interest was rising, but teams still needed practical ways to use it inside product planning and workflow design.",
        problem:
          "The challenge was not discussing AI in the abstract, but identifying where it could improve quality, speed, and clarity in real work.",
        role:
          "Framed AI-enabled workflow opportunities and connected them to planning quality, execution support, and team operating patterns.",
        approach:
          "Focused on concrete workflow use cases such as synthesis, planning support, and structure-building instead of speculative feature claims.",
        outcome:
          "Helped shape a grounded AI-enabled product perspective centered on execution value rather than novelty."
      },
      {
        title: "Translating procurement complexity into product structure",
        context:
          "Procurement and supplier workflows involve dense dependencies, multiple stakeholders, and high expectations for operational clarity.",
        problem:
          "Domain complexity had to be converted into decisions that product, UX, and engineering teams could actually work from.",
        role:
          "Acted as the translator between business workflow complexity and product structure, prioritization, and collaboration inputs.",
        approach:
          "Broke down workflow requirements into clearer problem frames, ownership boundaries, and product-ready planning inputs.",
        outcome:
          "Reduced ambiguity around what needed to be built and how complex workflow needs should be represented in product work."
      },
      {
        title: "Operating Moawordle as a lean consumer-side experiment",
        context:
          "Moawordle was a lightweight side project built around the Korean version of Wordle.",
        problem:
          "The product had to stay simple, shippable, and easy to operate while still proving real audience pull.",
        role:
          "Planned the product direction, coordinated development, and tracked traction signals as the project operator.",
        approach:
          "Kept the scope focused, optimized for repeat engagement, and treated traction as the main proof of usefulness.",
        outcome:
          "Reached 50,000+ unique players and 180,000+ total plays with a low-overhead operating model."
      }
    ]
  },
  about: {
    title: "About",
    paragraphs: [
      "I am a Global Product Manager working across B2B SaaS, product operations, workflow design, and AI-enabled systems. My work is centered on making complex enterprise processes easier to plan, align, and ship.",
      "What I bring is a combination of product structure and execution discipline. I care about the product itself, but I also care about the planning artifacts, review loops, and team coordination that make good product work sustainable.",
      "I am building toward Japan and globally oriented product opportunities where clear communication, cross-functional execution, and thoughtful AI adoption matter in day-to-day work."
    ]
  },
  writing: {
    title: "Writing & Insights",
    intro:
      "Themes I plan to develop into public writing. For now, they show the questions and operating patterns I care about most.",
    items: [
      {
        tag: "AI x Product Ops",
        title: "Where AI improves product work",
        summary:
          "Notes on using AI for planning support, synthesis, and execution quality without adding unnecessary workflow debt."
      },
      {
        tag: "Enterprise UX",
        title: "Designing for operational complexity",
        summary:
          "Reflections on how enterprise products become easier to use when workflow structure is clarified before interface details."
      },
      {
        tag: "Global PM",
        title: "Making product work legible across teams and markets",
        summary:
          "Thoughts on product communication, documentation, and decision framing in globally oriented environments."
      }
    ]
  },
  resume: {
    title: "Resume Snapshot",
    intro:
      "A recruiter-friendly summary of the experience, education, awards, and language context most relevant to global product roles.",
    snapshot: {
      experience: [
        {
          title: "Global Product Manager",
          subtitle: "emro Inc. · Caidentia",
          period: "Sep 2024 – Present",
          detail:
            "Leads product planning for a global SRM/S2P SaaS platform, with responsibility spanning workflow framing, stakeholder translation, planning artifacts, and AI-enabled product thinking."
        },
        {
          title: "B2B Team Intern",
          subtitle: "GC Company",
          period: "Mar 2024 – Aug 2024",
          detail:
            "Supported enterprise-facing B2B operations and data-driven execution, contributing to contract-winning business activity during a six-month internship."
        },
        {
          title: "Earlier product and startup experience",
          subtitle: "DiningCode, fanCake, Konkuk University",
          period: "2020 – 2022",
          detail:
            "Built hands-on experience across product, startup execution, and service operations before moving deeper into enterprise product management."
        }
      ],
      education: [
        {
          title: "Global Business Certificate",
          subtitle: "University of Washington",
          period: "2022 – 2023",
          detail: "GPA 3.86/4.0"
        },
        {
          title: "BA in Media and Communication",
          subtitle: "Konkuk University",
          period: "2017 – 2025",
          detail: "GPA 3.64/4.0"
        },
        {
          title: "BA in Human ICT",
          subtitle: "Konkuk University",
          period: "2017 – 2025",
          detail: "Interdisciplinary major · GPA 3.91/4.0"
        }
      ],
      awards: [
        {
          title: "Frontier Spirit Award",
          subtitle: "emro Inc.",
          period: "Jan 2026",
          detail:
            "Recognized for proactive ownership and contributions to product planning standards and AI-related initiatives."
        },
        {
          title: "Excellence Award in Digital Market Idea Competition",
          subtitle: "KB Securities",
          period: "May 2022",
          detail:
            "Awarded for a service concept focused on family-oriented financial learning."
        },
        {
          title: "Excellence Award in Preliminary Start-up Package",
          subtitle: "KISED",
          period: "Nov 2021",
          detail:
            "Recognized for strong performance in a government-supported startup program."
        }
      ],
      languages: [
        "Korean — Native",
        "English — Professional working proficiency",
        "Japanese — Basic to limited working proficiency"
      ],
      resumeLabel: "Download resume"
    }
  },
  contact: {
    title: "Contact",
    intro:
      "If you are hiring for product roles in AI-enabled B2B SaaS, enterprise software, or globally oriented product teams, I would be glad to connect.",
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
    note: "Built as a multilingual, public-safe portfolio focused on enterprise product work, workflow design, and AI-enabled systems."
  },
  ui: {
    heroMetaLabels: {
      currentRole: "Current role",
      location: "Location"
    },
    workCaseLabels: {
      context: "Context",
      problem: "Problem",
      role: "Role",
      approach: "Approach",
      outcome: "Outcome"
    },
    aboutSidebarTitle: "Focus areas",
    aboutSidebarItems: [
      "AI-enabled B2B SaaS",
      "Product planning systems",
      "Enterprise workflow design",
      "Cross-functional execution",
      "Japan and global opportunities"
    ],
    resumeSectionLabels: {
      experience: "Experience",
      educationAwards: "Education & Awards",
      languages: "Languages"
    }
  }
};
