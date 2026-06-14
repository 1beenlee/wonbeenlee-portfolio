import { Sparkles, Cpu, ShieldCheck } from "lucide-react";
import type { SiteCopy } from "../content/types";
import { canonicalProfile } from "../content/profile.shared";
import { SectionIntro } from "./ValueCards";

function renderToolLogo(toolName: string) {
  const name = toolName.toLowerCase();
  if (name.includes("jira")) {
    return <img src="/logos/jira.svg?v=5" alt="Jira" className="tool-logo-img" />;
  }
  if (name.includes("confluence")) {
    return <img src="/logos/confluence.svg?v=5" alt="Confluence" className="tool-logo-img" />;
  }
  if (name.includes("storylane") || name.includes("demo")) {
    return <img src="/logos/storylane.svg?v=5" alt="Storylane" className="tool-logo-img" />;
  }
  if (name.includes("skills")) {
    return <Sparkles size={20} className="tool-logo-icon" />;
  }
  if (name.includes("figma")) {
    return <img src="/logos/figma.svg?v=5" alt="Figma" className="tool-logo-img" />;
  }
  if (name.includes("linear")) {
    return <img src="/logos/linear.svg?v=5" alt="Linear" className="tool-logo-img" />;
  }
  if (name.includes("mcp") || name.includes("orchestration")) {
    return <img src="/logos/mcp.svg?v=5" alt="MCP" className="tool-logo-img" />;
  }
  if (name.includes("compliance") || name.includes("trust")) {
    return <ShieldCheck size={20} className="tool-logo-icon" />;
  }
  return <Cpu size={20} className="tool-logo-icon" />;
}

function getToolIconClass(toolName: string) {
  const name = toolName.toLowerCase();
  if (name.includes("jira")) return "icon-jira";
  if (name.includes("confluence")) return "icon-confluence";
  if (name.includes("storylane") || name.includes("demo")) return "icon-storylane";
  if (name.includes("skills")) return "icon-skills";
  if (name.includes("figma")) return "icon-figma";
  if (name.includes("linear")) return "icon-linear";
  if (name.includes("mcp") || name.includes("orchestration")) return "icon-ai";
  if (name.includes("compliance") || name.includes("trust")) return "icon-trust";
  return "";
}

function renderEvidenceBadges(toolName: string, evidenceText: string) {
  const name = toolName.toLowerCase();
  if (name.includes("mcp") || name.includes("orchestration")) {
    const badges = [
      { name: "Claude", logo: "/logos/claude.svg?v=5" },
      { name: "ChatGPT", logo: "/logos/chatgpt.svg?v=5" },
      { name: "Antigravity", logo: "/logos/antigravity.svg?v=5" },
      { name: "Cursor", logo: "/logos/cursor.svg?v=5" },
      { name: "Genspark", logo: "/logos/genspark.svg?v=5" }
    ];
    return (
      <div className="stack-badge-group">
        {badges.map((b) => (
          <span key={b.name} className="stack-inline-badge">
            <img src={b.logo} alt={b.name} className="badge-logo" />
            <span className="badge-text">{b.name}</span>
          </span>
        ))}
      </div>
    );
  }

  return <span className="stack-single-badge">{evidenceText}</span>;
}

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
        {/* Operating Stack rows with ambient glass texture */}
        <div className="stack-table" role="table" aria-label={copy.ui.operatingStackAriaLabel}>
          {data.items.filter((item) => !item.hidden).map((item) => (
            <article className="stack-row liquid-glass-card" key={item.tool}>
              <div className="card-glass-glow" />
              <div className="card-fluid-blob" />
              <div className="stack-row-content">
                <div className={`stack-icon-box ${getToolIconClass(item.tool)}`}>
                  {renderToolLogo(item.tool)}
                </div>
                <div className="stack-tool-details">
                  <strong className="stack-tool-title">{item.tool}</strong>
                  <p className="stack-tool-capability">{item.capability}</p>
                  <div className="stack-evidence-box">
                    {renderEvidenceBadges(item.tool, item.evidence)}
                  </div>
                </div>
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
