import { MouseEvent } from "react";
import { ArrowRight, Mail } from "lucide-react";
import { canonicalProfile } from "../content/profile.shared";
import type { SiteCopy } from "../content/types";
import { ProductOrbit } from "./ProductOrbit";

export function Hero({
  copy,
  onCaidentiaClick
}: {
  copy: SiteCopy;
  onCaidentiaClick?: (url: string) => void;
}) {
  const isKo = copy.meta.locale === "ko";
  const caidentiaUrl = isKo
    ? "https://www.samsungsds.com/kr/srm/caidentia.html"
    : "https://www.samsungsds.com/en/srm/caidentia.html";

  const handleCaidentiaClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onCaidentiaClick) {
      e.preventDefault();
      onCaidentiaClick(caidentiaUrl);
    }
  };

  const titleParts = copy.hero.title.split("Caidentia");

  return (
    <section className="hero-band" id="top">
      {/* Global ambient background */}
      <div className="liquid-glass-background">
        <div className="blob blob-teal" />
        <div className="blob blob-cyan" />
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <span className="hero-badge">AI-ENABLED PRODUCT LEADER</span>
          <h1>
            <span className="hero-name">{canonicalProfile.name}</span>
            <span className="hero-title">
              {titleParts.length > 1 ? (
                <>
                  {titleParts[0]}
                  <a
                    href={caidentiaUrl}
                    className="hero-caidentia-link"
                    onClick={handleCaidentiaClick}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Caidentia
                    <span className="outlink-arrow">↗</span>
                  </a>
                  {titleParts[1]}
                </>
              ) : (
                copy.hero.title
              )}
            </span>
          </h1>
          <p className="hero-subtitle">{copy.hero.subtitle}</p>
          
          <div className="hero-actions">
            <a className="primary-button" href={copy.hero.primaryHref}>
              <span>{copy.hero.primaryAction}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="secondary-button" href="#contact">
              <span className="desktop-only-text">{copy.sections.contact.title}</span>
              <span className="mobile-only-text">Let's talk</span>
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
