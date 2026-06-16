import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import {
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  Linkedin,
  X,
  ChevronRight,
  ChevronDown,
  ExternalLink
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
import { CaseStudyModal } from "./components/CaseStudyModal";
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

  // Helper to safely read and validate the 'case' param from URL
  const getCaseParam = useCallback(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    const val = params.get("case");
    const isValid = copy.sections.selectedWork.cases.some((c) => c.id === val);
    return isValid ? val : null;
  }, [copy]);

  const getSkillParam = useCallback(() => {
    if (typeof window === "undefined") return null;
    const params = new URLSearchParams(window.location.search);
    return params.get("skill");
  }, []);

  const [activeCaseId, setActiveCaseId] = useState<string | null>(getCaseParam());
  const [selectedSkillId, setSelectedSkillId] = useState<string | null>(getSkillParam());
  const [isLinkedInModalOpen, setIsLinkedInModalOpen] = useState(false);
  const [confirmOutlinkUrl, setConfirmOutlinkUrl] = useState<string | null>(null);

  // Listen to browser forward/back buttons (popstate)
  useEffect(() => {
    const handlePopState = () => {
      setActiveCaseId(getCaseParam());
      setSelectedSkillId(getSkillParam());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [copy, getCaseParam, getSkillParam]);

  // Handle open case modal (push state to history)
  const openCase = (caseId: string, initialSkillId?: string) => {
    setActiveCaseId(caseId);
    setSelectedSkillId(initialSkillId || null);
    const params = new URLSearchParams(window.location.search);
    params.set("case", caseId);
    if (initialSkillId) {
      params.set("skill", initialSkillId);
    } else {
      params.delete("skill");
    }
    const newUrl = `${window.location.pathname}?${params.toString()}${window.location.hash}`;
    window.history.pushState({ caseId, skillId: initialSkillId }, "", newUrl);
  };

  // Handle close case modal (push state with removed param)
  const closeCase = () => {
    setActiveCaseId(null);
    setSelectedSkillId(null);
    const params = new URLSearchParams(window.location.search);
    params.delete("case");
    params.delete("skill");
    const searchStr = params.toString();
    const newUrl = `${window.location.pathname}${searchStr ? "?" + searchStr : ""}${window.location.hash}`;
    window.history.pushState({}, "", newUrl);
  };

  // Dynamic SEO & Meta updates
  useDocumentMeta(
    `${canonicalProfile.name} | ${copy.meta.label}`,
    copy.hero.subtitle,
    copy.meta.locale
  );
  
  useRevealMotion();

  useEffect(() => {
    let highlightTimeoutId: number | undefined;
    let removeTimeoutId: number | undefined;

    const triggerHighlight = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        // Clear any pending timeouts
        if (highlightTimeoutId) clearTimeout(highlightTimeoutId);
        if (removeTimeoutId) clearTimeout(removeTimeoutId);

        // Immediately remove highlight class from all sections to avoid duplicates
        document.querySelectorAll(".pulse-highlight").forEach((el) => {
          el.classList.remove("pulse-highlight");
        });
        
        // Wait 1 second (1000ms) for the scroll to finish, then trigger the 2-second pulse
        highlightTimeoutId = window.setTimeout(() => {
          void element.offsetWidth; // force reflow
          element.classList.add("pulse-highlight");
          
          removeTimeoutId = window.setTimeout(() => {
            element.classList.remove("pulse-highlight");
          }, 2000);
        }, 1000);
      }
    };

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;
      
      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const id = href.slice(1);
        triggerHighlight(id);
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        triggerHighlight(window.location.hash.slice(1));
      }
    };

    // Trigger on mount if hash is present
    if (window.location.hash) {
      setTimeout(() => {
        handleHashChange();
      }, 500);
    }

    window.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      if (highlightTimeoutId) clearTimeout(highlightTimeoutId);
      if (removeTimeoutId) clearTimeout(removeTimeoutId);
      window.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

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
        <Hero copy={copy} onCaidentiaClick={(url) => setConfirmOutlinkUrl(url)} />
        <ValueCards copy={copy} />
        <CaseStudyCards copy={copy} onOpenCase={openCase} />
        <ProductOpsSystem copy={copy} />
        <EvidenceMetrics copy={copy} onLinkedInClick={() => setIsLinkedInModalOpen(true)} />
        <SkillsGrid copy={copy} />
        <CareerTimeline copy={copy} />
        <ThinkingSignals copy={copy} />
        <Writing copy={copy} onOutlinkClick={(url) => setConfirmOutlinkUrl(url)} />
        <Confidentiality copy={copy} />
        <ContactCTA copy={copy} />
      </main>
      <Footer copy={copy} />
      {activeCaseId && (
        <CaseStudyModal
          caseId={activeCaseId}
          copy={copy}
          onClose={closeCase}
          initialSkillId={selectedSkillId}
        />
      )}
      <LinkedInModal
        isOpen={isLinkedInModalOpen}
        isKo={copy.meta.locale === "ko"}
        onClose={() => setIsLinkedInModalOpen(false)}
        onNavigateToArticle={(url) => setConfirmOutlinkUrl(url)}
      />
      <OutlinkConfirmModal
        url={confirmOutlinkUrl}
        isKo={copy.meta.locale === "ko"}
        onCancel={() => setConfirmOutlinkUrl(null)}
        onConfirm={() => {
          if (confirmOutlinkUrl) {
            window.open(confirmOutlinkUrl, "_blank", "noopener,noreferrer");
          }
          setConfirmOutlinkUrl(null);
        }}
      />
      {/* Liquid Glass Refraction SVG Filters */}
      <svg style={{ position: "absolute", width: 0, height: 0, pointerEvents: "none" }} aria-hidden="true">
        <filter id="liquid-glass-refraction-core">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise" seed="5" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="liquid-glass-refraction-sat">
          <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" result="noise" seed="12" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="liquid-glass-refraction-cta">
          <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="1" result="noise" seed="42" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </div>
  );
}

