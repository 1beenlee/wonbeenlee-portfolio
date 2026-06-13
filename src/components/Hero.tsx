import { ArrowRight, Mail } from "lucide-react";
import { canonicalProfile } from "../content/profile.shared";
import type { SiteCopy } from "../content/types";
import { ProductOrbit } from "./ProductOrbit";

export function Hero({ copy }: { copy: SiteCopy }) {
  return (
    <section className="hero-band" id="top">
      {/* Global unclipped liquid glass background */}
      <div className="liquid-glass-background">
        <div className="blob blob-teal" />
        <div className="blob blob-cyan" />
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">AI-ENABLED PRODUCT LEADER</span>
          <h1>
            <span className="hero-name">{canonicalProfile.name}</span>
            <span className="hero-title">{copy.hero.title}</span>
          </h1>
          <p className="hero-subtitle">{copy.hero.subtitle}</p>
          
          <div className="hero-actions">
            <a className="primary-button" href={copy.hero.primaryHref}>
              <span>{copy.hero.primaryAction}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-button" href="#contact">
              <span>{copy.sections.contact.title}</span>
              <Mail size={17} aria-hidden="true" />
            </a>
          </div>

          {/* Profile highlights styled as B2B SaaS metric cards */}
          <div className="hero-metrics">
            {copy.profileCard.highlights.map((item) => (
              <div key={item.label} className="hero-metric-card">
                <span className="metric-label">{item.label}</span>
                <strong className="metric-value">{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
        
        <div className="hero-visual-wrapper">
          <ProductOrbit />
        </div>
      </div>
    </section>
  );
}
