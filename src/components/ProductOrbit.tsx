import React from "react";

export function ProductOrbit() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <div className="product-orbit-container" aria-hidden="true">
      <div className="orbit-wrapper">
        <div className="orbit-refraction-material" />
        <div className="orbit-bg-glow" />
        <svg className="orbit-svg" viewBox="0 0 500 500">
          {/* Group 1: Rotated by -15deg */}
          <g transform="rotate(-15 250 250)">
            <path className="orbit-path path-1" d="M 50,250 a 200,70 0 1,0 400,0 a 200,70 0 1,0 -400,0" fill="none" />
            <circle cx="0" cy="0" r="4.5" className="orbit-dot dot-1">
              <animateMotion dur="18s" repeatCount="indefinite" path="M 50,250 a 200,70 0 1,0 400,0 a 200,70 0 1,0 -400,0" />
            </circle>
          </g>

          {/* Group 2: Rotated by 25deg */}
          <g transform="rotate(25 250 250)">
            <path className="orbit-path path-2" d="M 70,250 a 180,100 0 1,0 360,0 a 180,100 0 1,0 -360,0" fill="none" />
            <circle cx="0" cy="0" r="4.5" className="orbit-dot dot-2">
              <animateMotion dur="24s" repeatCount="indefinite" path="M 70,250 a 180,100 0 1,0 360,0 a 180,100 0 1,0 -360,0" />
            </circle>
          </g>

          {/* Group 3: Rotated by 60deg */}
          <g transform="rotate(60 250 250)">
            <path className="orbit-path path-3" d="M 30,250 a 220,50 0 1,0 440,0 a 220,50 0 1,0 -440,0" fill="none" />
            <circle cx="0" cy="0" r="4.5" className="orbit-dot dot-3">
              <animateMotion dur="20s" repeatCount="indefinite" path="M 30,250 a 220,50 0 1,0 440,0 a 220,50 0 1,0 -440,0" />
            </circle>
          </g>
        </svg>
        
        {/* Central Core */}
        <div className="orbit-core">
          <div className="core-glow" />
          <div className="core-inner">
            <div className="liquid-accent-layer" aria-hidden="true" />
            <strong>AI</strong>
            <span>Product OS</span>
          </div>
        </div>

        {/* Satellite Cards */}
        
        {/* SRM Card */}
        <div className="satellite-wrapper sat-srm">
          <div className="satellite-card" onMouseMove={handleMouseMove}>
            <div className="sat-card-glow" />
            <div className="liquid-accent-layer" aria-hidden="true" />
            <div className="sat-card-content">
              <strong>SRM</strong>
              <ul>
                <li>Supplier Profile</li>
                <li>Performance</li>
                <li>Risk & Compliance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* S2P Card */}
        <div className="satellite-wrapper sat-s2p">
          <div className="satellite-card" onMouseMove={handleMouseMove}>
            <div className="sat-card-glow" />
            <div className="liquid-accent-layer" aria-hidden="true" />
            <div className="sat-card-content">
              <strong>S2P</strong>
              <ul>
                <li>Sourcing & RFx</li>
                <li>Contract Management</li>
                <li>Procure-to-Pay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Data & Integrations Card */}
        <div className="satellite-wrapper sat-data">
          <div className="satellite-card" onMouseMove={handleMouseMove}>
            <div className="sat-card-glow" />
            <div className="liquid-accent-layer" aria-hidden="true" />
            <div className="sat-card-content">
              <strong>Data & Integrations</strong>
              <ul>
                <li>ERP & Legacy Sync</li>
                <li>Finance & Ledger</li>
                <li>Procurement Analytics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intelligence Layer Card */}
        <div className="satellite-wrapper sat-intel">
          <div className="satellite-card" onMouseMove={handleMouseMove}>
            <div className="sat-card-glow" />
            <div className="liquid-accent-layer" aria-hidden="true" />
            <div className="sat-card-content">
              <strong>Intelligence Layer</strong>
              <ul>
                <li>Predictive Analytics</li>
                <li>GenAI & Insights</li>
                <li>Automation Agent</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
