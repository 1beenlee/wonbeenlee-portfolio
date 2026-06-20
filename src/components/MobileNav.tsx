import { useEffect, useRef } from "react";
import { X, Languages, Palette } from "lucide-react";
import type { SiteCopy } from "../content/types";

export function MobileNav({
  isOpen,
  onClose,
  copy,
  languageHref,
  activeSection,
  theme,
  onToggleTheme
}: {
  isOpen: boolean;
  onClose: () => void;
  copy: SiteCopy;
  languageHref: string;
  activeSection: string;
  theme: "teal" | "cobalt";
  onToggleTheme: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-nav-overlay"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="mobile-nav-drawer">
        <div className="mobile-nav-header">
          <span className="mobile-nav-title">{copy.meta.label}</span>
          <button
            className="icon-button close-btn"
            onClick={onClose}
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <nav className="mobile-nav-links">
          {copy.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={activeSection === item.href.slice(1) ? "is-active" : undefined}
              onClick={onClose}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mobile-nav-footer">
          <a className="icon-button mobile-lang-btn" href={languageHref} onClick={onClose}>
            <Languages size={17} aria-hidden="true" />
            <span>{copy.meta.locale === "ja" ? "Japanese" : copy.meta.locale === "en" ? "English" : "Korean"}</span>
          </a>
          <button
            className="icon-button mobile-theme-btn"
            onClick={() => {
              onToggleTheme();
              onClose();
            }}
          >
            <Palette size={17} aria-hidden="true" />
            <span>{theme === "teal" ? "Teal" : "Cobalt"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
