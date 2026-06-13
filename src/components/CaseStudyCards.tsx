import { CheckCircle2, LockKeyhole } from "lucide-react";
import type { SiteCopy, CaseStudy } from "../content/types";
import { SectionIntro } from "./ValueCards";

export function CaseStudyCards({ copy }: { copy: SiteCopy }) {
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
    <article className="case-card liquid-glass-card">
      <div className="card-glass-glow" />
      <div className="card-fluid-blob" />
      
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
      <div className="case-preview-container">
        <SyntheticPreview item={item} copy={copy} />
      </div>
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
        <LockKeyhole size={14} aria-hidden="true" />
        <span>{copy.ui.syntheticPreviewNote}</span>
      </div>
    </div>
  );
}
