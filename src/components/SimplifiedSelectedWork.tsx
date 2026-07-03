import { ArrowRight } from "lucide-react";
import { Fragment } from "react";
import type { SiteCopy } from "../content/types";
import type { SimplifiedCaseCard, SimplifiedCopy } from "../content/profile.simplified";
import { SectionIntro } from "./ValueCards";

export function SimplifiedSelectedWork({ copy, siteCopy, onOpenCase }: { copy: SimplifiedCopy; siteCopy: SiteCopy; onOpenCase: (id: string) => void }) {
  return (
    <section className="content-band tinted simplified-section simplified-section--work reveal-target" id="work">
      <SectionIntro kicker={copy.selectedWork.kicker} title={copy.selectedWork.title} body={copy.selectedWork.body} />
      <div className="proof-grid">
        {copy.selectedWork.cases.map((item) => (
          <article className={`proof-card proof-card--${item.track} liquid-glass-card`} key={item.caseId} data-testid={`simplified-case-${item.caseId}`}>
            <div className="card-glass-glow" /><div className="card-fluid-blob" />
            <div className="proof-copy">
              <span className="case-label">{item.category}</span><h3>{item.title}</h3><p>{item.summary}</p>
            </div>
            <div className="proof-chips">{item.chips.map((chip) => <span key={chip}>{chip}</span>)}</div>
            <CasePreview item={item} fallbackLabel={siteCopy.ui.syntheticPreviewKicker} />
            <button className="proof-action" onClick={() => onOpenCase(item.caseId)} data-testid={`simplified-open-${item.caseId}`}>{copy.selectedWork.action}<ArrowRight size={16} /></button>
          </article>
        ))}
      </div>
    </section>
  );
}

function CasePreview({ item, fallbackLabel }: { item: SimplifiedCaseCard; fallbackLabel: string }) {
  return (
    <div className={`proof-preview proof-preview--${item.preview.variant}`}>
      <div className="proof-preview-heading"><small>{item.preview.label || fallbackLabel}</small><strong>{item.preview.title}</strong></div>
      <div className="proof-preview-visual" aria-hidden="true">
        {item.preview.items.map((label, index) => (
          <Fragment key={label}>
            <span className="proof-preview-node" data-index={String(index + 1).padStart(2, "0")}>{label}</span>
            {index < item.preview.items.length - 1 && <span className="proof-preview-connector" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
