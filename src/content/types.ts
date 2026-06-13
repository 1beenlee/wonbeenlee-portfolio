export type Audience = "internal" | "public";
export type Locale = "ko" | "en";

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
};

export type OperatingStackItem = {
  tool: string;
  capability: string;
  evidence: string;
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
