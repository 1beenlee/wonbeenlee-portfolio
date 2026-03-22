export type Locale = "en" | "ja" | "ko";

export type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  summary: string;
  currentRole: string;
  location: string;
  ctas: LinkItem[];
};

export type ImpactItem = {
  title: string;
  detail: string;
};

export type WorkCaseSummary = {
  title: string;
  context: string;
  problem: string;
  role: string;
  approach: string;
  outcome: string;
};

export type WritingCard = {
  title: string;
  summary: string;
  tag: string;
  href?: string;
  linkLabel?: string;
  external?: boolean;
};

export type ResumeEntry = {
  title: string;
  subtitle: string;
  period: string;
  detail: string;
  proofLink?: LinkItem;
};

export type ResumeSnapshot = {
  experience: ResumeEntry[];
  education: ResumeEntry[];
  awards: ResumeEntry[];
  languages: string[];
  resumeLabel: string;
};

export type ContactItem = {
  label: string;
  value: string;
  href: string;
};

export type SiteContent = {
  locale: Locale;
  languageName: string;
  seo: {
    title: string;
    description: string;
  };
  nav: {
    sections: Array<{ id: string; label: string }>;
    switcherLabel: string;
  };
  hero: HeroContent;
  impact: {
    title: string;
    intro: string;
    items: ImpactItem[];
  };
  work: {
    title: string;
    intro: string;
    cases: WorkCaseSummary[];
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  writing: {
    title: string;
    intro: string;
    items: WritingCard[];
  };
  resume: {
    title: string;
    intro: string;
    snapshot: ResumeSnapshot;
  };
  contact: {
    title: string;
    intro: string;
    items: ContactItem[];
  };
  footer: {
    note: string;
  };
  ui: {
    heroMetaLabels: {
      currentRole: string;
      location: string;
    };
    workCaseLabels: {
      context: string;
      problem: string;
      role: string;
      approach: string;
      outcome: string;
    };
    aboutSidebarTitle: string;
    aboutSidebarItems: string[];
    resumeSectionLabels: {
      experience: string;
      education: string;
      awards: string;
      languages: string;
    };
  };
};
