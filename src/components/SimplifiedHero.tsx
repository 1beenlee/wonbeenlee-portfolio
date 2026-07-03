import { ProductOrbit } from "./ProductOrbit";
import type { SimplifiedCopy } from "../content/profile.simplified";
import { Compass, Network, ArrowUpRight } from "lucide-react";

export function SimplifiedHero({ copy, detailedHref }: { copy: SimplifiedCopy; detailedHref: string }) {
  return (
    <section className="hero-band simplified-hero reveal-target" id="top">
      <div className="simplified-hero-grid">
        <div className="simplified-hero-copy">
          <span className="eyebrow">{copy.hero.eyebrow}</span>
          <h1>{copy.hero.headline}</h1>
          <p className="simplified-hero-description">{copy.hero.description}</p>
          <p className="simplified-domain-line">{copy.hero.domainLine}</p>
          <div className="hero-actions simplified-hero-actions">
            <a className="primary-button" href="#work">{copy.hero.primaryAction}</a>
            <a className="secondary-button" href="#contact">{copy.hero.contactAction}</a>
            <a className="simplified-tertiary-link" href={detailedHref}>{copy.hero.detailedAction}<ArrowUpRight size={15} /></a>
          </div>
        </div>
        <div className="simplified-orbit-wrap"><ProductOrbit /></div>
      </div>
      <div className="track-grid">
        {copy.tracks.map((track) => (
          <article className={`track-card track-card--${track.id} liquid-glass-card`} key={track.title}>
            <div className="card-glass-glow" /><div className="card-fluid-blob" />
            <div className="track-pattern" aria-hidden="true" />
            <div className="card-content track-card-content">
              <div className="track-heading"><span className="track-icon">{track.id === "product" ? <Compass size={20} /> : <Network size={20} />}</span><div><h2>{track.title}</h2><p>{track.description}</p></div></div>
              <ul className="track-keywords">{track.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="track-proofs">{track.proofs.map((proof) => <span key={proof}>{proof}</span>)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
