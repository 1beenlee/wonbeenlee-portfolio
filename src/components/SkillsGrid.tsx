import type { SiteCopy } from "../content/types";
import { canonicalProfile } from "../content/profile.shared";
import { SectionIntro } from "./ValueCards";

export function SkillsGrid({ copy }: { copy: SiteCopy }) {
  const data = copy.sections.operatingStack;

  return (
    <section className="split-band reveal-target" id="stack">
      <SectionIntro
        kicker={data.kicker}
        title={data.title}
        body={data.body}
      />
      <div className="stack-wrapper">
        {/* Operating Stack rows with liquid glass texture */}
        <div className="stack-table" role="table" aria-label={copy.ui.operatingStackAriaLabel}>
          {data.items.map((item) => (
            <article className="stack-row liquid-glass-card" key={item.tool}>
              <div className="card-glass-glow" />
              <div className="card-fluid-blob" />
              <div className="stack-row-content">
                <strong>{item.tool}</strong>
                <p>{item.capability}</p>
                <span>{item.evidence}</span>
              </div>
            </article>
          ))}
        </div>

        {/* Product Focus Tag Grid */}
        <div className="skills-chips-wrapper">
          <div className="skills-chips-grid">
            {canonicalProfile.productFocus.map((focus) => (
              <span key={focus} className="skill-chip">
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
