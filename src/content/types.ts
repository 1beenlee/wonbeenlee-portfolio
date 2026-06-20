export type Audience = "internal" | "public";
export type Locale = "ko" | "en" | "ja";

export type NavItem = {
  label: string;
  href: string;
};

export type ProfileCardItem = {
  label: string;
  value: string;
};

export type Pillar = {
  title: string;
  body: string;
};

export type EvidenceMetric = {
  label: string;
  value: string;
  note: string;
};

export type CaseStudySkillItem = {
  name: string;
  version: string;
  updatedAt: string;
  description: string;
  principle: string;
  impact?: string;
};

export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  category: string;
  problem: string;
  contribution: string;
  outcome: string;
  metrics: string[];
  previewTitle: string;
  previewSteps: string[];
  tags: string[];
  summary?: string;
  highlights?: string[];
  cardMetrics?: { value?: string; label: string }[];
  skillsList?: CaseStudySkillItem[];
};

export type TimelineEvent = {
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
};

export type ProductOpsStage = {
  id: string;
  title: string;
  items: string[];
};

export type OperatingStackItem = {
  tool: string;
  capability: string;
  evidence: string;
  hidden?: boolean;
};

export type ConfidentialityNote = {
  title: string;
  body: string;
  rules: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  note: string;
};

export type UiCopy = {
  primaryNavigationLabel: string;
  switchLanguageLabel: string;
  heroPreviewAriaLabel: string;
  heroPreviewChromeTitle: string;
  heroPreviewBadge: string;
  previewTableHeaders: [string, string, string];
  previewTableRows: [string, string, string][];
  caseProblemLabel: string;
  caseContributionLabel: string;
  caseOutcomeLabel: string;
  syntheticPreviewKicker: string;
  syntheticPreviewNote: string;
  operatingStackAriaLabel: string;
};

export type SiteCopy = {
  meta: {
    audience: Audience;
    locale: Locale;
    label: string;
    alternatePath: string;
  };
  nav: NavItem[];
  hero: {
    title: string;
    subtitle: string;
    primaryAction: string;
    primaryHref: string;
    secondaryAction: string;
  };
  profileCard: {
    eyebrow: string;
    summary: string;
    highlights: ProfileCardItem[];
  };
  sections: {
    positioning: {
      kicker: string;
      title: string;
      body: string;
      pillars: Pillar[];
    };
    selectedWork: {
      kicker: string;
      title: string;
      body: string;
      cases: CaseStudy[];
    };
    productOps: {
      kicker: string;
      title: string;
      body: string;
      stages: ProductOpsStage[];
      copilotTitle: string;
      copilotBody: string;
      copilotFeatures: string[];
      loopLabel: string;
    };
    evidenceMetrics: {
      kicker: string;
      title: string;
      body: string;
      metrics: EvidenceMetric[];
    };
    operatingStack: {
      kicker: string;
      title: string;
      body: string;
      items: OperatingStackItem[];
    };
    timeline: {
      kicker: string;
      title: string;
      body: string;
      events: TimelineEvent[];
    };
    thinkingSignals: {
      kicker: string;
      title: string;
      body: string;
      items: Pillar[];
    };
    writing: {
      kicker: string;
      title: string;
      body: string;
      items: Pillar[];
    };
    confidentiality: {
      kicker: string;
      title: string;
      body: string;
      note: ConfidentialityNote;
    };
    contact: {
      kicker: string;
      title: string;
      body: string;
      links: ContactLink[];
    };
  };
  ui: UiCopy;
  footer: {
    note: string;
    backToTop: string;
  };
};
