import { ArrowRight, Sparkles, RefreshCw } from "lucide-react";
import type { SiteCopy } from "../content/types";
import { SectionIntro } from "./ValueCards";

export function ProductOpsSystem({ copy }: { copy: SiteCopy }) {
  const data = copy.sections.productOps;

  return (
    <section className="content-band reveal-target" id="productOps">
      <SectionIntro
        kicker={data.kicker}
        title={data.title}
        body={data.body}
      />
      
      <div className="product-ops-container">
        {/* Stages Flow (Left/Main Area) */}
        <div className="ops-flow-wrapper">
          <div className="ops-stages">
            {data.stages.map((stage, idx) => (
              <div key={stage.id} className="ops-stage-card liquid-glass-card">
                <div className="card-glass-glow" />
                <div className="card-fluid-blob" />
                
                <div className="ops-stage-header">
                  <span className="ops-stage-number">0{idx + 1}</span>
                  <h3>{stage.title}</h3>
                </div>
                <ul className="ops-stage-items">
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                
                {/* Connecting arrow (not on last one on desktop) */}
                {idx < data.stages.length - 1 && (
                  <div className="ops-stage-arrow" aria-hidden="true">
                    <ArrowRight size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Continuous Loop indicator */}
          <div className="ops-loop-line">
            <span className="loop-label">
              <RefreshCw size={12} className="spinning-icon" />
              {data.loopLabel}
            </span>
          </div>
        </div>

        {/* AI Copilot Side Panel (Right Area) */}
        <aside className="ops-copilot-card liquid-glass-card">
          <div className="card-glass-glow" />
          <div className="card-fluid-blob" />
          
          <div className="copilot-header">
            <div className="copilot-icon-badge">
              <Sparkles size={18} className="pulsing-spark" />
            </div>
            <div>
              <h3>{data.copilotTitle}</h3>
              <span className="copilot-tag">Active</span>
            </div>
          </div>
          <p className="copilot-desc">{data.copilotBody}</p>
          
          <div className="copilot-features">
            {data.copilotFeatures.map((feat) => (
              <div key={feat} className="copilot-feat-pill">
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
