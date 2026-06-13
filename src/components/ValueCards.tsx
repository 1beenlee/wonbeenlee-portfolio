import { Network, Workflow, TableProperties, Sparkles, ShieldCheck, Bot, FileText } from "lucide-react";
import type { SiteCopy } from "../content/types";

const pillarIcons = [Network, Workflow, TableProperties, Sparkles, ShieldCheck, Bot];

export function SectionIntro({
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

export function ValueCards({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band reveal-target" id="positioning">
      <SectionIntro
        kicker={copy.sections.positioning.kicker}
        title={copy.sections.positioning.title}
        body={copy.sections.positioning.body}
      />
      <div className="pillar-grid">
        {copy.sections.positioning.pillars.map((item, index) => {
          const Icon = pillarIcons[index] ?? FileText;
          return (
            <article className="pillar-card liquid-glass-card" key={item.title}>
              {/* Liquid glass card details */}
              <div className="card-glass-glow" />
              <div className="card-fluid-blob" />
              
              <div className="card-content">
                <div className="card-icon-wrapper">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