function getHomeHref(audience: Audience, locale: Locale): string {
  if (audience === "public") {
    return locale === "ko" ? "/public" : "/public/en";
  }
  return locale === "ko" ? "/" : "/en";
}

function EvidenceMetrics({ copy, onLinkedInClick }: { copy: SiteCopy; onLinkedInClick?: () => void }) {
  return (
    <section className="content-band reveal-target" id="metrics">
      <SectionIntro
        kicker={copy.sections.evidenceMetrics.kicker}
        title={copy.sections.evidenceMetrics.title}
        body={copy.sections.evidenceMetrics.body}
      />
      <div className="metric-grid">
        {copy.sections.evidenceMetrics.metrics.map((item) => (
          <MetricCard 
            key={`${item.label}-${item.value}`} 
            item={item} 
            onLinkedInClick={onLinkedInClick} 
          />
        ))}
      </div>
    </section>
  );
}

function MetricCard({ item, onLinkedInClick }: { item: EvidenceMetric; onLinkedInClick?: () => void }) {
  const isLinkedInCard = item.label.toLowerCase().includes("linkedin");

  if (isLinkedInCard && onLinkedInClick) {
    return (
      <article
        className="metric-card liquid-glass-card clickable-card"
        onClick={onLinkedInClick}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onLinkedInClick();
            e.preventDefault();
          }
        }}
        data-testid="linkedin-articles-card"
      >
        <div className="card-glass-glow" />
        <div className="card-fluid-blob" />
        <div className="card-content" style={{ position: "relative" }}>
          <div style={{ position: "absolute", top: 0, right: 0, color: "var(--accent)", opacity: 0.8 }}>
            <Linkedin size={20} />
          </div>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
          <p>{item.note}</p>
        </div>
      </article>
    );
  }

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

function Writing({ copy, onOutlinkClick }: { copy: SiteCopy; onOutlinkClick: (url: string) => void }) {
  return (
    <section className="content-band reveal-target">
      <SectionIntro
        kicker={copy.sections.writing.kicker}
        title={copy.sections.writing.title}
        body={copy.sections.writing.body}
      />
      <PillarGrid items={copy.sections.writing.items} compact onOutlinkClick={onOutlinkClick} />
    </section>
  );
}

