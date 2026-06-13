import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  CheckCircle2,
  ExternalLink,
  FileText,
  Github,
  Languages,
  Linkedin,
  LockKeyhole,
  Network,
  ShieldCheck,
  Sparkles,
  TableProperties,
  Workflow
} from "lucide-react";
import { canonicalProfile } from "./content/profile.shared";
import type {
  Audience,
  CaseStudy,
  ContactLink,
  EvidenceMetric,
  Locale,
  OperatingStackItem,
  Pillar,
  SiteCopy
} from "./content/types";
import { getLanguageHref, resolveRoute } from "./lib/i18n";

const pillarIcons = [Network, Workflow, TableProperties, Sparkles, ShieldCheck, Bot];

function App() {
  const route = resolveRoute(window.location.pathname);
  const copy = route.copy;
  const languageHref = getLanguageHref(route.audience, route.locale);
  const homeHref = getHomeHref(route.audience, route.locale);
  const navHrefs = useMemo(() => copy.nav.map((item) => item.href), [copy.nav]);
  const activeSection = useActiveSection(navHrefs);

  useDocumentLanguage(copy.meta.locale);
  useRevealMotion();

  return (
    <div className="app-shell">
      <Header
        copy={copy}
        languageHref={languageHref}
        homeHref={homeHref}
        activeSection={activeSection}
      />
      <main>
        <Hero copy={copy} />
        <Positioning copy={copy} />
        <SelectedWork copy={copy} />
        <EvidenceMetrics copy={copy} />
        <OperatingStack copy={copy} />
        <ThinkingSignals copy={copy} />
        <Writing copy={copy} />
        <Confidentiality copy={copy} />
        <Contact copy={copy} />
      </main>
      <Footer copy={copy} />
    </div>
  );
}

function getHomeHref(audience: Audience, locale: Locale): string {
  if (audience === "public") {
    return locale === "ko" ? "/public" : "/public/en";
  }

  return locale === "ko" ? "/" : "/en";
}

function Header({
  copy,
  languageHref,
  homeHref,
  activeSection
}: {
  copy: SiteCopy;
  languageHref: string;
  homeHref: string;
  activeSection: string;
}) {
  return (
    <header className="site-header">
      <a className="brand" href={homeHref}>
        <span className="brand-mark" aria-hidden="true">
          WL
        </span>
        <span>
          <strong>{canonicalProfile.name}</strong>
          <small>{copy.meta.label}</small>
        </span>
      </a>
      <nav className="nav-links" aria-label={copy.ui.primaryNavigationLabel}>
        {copy.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={activeSection === item.href.slice(1) ? "is-active" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <a className="icon-button" href={languageHref} aria-label={copy.ui.switchLanguageLabel}>
        <Languages size={17} aria-hidden="true" />
        <span>{copy.hero.secondaryAction}</span>
      </a>
    </header>
  );
}

function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <section className="hero-band" id="top">
      <div className="hero-grid">
        <div className="hero-copy">
          <h1>{copy.hero.title}</h1>
          <p className="hero-subtitle">{copy.hero.subtitle}</p>
          <div className="hero-actions">
            <a className="primary-button" href={copy.hero.primaryHref}>
              <span>{copy.hero.primaryAction}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>
        <HeroPreview copy={copy} />
      </div>
    </section>
  );
}

