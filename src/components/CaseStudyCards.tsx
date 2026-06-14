import { CheckCircle2 } from "lucide-react";
import { Fragment } from "react";
import type { SiteCopy, CaseStudy } from "../content/types";
import { SectionIntro } from "./ValueCards";

export function CaseStudyCards({
  copy,
  onOpenCase
}: {
  copy: SiteCopy;
  onOpenCase: (id: string, skillId?: string) => void;
}) {
  return (
    <section className="content-band tinted reveal-target" id="work">
      <SectionIntro
        kicker={copy.sections.selectedWork.kicker}
        title={copy.sections.selectedWork.title}
        body={copy.sections.selectedWork.body}
      />
      <div className="case-list">
        {copy.sections.selectedWork.cases.map((item) => (
          <CaseCard key={item.id} item={item} copy={copy} onOpenCase={onOpenCase} />
        ))}
      </div>
    </section>
  );
}

function CaseCard({
  item,
  copy,
  onOpenCase
}: {
  item: CaseStudy;
  copy: SiteCopy;
  onOpenCase: (id: string, skillId?: string) => void;
}) {
  // Safe extraction of optional summary, highlights, and cardMetrics with fallbacks
  const summaryText = item.summary || item.problem.substring(0, 120) + "...";
  const highlightsList = item.highlights || [];
  const cardMetricsList = item.cardMetrics || [];
  const openLabel = copy.meta.locale === "ko" ? "상세 보기" : "View Details";

  return (
    <article className="case-card liquid-glass-card" data-testid={`case-card-${item.id}`}>
      <div className="card-glass-glow" />
      <div className="card-fluid-blob" />
      
      <div className="case-copy">
        <span className="case-label">{item.label} / {item.category}</span>
        <h3>{item.title}</h3>
        
        <p className="case-summary-para">{summaryText}</p>
        
        {highlightsList.length > 0 && (
          <div className="case-highlights-section">
            <strong className="highlights-title">
              {copy.meta.locale === "ko" ? "내 기여" : "My Contribution"}
            </strong>
            <ul className="case-highlights-list">
              {highlightsList.map((highlight, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={16} className="highlight-check-icon" aria-hidden="true" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {cardMetricsList.length > 0 && (
          <div className="case-metrics-grid">
            {cardMetricsList.map((metric, idx) => (
              <div key={idx} className="case-metric-box">
                {metric.value && <strong className="case-metric-val">{metric.value}</strong>}
                <span className="case-metric-lbl">{metric.label}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="case-actions">
          <button
            onClick={() => onOpenCase(item.id)}
            className="primary-button case-cta-btn"
            data-testid={`case-open-${item.id}`}
          >
            <span>{openLabel}</span>
            <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </div>
      
      <div className="case-preview-container">
        <div className="synthetic-preview">
          <div className="synthetic-heading">
            <small>{copy.ui.syntheticPreviewKicker}</small>
            <strong>{item.previewTitle}</strong>
          </div>
          {item.id === "ai-skills" ? (
            <AiSkillsEcosystemMap
              locale={copy.meta.locale}
              onSelectSkill={(skillName) => onOpenCase(item.id, skillName)}
            />
          ) : item.id === "product-ops" ? (
            <ProductOpsTree locale={copy.meta.locale} />
          ) : (
            <ol>
              {item.previewSteps.map((step, index) => (
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          )}
        </div>

      </div>
    </article>
  );
}

export function AiSkillsEcosystemMap({
  locale,
  onSelectSkill,
  activeSkillName
}: {
  locale: string;
  onSelectSkill?: (skillName: string) => void;
  activeSkillName?: string;
}) {
  const isKo = locale === "ko";
  const stages = [
    { tag: isKo ? "접수" : "Intake", skills: ["caid-jira", "linear-pm"] },
    { tag: isKo ? "기획" : "Planning", skills: ["planning-doc-writer", "term-manager"] },
    { tag: isKo ? "프로토타입" : "Prototype", skills: ["caid-ppg-design-system", "prototype-template-maker"] },
    { tag: isKo ? "리뷰" : "Review", skills: ["user-flow", "output-reviewer"] },
    { tag: isKo ? "릴리스" : "Release", skills: ["release-prep", "compound-engineering"] }
  ];

  const getAbbr = (name: string) => {
    switch (name) {
      case "planning-doc-writer": return "planning-doc";
      case "term-manager": return "term-mgr";
      case "caid-ppg-design-system": return "caid-ppg-ds";
      case "prototype-template-maker": return "proto-tmpl";
      case "output-reviewer": return "out-reviewer";
      case "compound-engineering": return "compound-eng";
      default: return name;
    }
  };

  return (
    <div className="ecosystem-map-v3">
      {stages.map((stage, idx) => (
        <Fragment key={stage.tag}>
          <div className="ecosystem-stage-row-v3">
            <div className="stage-label-v3">
              {stage.tag}
            </div>
            <div className="stage-nodes-v3">
              {stage.skills.map((skill) => (
                <button
                  key={skill}
                  className={`ecosystem-node-v3 ${activeSkillName === skill ? "is-active" : ""}`}
                  onClick={() => onSelectSkill?.(skill)}
                  title={skill}
                  type="button"
                >
                  <span className="skill-dot" />
                  <span className="skill-name-v3">{getAbbr(skill)}</span>
                </button>
              ))}
            </div>
          </div>
          {idx < stages.length - 1 && (
            <div className="ecosystem-connector-v3">
              <div className="connector-line-v3" />
            </div>
          )}
        </Fragment>
      ))}
    </div>
  );
}

function ProductOpsTree({ locale }: { locale: string }) {
  const isKo = locale === "ko";
  const nodes = [
    { level: 0, prefix: "", label: isKo ? "목표" : "Goal" },
    { level: 1, prefix: "└─ ", label: isKo ? "이니셔티브" : "Initiative" },
    { level: 2, prefix: "    └─ ", label: isKo ? "기능 묶음" : "Feature set" },
    { level: 3, prefix: "        └─ ", label: isKo ? "기능" : "Feature" },
    { level: 4, prefix: "            ├─ ", label: isKo ? "릴리즈 노트" : "Release note", isRelease: true },
    { level: 4, prefix: "            └─ ", label: isKo ? "릴리즈 데모" : "Release demo", isRelease: true }
  ];

  return (
    <div className="product-ops-tree">
      <div className="tree-container">
        {nodes.map((node, idx) => (
          <div key={idx} className={`tree-node ${node.isRelease ? 'release-node' : ''}`}>
            <span className="tree-line">{node.prefix}</span>
            <div className="tree-node-content">
              <span className="tree-bullet">•</span>
              <p>{node.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
