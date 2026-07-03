import type { SimplifiedCopy } from "../content/profile.simplified";
import { SectionIntro } from "./ValueCards";

export function SimplifiedWorkStyle({ copy }: { copy: SimplifiedCopy }) {
  return (
    <section className="content-band simplified-section simplified-section--how reveal-target" id="how">
      <SectionIntro kicker={copy.workStyle.kicker} title={copy.workStyle.title} />
      <div className="work-style-grid">
        {copy.workStyle.steps.map((step, index) => (
          <article className="work-style-card liquid-glass-card" key={step.title}>
            <span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
