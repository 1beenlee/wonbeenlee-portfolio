import { Briefcase, Calendar, Award } from "lucide-react";
import type { SiteCopy } from "../content/types";
import { SectionIntro } from "./ValueCards";

export function CareerTimeline({ copy }: { copy: SiteCopy }) {
  const data = copy.sections.timeline;

  return (
    <section className="content-band reveal-target" id="timeline">
      <SectionIntro
        kicker={data.kicker}
        title={data.title}
        body={data.body}
      />
      
      <div className="timeline-container">
        <div className="timeline-line-bg" />
        
        <div className="timeline-events-grid">
          {data.events.map((event, idx) => (
            <div key={event.period} className={`timeline-event-card liquid-glass-card ${idx === 0 ? "is-current-position" : ""}`}>
              <div className="card-glass-glow" />
              <div className="card-fluid-blob" />
              
              <div className="timeline-marker">
                <div className="marker-dot" />
              </div>
              
              <div className="timeline-event-content">
                <div className="timeline-event-meta">
                  <span className="timeline-period">
                    <Calendar size={13} aria-hidden="true" />
                    {event.period}
                  </span>
                  <span className="timeline-company">
                    <Briefcase size={13} aria-hidden="true" />
                    {event.company}
                  </span>
                  {idx === 0 && (
                    <span className="timeline-current-badge">
                      {copy.meta.locale === "ko" ? "현재" : "Current"}
                    </span>
                  )}
                </div>
                
                <h3>{event.role}</h3>
                <p className="timeline-desc">{event.description}</p>
                
                <div className="timeline-skills">
                  {event.skills.map((skill) => (
                    <span key={skill} className="timeline-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Summary badge to conclude the timeline */}
          <div className="timeline-summary-card liquid-glass-card">
            <div className="card-glass-glow" />
            <div className="card-fluid-blob" />
            
            <div className="summary-icon-wrapper">
              <Award size={24} aria-hidden="true" />
            </div>
            <strong>Delivering Impact.</strong>
            <span>Building the Future.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
