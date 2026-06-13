import { useEffect, useMemo, useState } from "react";
import {
  BriefcaseBusiness,
  FileText,
  ShieldCheck
} from "lucide-react";
import { canonicalProfile } from "./content/profile.shared";
import type {
  Audience,
  Locale,
  SiteCopy,
  Pillar,
  EvidenceMetric
} from "./content/types";
import { getLanguageHref, resolveRoute } from "./lib/i18n";
import { useTheme } from "./hooks/useTheme";
import { useRevealMotion } from "./hooks/useRevealMotion";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueCards, SectionIntro } from "./components/ValueCards";
import { CaseStudyCards } from "./components/CaseStudyCards";
import { ProductOpsSystem } from "./components/ProductOpsSystem";
import { SkillsGrid } from "./components/SkillsGrid";
import { CareerTimeline } from "./components/CareerTimeline";
import { ContactCTA } from "./components/ContactCTA";

function App() {
  const route = resolveRoute(window.location.pathname);
  const copy = route.copy;
  const languageHref = getLanguageHref(route.audience, route.locale);
  const homeHref = getHomeHref(route.audience, route.locale);
  const navHrefs = useMemo(() => copy.nav.map((item) => item.href), [copy.nav]);
  const activeSection = useActiveSection(navHrefs);
  const { theme, toggleTheme } = useTheme();

  // Dynamic SEO & Meta updates
  useDocumentMeta(
    `${canonicalProfile.name} | ${copy.meta.label}`,
    copy.hero.subtitle,
    copy.meta.locale
  );
  
  useRevealMotion();

  return (
    <div className="app-shell">
      <Header
        copy={copy}
        languageHref={languageHref}
        homeHref={homeHref}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main>
        <Hero copy={copy} />
        <ValueCards copy={copy} />
        <CaseStudyCards copy={copy} />
        <ProductOpsSystem copy={copy} />
        <EvidenceMetrics copy={copy} />
        <SkillsGrid copy={copy} />
        <CareerTimeline copy={copy} />
        <ThinkingSignals copy={copy} />
        <Writing copy={copy} />
        <Confidentiality copy={copy} />
        <ContactCTA copy={copy} />
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
    <article className="metric-card liquid-glass-card">
      <div className="card-glass-glow" />
      <div className="card-fluid-blob" />
      <div className="card-content">
        <span>{item.label}</span>
        <strong>{item.value}</strong>
        <p>{item.note}</p>
      </div>
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
      <article className="confidentiality-card liquid-glass-card">
        <div className="card-glass-glow" />
        <div className="card-fluid-blob" />
        <div className="card-content confidentiality-layout">
          <ShieldCheck size={24} aria-hidden="true" className="shield-icon" />
          <div>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
            <ul>
              {note.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
}

function PillarGrid({ items, compact = false }: { items: Pillar[]; compact?: boolean }) {
  return (
    <div className={compact ? "pillar-grid compact" : "pillar-grid"}>
      {items.map((item) => (
        <article className="pillar-card liquid-glass-card" key={item.title}>
          <div className="card-glass-glow" />
          <div className="card-fluid-blob" />
          <div className="card-content">
            <FileText size={22} aria-hidden="true" className="pillar-icon" />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

function Footer({ copy }: { copy: SiteCopy }) {
  return (
    <footer className="site-footer">
      <div>
        <strong>{canonicalProfile.name}</strong>
        <span>AI Product Builder</span>
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

function useDocumentMeta(title: string, description: string, locale: Locale) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);
    
    document.documentElement.lang = locale;
  }, [title, description, locale]);
}

export default App;
