import { useState, useEffect, useRef, Fragment, useCallback } from "react";
import { X, LockKeyhole, CheckCircle2 } from "lucide-react";
import type { SiteCopy } from "../content/types";
import { AiSkillsEcosystemMap } from "./CaseStudyCards";

interface CaseStudyModalProps {
  caseId: string;
  copy: SiteCopy;
  onClose: () => void;
  initialSkillId?: string | null;
}

function renderStructuredText(text: string) {
  if (!text) return null;
  const paragraphs = text.split("\n\n");
  return paragraphs.map((para, pIdx) => {
    const headingMatch = para.match(/^(\[[^\]]+\])\n?([\s\S]*)$/);
    if (headingMatch) {
      const heading = headingMatch[1];
      const body = headingMatch[2];
      const cleanHeading = heading.slice(1, -1);
      return (
        <div
          key={pIdx}
          className="structured-para-card animate-fade-in-up"
          style={{
            padding: "1.1rem 1.3rem",
            borderRadius: "10px",
            background: "rgba(255, 255, 255, 0.015)",
            border: "1px solid rgba(255, 255, 255, 0.03)",
            borderLeft: "3px solid var(--accent)",
            marginBottom: "1.2rem",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            backdropFilter: "blur(8px)",
            animationDelay: `${pIdx * 0.08}s`,
            animationFillMode: "both"
          }}
        >
          <h4
            className="structured-subheading"
            style={{
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              fontWeight: "700",
              color: "var(--accent)",
              margin: "0 0 0.55rem 0"
            }}
          >
            {cleanHeading}
          </h4>
          <p
            style={{
              margin: 0,
              whiteSpace: "pre-wrap",
              fontSize: "0.92rem",
              lineHeight: "1.68",
              color: "var(--muted)"
            }}
          >
            {body}
          </p>
        </div>
      );
    }
    return (
      <p
        key={pIdx}
        className="animate-fade-in-up"
        style={{
          whiteSpace: "pre-wrap",
          marginBottom: "1rem",
          fontSize: "0.92rem",
          lineHeight: "1.68",
          color: "var(--muted)",
          animationDelay: `${pIdx * 0.08}s`,
          animationFillMode: "both"
        }}
      >
        {para}
      </p>
    );
  });
}

