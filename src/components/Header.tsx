import { useState } from "react";
import { Languages, Menu } from "lucide-react";
import { canonicalProfile } from "../content/profile.shared";
import type { NavItem, SiteCopy } from "../content/types";
import { ThemeToggle } from "./ThemeToggle";
import { MobileNav } from "./MobileNav";

export function Header({
  copy,
  languageHref,
  homeHref,
  activeSection,
  navItems,
  theme,
  onToggleTheme
}: {
  copy: SiteCopy;
  languageHref: string;
  homeHref: string;
  activeSection: string;
  navItems?: NavItem[];
  theme: "teal" | "cobalt";
  onToggleTheme: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <a className="brand" href={homeHref}>
          <img src="/favicon.svg" alt="WL Logo" className="brand-logo-img" aria-hidden="true" />
          <span>
            <strong>{canonicalProfile.name}</strong>
            <small>{copy.meta.label}</small>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links" aria-label={copy.ui.primaryNavigationLabel}>
          {(navItems ?? copy.nav).map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          
          <a className="icon-button lang-btn" href={languageHref} aria-label={copy.ui.switchLanguageLabel}>
            <Languages size={17} aria-hidden="true" />
            <span>{copy.meta.locale === "ja" ? "Japanese" : copy.meta.locale === "en" ? "English" : "Korean"}</span>
          </a>

          {/* Hamburger Menu Trigger */}
          <button
            className="icon-button hamburger-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open primary navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu size={20} aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Mobile Navigation overlay */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        copy={navItems ? { ...copy, nav: navItems } : copy}
        languageHref={languageHref}
        activeSection={activeSection}
        theme={theme}
        onToggleTheme={onToggleTheme}
      />
    </>
  );
}