function HeroPreview({ copy }: { copy: SiteCopy }) {
  const steps = copy.sections.selectedWork.cases[0]?.previewSteps ?? [];

  return (
    <aside className="hero-preview" aria-label={copy.ui.heroPreviewAriaLabel}>
      <div className="preview-chrome">
        <span />
        <span />
        <span />
        <strong>{copy.ui.heroPreviewChromeTitle}</strong>
      </div>
      <div className="preview-dashboard">
        <div className="preview-sidebar" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="preview-main">
          <div className="preview-header">
            <div>
              <small>{copy.profileCard.eyebrow}</small>
              <strong>{copy.sections.selectedWork.cases[0]?.previewTitle}</strong>
            </div>
            <em>{copy.ui.heroPreviewBadge}</em>
          </div>
          <div className="workflow-map">
            {steps.map((step, index) => (
              <div className="map-node" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
          <div className="preview-table" aria-hidden="true">
            <div>
              {copy.ui.previewTableHeaders.map((header) => (
                <span key={header}>{header}</span>
              ))}
            </div>
            {copy.ui.previewTableRows.map((row) => (
              <div key={row.join("-")}>
                {row.map((cell) => (
                  <span key={cell}>{cell}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="profile-strip">
        <div>
          <strong>{canonicalProfile.name}</strong>
          <span>{canonicalProfile.role}</span>
        </div>
        <ul>
          {copy.profileCard.highlights.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

function Positioning({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band reveal-target" id="positioning">
      <SectionIntro
        kicker={copy.sections.positioning.kicker}
        title={copy.sections.positioning.title}
        body={copy.sections.positioning.body}
      />
      <PillarGrid items={copy.sections.positioning.pillars} />
    </section>
  );
}

function SelectedWork({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band tinted reveal-target" id="work">
      <SectionIntro
        kicker={copy.sections.selectedWork.kicker}
        title={copy.sections.selectedWork.title}
        body={copy.sections.selectedWork.body}
      />
      <div className="case-list">
        {copy.sections.selectedWork.cases.map((item) => (
          <CaseCard key={item.id} item={item} copy={copy} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({ item, copy }: { item: CaseStudy; copy: SiteCopy }) {
  return (
    <article className="case-card">
      <div className="case-copy">
        <span className="case-label">{item.label} / {item.category}</span>
        <h3>{item.title}</h3>
        <div className="case-body-grid">
          <CaseText label={copy.ui.caseProblemLabel} body={item.problem} />
          <CaseText label={copy.ui.caseContributionLabel} body={item.contribution} />
          <CaseText label={copy.ui.caseOutcomeLabel} body={item.outcome} />
        </div>
        <ul className="case-metrics">
          {item.metrics.map((metric) => (
            <li key={metric}>
              <CheckCircle2 size={16} aria-hidden="true" />
              <span>{metric}</span>
            </li>
          ))}
        </ul>
        <div className="redaction-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <SyntheticPreview item={item} copy={copy} />
    </article>
  );
}

function CaseText({ label, body }: { label: string; body: string }) {
  return (
    <div className="case-text">
      <strong>{label}</strong>
      <p>{body}</p>
    </div>
  );
}

function SyntheticPreview({ item, copy }: { item: CaseStudy; copy: SiteCopy }) {
  return (
    <div className="synthetic-preview">
      <div className="synthetic-heading">
        <small>{copy.ui.syntheticPreviewKicker}</small>
        <strong>{item.previewTitle}</strong>
      </div>
      <ol>
        {item.previewSteps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{step}</p>
          </li>
        ))}
      </ol>
      <div className="synthetic-note">
        <LockKeyhole size={15} aria-hidden="true" />
        <span>{copy.ui.syntheticPreviewNote}</span>
      </div>
    </div>
  );
}

function EvidenceMetrics({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band reveal-target" id="metrics">
      <SectionIntro
        kicker={copy.sections.evidenceMetrics.kicker}
        title={copy.sections.evidenceMetrics.title}
        body={copy.sections.evidenceMetrics.body}
      />
      <div className="metric-grid">
        {copy.sections.evidenceMetrics.metrics.map((item) => (
          <MetricCard key={`${item.label}-${item.value}`} item={item} />
        ))}
      </div>
    </section>
  );
}

function MetricCard({ item }: { item: EvidenceMetric }) {
  return (
    <article className="metric-card">
      <span>{item.label}</span>
      <strong>{item.value}</strong>
      <p>{item.note}</p>
    </article>
  );
}

function OperatingStack({ copy }: { copy: SiteCopy }) {
  return (
    <section className="split-band reveal-target" id="stack">
      <SectionIntro
        kicker={copy.sections.operatingStack.kicker}
        title={copy.sections.operatingStack.title}
        body={copy.sections.operatingStack.body}
      />
      <div className="stack-table" role="table" aria-label={copy.ui.operatingStackAriaLabel}>
        {copy.sections.operatingStack.items.map((item) => (
          <StackRow key={item.tool} item={item} />
        ))}
      </div>
    </section>
  );
}

function StackRow({ item }: { item: OperatingStackItem }) {
  return (
    <article className="stack-row">
      <strong>{item.tool}</strong>
      <p>{item.capability}</p>
      <span>{item.evidence}</span>
    </article>
  );
}

function ThinkingSignals({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band signals-band reveal-target">
      <SectionIntro
        kicker={copy.sections.thinkingSignals.kicker}
        title={copy.sections.thinkingSignals.title}
        body={copy.sections.thinkingSignals.body}
      />
      <PillarGrid items={copy.sections.thinkingSignals.items} compact />
    </section>
  );
}

function Writing({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band reveal-target">
      <SectionIntro
        kicker={copy.sections.writing.kicker}
        title={copy.sections.writing.title}
        body={copy.sections.writing.body}
      />
      <PillarGrid items={copy.sections.writing.items} compact />
    </section>
  );
}

function Confidentiality({ copy }: { copy: SiteCopy }) {
  const note = copy.sections.confidentiality.note;

  return (
    <section className="content-band confidentiality-band reveal-target">
      <SectionIntro
        kicker={copy.sections.confidentiality.kicker}
        title={copy.sections.confidentiality.title}
        body={copy.sections.confidentiality.body}
      />
      <article className="confidentiality-card">
        <ShieldCheck size={24} aria-hidden="true" />
        <div>
          <h3>{note.title}</h3>
          <p>{note.body}</p>
          <ul>
            {note.rules.map((rule) => (
              <li key={rule}>{rule}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}

function Contact({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band closing-band reveal-target" id="contact">
      <SectionIntro
        kicker={copy.sections.contact.kicker}
        title={copy.sections.contact.title}
        body={copy.sections.contact.body}
      />
      <div className="contact-grid">
        {copy.sections.contact.links.map((link) => (
          <ContactCard key={link.href} link={link} />
        ))}
      </div>
    </section>
  );
}

function ContactCard({ link }: { link: ContactLink }) {
  const Icon = link.label.toLowerCase().includes("github") ? Github : Linkedin;

  return (
    <a className="contact-card" href={link.href} target="_blank" rel="noreferrer">
      <Icon size={22} aria-hidden="true" />
      <div>
        <strong>{link.label}</strong>
        <p>{link.note}</p>
      </div>
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  );
}

function PillarGrid({ items, compact = false }: { items: Pillar[]; compact?: boolean }) {
  return (
    <div className={compact ? "pillar-grid compact" : "pillar-grid"}>
      {items.map((item, index) => {
        const Icon = pillarIcons[index] ?? FileText;
        return (
          <article className="pillar-card" key={item.title}>
            <Icon size={22} aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        );
      })}
    </div>
  );
}

function SectionIntro({
  kicker,
  title,
  body
}: {
  kicker: string;
  title: string;
  body?: string;
}) {
  return (
    <div className="section-intro">
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {body ? <p>{body}</p> : null}
    </div>
  );
}

function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>{canonicalProfile.name}</strong>
        <span>{canonicalProfile.location}</span>
      </div>
      <p>{copy.footer.note}</p>
      <a href="#top">
        <BriefcaseBusiness size={16} aria-hidden="true" />
        <span>{copy.footer.backToTop}</span>
      </a>
    </footer>
  );
}

function useActiveSection(hrefs: string[]) {
  const sectionIds = useMemo(
    () => hrefs.map((href) => href.replace("#", "")).filter(Boolean),
    [hrefs]
  );
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "positioning");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-18% 0px -68% 0px",
        threshold: [0.08, 0.18, 0.32]
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function useRevealMotion() {
  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal-target"));

    if (!targets.length) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);
}

function useDocumentLanguage(locale: Locale) {
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
}

export default App;