function ProductOpsDetailWorkflow() {
  return (
    <div className="product-ops-detail-workflow">
      <div className="workflow-linear-steps">
        <div className="modal-workflow-step-wrapper">
          <div className="modal-workflow-step">
            <span className="step-num">01</span>
            <p>Goal</p>
          </div>
          <span className="step-connector" aria-hidden="true">&rarr;</span>
        </div>
        <div className="modal-workflow-step-wrapper">
          <div className="modal-workflow-step">
            <span className="step-num">02</span>
            <p>Initiative</p>
          </div>
          <span className="step-connector" aria-hidden="true">&rarr;</span>
        </div>
        <div className="modal-workflow-step-wrapper">
          <div className="modal-workflow-step">
            <span className="step-num">03</span>
            <p>Feature set</p>
          </div>
          <span className="step-connector" aria-hidden="true">&rarr;</span>
        </div>
        <div className="modal-workflow-step-wrapper">
          <div className="modal-workflow-step">
            <span className="step-num">04</span>
            <p>Feature</p>
          </div>
          <span className="step-connector" aria-hidden="true">&rarr;</span>
        </div>

        <div className="workflow-branches-wrapper">
          <div className="branch-connector-lines" aria-hidden="true">
            <div className="branch-y-line"></div>
            <div className="branch-top-line"></div>
            <div className="branch-bottom-line"></div>
          </div>
          <div className="workflow-branches">
            <div className="modal-workflow-step branch-step">
              <span className="step-num">05a</span>
              <p>Release note</p>
            </div>
            <div className="modal-workflow-step branch-step">
              <span className="step-num">05b</span>
              <p>Release demo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CaseStudyModal({ caseId, copy, onClose, initialSkillId }: CaseStudyModalProps) {
  const caseItem = copy.sections.selectedWork.cases.find((c) => c.id === caseId);
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [activeSkillIdx, setActiveSkillIdx] = useState(() => {
    if (initialSkillId && caseItem?.skillsList) {
      const idx = caseItem.skillsList.findIndex((s) => s.name === initialSkillId);
      if (idx !== -1) return idx;
    }
    return 0;
  });

  const [pulseActive, setPulseActive] = useState(false);
  const pulseTimeoutRef = useRef<number | null>(null);
  const removePulseTimeoutRef = useRef<number | null>(null);

  // Trigger pulse-highlight animation on target element with support for delayed triggers
  const triggerPulse = useCallback((delayMs: number) => {
    if (pulseTimeoutRef.current) clearTimeout(pulseTimeoutRef.current);
    if (removePulseTimeoutRef.current) clearTimeout(removePulseTimeoutRef.current);

    setPulseActive(false);

    pulseTimeoutRef.current = window.setTimeout(() => {
      setPulseActive(true);
      removePulseTimeoutRef.current = window.setTimeout(() => {
        setPulseActive(false);
      }, 2000);
    }, delayMs);
  }, []);

  // Set selected skill and decide if we need to auto-scroll with delayed highlight pulse
  const selectSkill = useCallback((idx: number, shouldScroll: boolean) => {
    setActiveSkillIdx(idx);
    if (shouldScroll) {
      if (scrollContentRef.current && explorerRef.current) {
        const container = scrollContentRef.current;
        const target = explorerRef.current;
        const containerRect = container.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const relativeTop = targetRect.top - containerRect.top + container.scrollTop;
        container.scrollTo({ top: relativeTop, behavior: "smooth" });
      }
      triggerPulse(600); // 600ms match the average smooth scroll duration
    } else {
      triggerPulse(0); // Instant pulse on tab click
    }
  }, [triggerPulse]);

  const isKo = copy.meta.locale === "ko";
  const explorerTitle = isKo ? "구축된 AI 스킬 탐색기 (10종)" : "AI Skills Explorer (10 Tools)";
  const versionLabel = isKo ? "버전" : "Version";
  const updatedLabel = isKo ? "업데이트" : "Updated";
  const purposeLabel = isKo ? "역할 및 목적" : "Role & Purpose";
  const principleLabel = isKo ? "작동 원리 및 설계" : "Working Principle & Architecture";
  const exploreInstructions = isKo
    ? "아래 목록에서 스킬을 선택하여 작동 원리와 상세 설정을 확인하세요."
    : "Select a skill from the list below to inspect its working principles and configurations.";

  // Focus the close button on mount
  useEffect(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, []);

  // Body scroll lock on mount, restore on unmount
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, []);

  const explorerRef = useRef<HTMLDivElement>(null);
  const scrollContentRef = useRef<HTMLDivElement>(null);
  const selectorListRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the left selector list to keep the active skill tab visible and centered
  useEffect(() => {
    if (selectorListRef.current) {
      const listContainer = selectorListRef.current;
      const timer = setTimeout(() => {
        const activeBtn = listContainer.querySelector('.skill-selector-btn.is-active') as HTMLElement;
        if (activeBtn) {
          const containerRect = listContainer.getBoundingClientRect();
          const btnRect = activeBtn.getBoundingClientRect();
          
          const isVisible = (btnRect.top >= containerRect.top) && (btnRect.bottom <= containerRect.bottom);
          
          if (!isVisible) {
            const relativeTop = btnRect.top - containerRect.top + listContainer.scrollTop;
            const targetScrollTop = relativeTop - (listContainer.clientHeight / 2) + (activeBtn.clientHeight / 2);
            
            listContainer.scrollTo({
              top: Math.max(0, targetScrollTop),
              behavior: "smooth"
            });
          }
        }
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeSkillIdx]);

  // Auto-scroll to AI Skills Explorer when modal opens with an initial skill selection
  useEffect(() => {
    if (caseItem?.id === "ai-skills" && initialSkillId && explorerRef.current) {
      const timer = setTimeout(() => {
        if (scrollContentRef.current && explorerRef.current) {
          const container = scrollContentRef.current;
          const target = explorerRef.current;
          const containerRect = container.getBoundingClientRect();
          const targetRect = target.getBoundingClientRect();
          const relativeTop = targetRect.top - containerRect.top + container.scrollTop;
          container.scrollTo({ top: relativeTop, behavior: "smooth" });
        }
      }, 150);
      triggerPulse(750); // 150ms mount delay + 600ms scroll duration
      return () => clearTimeout(timer);
    }
  }, [caseItem?.id, initialSkillId, triggerPulse]);

  // Keyboard navigation listener (ESC key) and Focus Trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;
        
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!caseItem) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };


  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const scrollPercent = target.scrollTop / (target.scrollHeight - target.clientHeight || 1);
    if (modalRef.current) {
      modalRef.current.style.setProperty("--scroll-y", `${target.scrollTop}px`);
      modalRef.current.style.setProperty("--scroll-percent", `${scrollPercent}`);
    }
  };

  // Safe checks for new copy fields
  const summaryText = caseItem.summary || caseItem.problem.substring(0, 100) + "...";
  const highlightPoints = caseItem.highlights || [];
  const metricsToUse = caseItem.cardMetrics || [];

  return (
    <div
      className="modal-overlay"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-modal-title"
      data-testid="case-modal"
      data-case-id={caseItem.id}
      data-timemachine={`case-modal-${caseItem.id}`}
    >
      <div className="modal-panel liquid-glass-card" ref={modalRef}>
        <div className="card-fluid-blob" />
        <div className="liquid-accent-layer" aria-hidden="true" />

        <div className="modal-header">
          <div className="modal-title-area">
            <span className="case-label">
              {caseItem.label} / {caseItem.category}
            </span>
            <h2 id="case-modal-title">{caseItem.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="icon-button modal-close-btn"
            aria-label="Close modal"
            data-testid="case-close-btn"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="modal-scroll-content" data-testid="case-modal-content" onScroll={handleScroll} ref={scrollContentRef}>
          {/* Overview */}
          <section className="modal-section modal-overview">
            <p className="lead-summary">{summaryText}</p>
          </section>

          {/* Problem */}
          <section className="modal-section">
            <h3>{copy.ui.caseProblemLabel}</h3>
            <div className="modal-text-block">
              {renderStructuredText(caseItem.problem)}
            </div>
          </section>

          {/* What I did / Contribution */}
          <section className="modal-section">
            <h3>{copy.ui.caseContributionLabel}</h3>
            <div className="modal-text-block">
              {renderStructuredText(caseItem.contribution)}
            </div>
            {highlightPoints.length > 0 && (
              <div className="modal-highlights">
                <h4>Key Highlights</h4>
                <ul>
                  {highlightPoints.map((pt, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="highlight-check-icon" aria-hidden="true" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          {/* Outcome / Impact */}
          <section className="modal-section">
            <h3>{copy.ui.caseOutcomeLabel}</h3>
            <div className="modal-text-block">
              {renderStructuredText(caseItem.outcome)}
            </div>

            {/* Structured Card Metrics (Factual) */}
            {metricsToUse.length > 0 && (
              <div className="modal-metric-grid">
                {metricsToUse.map((metric, idx) => (
                  <div key={idx} className="modal-metric-card">
                    {metric.value && <strong className="modal-metric-value">{metric.value}</strong>}
                    <span className="modal-metric-label">{metric.label}</span>
                  </div>
                ))}
              </div>
            )}

            {/* List-style outcomes */}
            <ul className="modal-bullets">
              {caseItem.metrics.map((metric, idx) => (
                <li key={idx}>
                  <span>•</span>
                  <p>{metric}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* AI Skills Explorer */}
          {caseItem.skillsList && caseItem.skillsList.length > 0 && (
            <section className="modal-section skills-explorer-section" ref={explorerRef}>
              <h3>{explorerTitle}</h3>
              <p className="skills-explorer-intro">{exploreInstructions}</p>
              
              <div className="skills-explorer-layout">
                {/* Left panel: list of skills */}
                <div className="skills-selector-list" ref={selectorListRef} role="tablist" aria-label="AI Skills List">
                  {caseItem.skillsList.map((skill, idx) => {
                    const isActive = idx === activeSkillIdx;
                    return (
                      <button
                        key={skill.name}
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`skill-panel-${skill.name}`}
                        id={`skill-tab-${skill.name}`}
                        onClick={() => selectSkill(idx, false)}
                        className={`skill-selector-btn ${isActive ? "is-active" : ""}`}
                      >
                        <span className="skill-selector-name">{skill.name}</span>
                        <span className="skill-selector-meta">
                          {skill.version}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Right panel: details of selected skill */}
                {(() => {
                  const activeSkill = caseItem.skillsList[activeSkillIdx];
                  if (!activeSkill) return null;
                  return (
                    <div
                      id={`skill-panel-${activeSkill.name}`}
                      role="tabpanel"
                      aria-labelledby={`skill-tab-${activeSkill.name}`}
                      className={`skill-details-panel ${pulseActive ? "pulse-highlight" : ""}`}
                    >
                      <div className="skill-details-header">
                        <div className="skill-details-title-row">
                          <h4 className="skill-details-name">{activeSkill.name}</h4>
                          <div className="skill-details-badges">
                            <span className="skill-badge version-badge">
                              {versionLabel}: {activeSkill.version}
                            </span>
                            <span className="skill-badge date-badge">
                              {updatedLabel}: {activeSkill.updatedAt}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="skill-detail-block">
                        <h4>{purposeLabel}</h4>
                        <div className="skill-detail-text">
                          {activeSkill.description}
                        </div>
                      </div>

                      <div className="skill-detail-block">
                        <h4>{principleLabel}</h4>
                        <div className="skill-detail-principle-card">
                          {activeSkill.principle}
                        </div>
                      </div>

                      {activeSkill.impact && (
                        <div className="skill-detail-block">
                          <h4>{isKo ? "성과 및 효과" : "Impact"}</h4>
                          <div className="skill-detail-text" style={{ padding: '10px 14px', background: 'rgba(96, 165, 250, 0.04)', borderLeft: '3px solid var(--teal)', borderRadius: '4px' }}>
                            {activeSkill.impact}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })()}
              </div>
            </section>
          )}

          {/* Workflow preview */}
          <section className="modal-section">
            <h3>{caseItem.previewTitle}</h3>
            {caseItem.id === "product-ops" ? (
              <ProductOpsDetailWorkflow />
            ) : caseItem.id === "ai-skills" ? (
              <AiSkillsEcosystemMap
                locale={copy.meta.locale}
                activeSkillName={caseItem.skillsList?.[activeSkillIdx]?.name}
                onSelectSkill={(skillName) => {
                  const idx = caseItem.skillsList?.findIndex((s) => s.name === skillName);
                  if (idx !== undefined && idx !== -1) {
                    selectSkill(idx, true);
                  }
                }}
                isColumnLayout={true}
              />
            ) : (
              <div className="modal-workflow-diagram">
                {caseItem.previewSteps.map((step, idx) => (
                  <div key={step} className="modal-workflow-step-wrapper">
                    <div className="modal-workflow-step">
                      <span className="step-num">{String(idx + 1).padStart(2, "0")}</span>
                      <p>{step}</p>
                    </div>
                    {idx < caseItem.previewSteps.length - 1 && (
                      <span className="step-connector" aria-hidden="true">
                        &rarr;
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {caseItem.id === "product-ops" && (
              <div className="issue-workflow-container">
                <div className="issue-workflow-title">
                  {isKo ? "Feature 이슈 워크플로우 상태 체인" : "Feature Issue Workflow Status Chain"}
                </div>
                <div className="issue-workflow-steps">
                  {[
                    "💡 Idea",
                    "🅿 Parking Lot",
                    "🏗️ Planning",
                    "🎨 Designing",
                    "💻 Developing",
                    "📝 In Review",
                    "🔍 QA",
                    "✅ Ready for Release",
                    "🚀 Release"
                  ].map((status, idx, arr) => (
                    <Fragment key={status}>
                      <span className="issue-workflow-step">{status}</span>
                      {idx < arr.length - 1 && (
                        <span className="issue-workflow-arrow" aria-hidden="true">&rarr;</span>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* Confidentiality warning */}
          <section className="modal-section confidentiality-note-section">
            <div className="modal-confidentiality-card">
              <LockKeyhole size={16} aria-hidden="true" />
              <span>{copy.ui.syntheticPreviewNote}</span>
            </div>
          </section>


        </div>
      </div>
    </div>
  );
}