function Confidentiality({ copy }: { copy: SiteCopy }) {
  const [isOpen, setIsOpen] = useState(false);
  const note = copy.sections.confidentiality.note;

  return (
    <section className="content-band confidentiality-band reveal-target">
      <SectionIntro
        kicker={copy.sections.confidentiality.kicker}
        title={copy.sections.confidentiality.title}
        body={copy.sections.confidentiality.body}
      />
      <article className={`confidentiality-card liquid-glass-card ${isOpen ? "is-open" : ""}`}>
        <div className="card-glass-glow" />
        <div className="card-fluid-blob" />
        
        <button 
          className="confidentiality-header-btn" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          <div className="confidentiality-header-left">
            <ShieldCheck size={22} aria-hidden="true" className="shield-icon" />
            <h3>{note.title}</h3>
          </div>
          <div className="confidentiality-toggle-icon" aria-hidden="true">
            {isOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </div>
        </button>

        <div className={`confidentiality-body-wrapper ${isOpen ? "show" : ""}`}>
          <div className="card-content confidentiality-layout">
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

function PillarGrid({
  items,
  compact = false,
  onOutlinkClick
}: {
  items: Pillar[];
  compact?: boolean;
  onOutlinkClick?: (url: string) => void;
}) {
  return (
    <div className={compact ? "pillar-grid compact" : "pillar-grid"}>
      {items.map((item) => {
        const isLinkedInPostCard =
          item.title.includes("LinkedIn 게시글") ||
          item.title.includes("LinkedIn Posts") ||
          item.title === "LinkedIn 게시글" ||
          item.title === "LinkedIn Posts" ||
          item.title.includes("LinkedIn 글") ||
          item.title.includes("LinkedIn articles");

        if (isLinkedInPostCard && onOutlinkClick) {
          const targetUrl = "https://www.linkedin.com/in/wonbeenlee/recent-activity/all/";
          return (
            <article
              className="pillar-card liquid-glass-card clickable-pillar-card"
              key={item.title}
              onClick={() => onOutlinkClick(targetUrl)}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <div className="card-glass-glow" />
              <div className="card-fluid-blob" />
              <div className="card-content">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", width: "100%" }}>
                  <FileText size={22} aria-hidden="true" className="pillar-icon" />
                  <ExternalLink size={14} className="outlink-icon" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          );
        }

        return (
          <article className="pillar-card liquid-glass-card" key={item.title}>
            <div className="card-glass-glow" />
            <div className="card-fluid-blob" />
            <div className="card-content">
              <FileText size={22} aria-hidden="true" className="pillar-icon" />
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          </article>
        );
      })}
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
    document.documentElement.lang = locale;

    const setMetaTag = (attrName: string, attrVal: string, content: string) => {
      let meta = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attrName, attrVal);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Standard meta description
    setMetaTag("name", "description", description);

    // Open Graph meta tags
    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", window.location.href);

    // Twitter card meta tags
    setMetaTag("property", "twitter:title", title);
    setMetaTag("property", "twitter:description", description);
    setMetaTag("property", "twitter:url", window.location.href);
  }, [title, description, locale]);
}

export default App;

const linkedinArticlesKo = [
  {
    part: "Part 1",
    date: "2026.02.24",
    title: "AI 도입이 프로세스 재설계를 강제한 이유",
    hookingSentence: "AI는 단순히 기획을 빠르게 만든 것이 아니라, 오히려 불일치(misalignment)를 대규모로 더 쉽게 만들었습니다.",
    summary: "문서 초안 작성이 쉬워짐에 따라 병목 지점은 이제 맥락 파악, 검증, 그리고 부서 간 정렬로 이동했습니다. 결국 AI 도입은 단순한 도구의 선택이 아니라, 제품 개발의 전체 운영 모델을 재설계하는 과정이어야 합니다.",
    image: `${import.meta.env.BASE_URL}linkedin-part1.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-1-why-adoption-lee-sx3hc"
  },
  {
    part: "Part 2",
    date: "2026.03.08",
    title: "전략: 허브(Hub), 파이프라인(Pipeline), 그리고 거버넌스(Governance)",
    hookingSentence: "더 이상 AI가 유용한 것을 만들어낼 수 있는지가 아니라, 제품 기획 팀이 그 산출물을 반복 가능하고 통제 가능하게 만들 수 있는지가 핵심입니다.",
    summary: "AI 결과물의 품질을 안정적으로 유지하고 협업 구조에 안착시키기 위해, 저는 세 가지 레이어(Hub → Pipeline → Governance)로 구조화하여 접근하는 것이 실질적이고 유용함을 발견했습니다.",
    image: `${import.meta.env.BASE_URL}linkedin-part2.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-2-strategy-wonbeen-lee-yczxc"
  },
  {
    part: "Part 3",
    date: "2026.04.04",
    title: "프레임워크가 실현되는 곳: 워크플로우 내 유즈케이스",
    hookingSentence: "AI가 인상적인 단발성 결과물이 아니라, 제품 기획 프로세스의 반복 가능한 워크플로우에 결합되기 시작할 때 진정한 가치가 시작됩니다.",
    summary: "기획 업무에서 가장 실용적인 AI 활용은 단순 속도 향상이 아니라, 문서 간 연결성 확보, 리서치 지원, 프로토타입 기반 검증, 산출물 리뷰 등 전체 흐름을 일관되게 연결하는 유즈케이스들을 안착시키는 것입니다.",
    image: `${import.meta.env.BASE_URL}linkedin-part3.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-3-where-wonbeen-lee-cdwmc"
  },
  {
    part: "Part 4",
    date: "2026.05.25",
    title: "개인의 프롬프트에서 팀의 역량으로",
    hookingSentence: "반복 가능한 유즈케이스는 중요한 진전이지만, 그것이 곧 조직 전체의 핵심 역량이 됨을 의미하는 것은 아닙니다.",
    summary: "AI가 기획 팀 내에서 유기적으로 확장되려면, 공유된 스킬, 템플릿, 그리고 검토 가이드라인을 통해 업무 흐름 자체가 자산화되어야 합니다. 진짜 자산은 프롬프트 자체가 아니라, 그것을 둘러싸고 있는 운영 구조입니다.",
    image: `${import.meta.env.BASE_URL}linkedin-part4.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-4-from-wonbeen-lee-fhskc"
  },
  {
    part: "Part 5",
    date: "2026.06.08",
    title: "이것이 PM 역할에 가져온 변화",
    hookingSentence: "AI는 제품 PM의 판단 영역을 없애는 것이 아니라, 오히려 제품 판단력과 의사결정이 개입해야 할 지점을 바꾸어 놓습니다.",
    summary: "초안 생성이 자동화되면서 PM의 역할은 모든 산출물을 수동으로 작성하는 수준을 넘어, 맥락과 표준을 설계하고, 리뷰 로직과 워크플로우를 정립하여 팀 전체에 양질의 결과물이 원활히 전달되도록 조율하는 방향으로 전환됩니다.",
    image: `${import.meta.env.BASE_URL}linkedin-part5.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-5-what-wonbeen-lee-5rpzc"
  }
];

const linkedinArticlesEn = [
  {
    part: "Part 1",
    date: "2026.02.24",
    title: "Why AI adoption forced a process redesign",
    hookingSentence: "AI didn't simply make planning faster; it made misalignment easier to create at scale.",
    summary: "AI didn't simply make planning faster. It made misalignment easier to create at scale. When drafting becomes cheap, the bottleneck shifts to context, verification, and alignment. So AI adoption isn't a tool decision—it's an operating model redesign.",
    image: `${import.meta.env.BASE_URL}linkedin-part1.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-1-why-adoption-lee-sx3hc"
  },
  {
    part: "Part 2",
    date: "2026.03.08",
    title: "The strategy: Hub, pipeline, and governance",
    hookingSentence: "The problem is no longer whether AI can generate something useful, but whether a team can make those outputs repeatable and governable.",
    summary: "The problem is no longer whether AI can generate something useful. The real challenge is whether a product planning team can make those outputs repeatable, connected, and governable. That's why I've found it more useful to think in three layers: Hub → Pipeline → Governance.",
    image: `${import.meta.env.BASE_URL}linkedin-part2.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-2-strategy-wonbeen-lee-yczxc"
  },
  {
    part: "Part 3",
    date: "2026.04.04",
    title: "Where the framework became real: use cases inside the workflow",
    hookingSentence: "The shift became real when AI stopped feeling like a set of impressive one-off outputs and started fitting into repeatable workflow use cases.",
    summary: "The shift became real for me when AI stopped feeling like a set of impressive one-off outputs and started fitting into repeatable workflow use cases. In product planning, the most useful use cases were not just faster drafting, but connected documentation, research support, prototype-oriented workflows, and review checks that made the work easier to repeat, review, and hand off.",
    image: `${import.meta.env.BASE_URL}linkedin-part3.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-3-where-wonbeen-lee-cdwmc"
  },
  {
    part: "Part 4",
    date: "2026.05.25",
    title: "From personal prompts to team capability",
    hookingSentence: "Repeatable use cases are an important step, but they are still not the same as team capability.",
    summary: "Repeatable use cases are an important step, but they are still not the same as team capability. For AI to scale inside a product planning team, useful workflows need to become reusable through shared skills, templates, standards, and review logic. The real asset is not the prompt alone. It is the operating structure around it.",
    image: `${import.meta.env.BASE_URL}linkedin-part4.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-4-from-wonbeen-lee-fhskc"
  },
  {
    part: "Part 5",
    date: "2026.06.08",
    title: "What this changed about the PM role",
    hookingSentence: "AI does not remove the need for product judgment; it changes where that judgment shows up.",
    summary: "AI does not remove the need for product judgment. It changes where that judgment shows up. As AI makes it easier to generate outputs, the product manager's role shifts from producing every artifact manually to designing the context, standards, review logic, and workflow that help good artifacts flow across the team.",
    image: `${import.meta.env.BASE_URL}linkedin-part5.webp`,
    url: "https://www.linkedin.com/pulse/my-journey-bringing-ai-product-planning-part-5-what-wonbeen-lee-5rpzc"
  }
];

interface LinkedInModalProps {
  isOpen: boolean;
  isKo: boolean;
  onClose: () => void;
  onNavigateToArticle: (url: string) => void;
}

function LinkedInModal({ isOpen, isKo, onClose, onNavigateToArticle }: LinkedInModalProps) {
  const articles = isKo ? linkedinArticlesKo : linkedinArticlesEn;
  const [activeIndex, setActiveIndex] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : articles.length - 1));
      } else if (e.key === "ArrowRight") {
        setActiveIndex((prev) => (prev < articles.length - 1 ? prev + 1 : 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, articles.length]);

  if (!isOpen) return null;

  const currentArticle = articles[activeIndex];
  const readLabel = isKo ? "원문 읽기" : "Read Article";
  const closeLabel = isKo ? "닫기" : "Close";

  return (
    <div 
      className="modal-overlay" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="linkedin-modal-title"
    >
      <div className="modal-panel liquid-glass-card linkedin-carousel-modal-panel" ref={modalRef}>
        <div className="card-glass-glow" />
        <div className="card-fluid-blob" />

        <div className="modal-header">
          <div className="modal-title-area">
            <span className="case-label">LinkedIn Series</span>
            <h2 id="linkedin-modal-title">{currentArticle.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="icon-button modal-close-btn"
            aria-label={closeLabel}
            data-testid="linkedin-close-btn"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-scroll-content">
          <div className="carousel-container">
            <div className="carousel-slide-wrapper">
              <div className="carousel-slide">
                <div className="carousel-image-box">
                  <img src={currentArticle.image} alt={`${currentArticle.part} cover`} />
                </div>
                <div className="carousel-content-box">
                  <div className="carousel-meta-row">
                    <span className="carousel-part-badge">{currentArticle.part}</span>
                    <span className="carousel-date">{currentArticle.date}</span>
                  </div>
                  <h3 className="carousel-title">{currentArticle.hookingSentence}</h3>
                  <p className="carousel-summary">{currentArticle.summary}</p>
                  
                  <div className="carousel-actions-row">
                    <button
                      className="primary-button"
                      onClick={() => onNavigateToArticle(currentArticle.url)}
                      style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                    >
                      <span>{readLabel}</span>
                      <span aria-hidden="true">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-nav-row">
              <button
                className="carousel-arrow-btn"
                onClick={() => setActiveIndex((prev) => (prev > 0 ? prev - 1 : articles.length - 1))}
                aria-label={isKo ? "이전 슬라이드" : "Previous slide"}
              >
                &larr;
              </button>

              <div className="carousel-dots" role="tablist">
                {articles.map((_, idx) => (
                  <button
                    key={idx}
                    role="tab"
                    aria-selected={idx === activeIndex}
                    className={`carousel-dot ${idx === activeIndex ? "is-active" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                className="carousel-arrow-btn"
                onClick={() => setActiveIndex((prev) => (prev < articles.length - 1 ? prev + 1 : 0))}
                aria-label={isKo ? "다음 슬라이드" : "Next slide"}
              >
                &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface OutlinkConfirmModalProps {
  url: string | null;
  isKo: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

function OutlinkConfirmModal({ url, isKo, onCancel, onConfirm }: OutlinkConfirmModalProps) {
  if (!url) return null;

  const titleText = isKo ? "외부 페이지로 이동하시겠습니까?" : "Do you want to navigate to an external page?";
  const bodyText = isKo 
    ? "보안 정책에 따라 외부 페이지로 이동 시 동의가 필요합니다. 이동하시겠습니까?" 
    : "According to security policies, consent is required when moving to an external page. Would you like to proceed?";
  const cancelLabel = isKo ? "취소" : "Cancel";
  const confirmLabel = isKo ? "이동" : "Proceed";

  return (
    <div className="outlink-confirm-overlay" onClick={onCancel}>
      <div className="outlink-confirm-panel" onClick={(e) => e.stopPropagation()}>
        <div className="outlink-header">
          <h3>{titleText}</h3>
        </div>
        <div className="outlink-body">
          <p>{bodyText}</p>
          <div className="outlink-url-box">{url}</div>
        </div>
        <div className="outlink-actions">
          <button className="secondary-button" onClick={onCancel}>
            {cancelLabel}
          </button>
          <button className="primary-button" onClick={onConfirm} data-testid="outlink-confirm-btn">
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
