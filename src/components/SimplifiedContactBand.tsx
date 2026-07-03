import { useEffect, useRef, useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, Rows3 } from "lucide-react";
import type { SimplifiedCopy } from "../content/profile.simplified";
import { SectionIntro } from "./ValueCards";

export function SimplifiedContactBand({ copy, detailedHref, onOutlinkClick }: { copy: SimplifiedCopy; detailedHref: string; onOutlinkClick: (url: string) => void }) {
  const linkedin = "https://www.linkedin.com/in/wonbeenlee/";
  const github = "https://github.com/1beenlee";
  const email = "talentlee52@gmail.com";
  const [emailOpen, setEmailOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "failed">("idle");
  const emailActionRef = useRef<HTMLDivElement>(null);
  const emailTriggerRef = useRef<HTMLButtonElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!emailOpen) return;

    emailInputRef.current?.focus();
    emailInputRef.current?.select();

    const closeOnPointerDown = (event: PointerEvent) => {
      if (!emailActionRef.current?.contains(event.target as Node)) {
        setEmailOpen(false);
        setCopyStatus("idle");
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setEmailOpen(false);
        setCopyStatus("idle");
        emailTriggerRef.current?.focus();
      }
    };

    document.addEventListener("pointerdown", closeOnPointerDown);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnPointerDown);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [emailOpen]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("copied");
    } catch {
      setCopyStatus("failed");
      emailInputRef.current?.focus();
      emailInputRef.current?.select();
    }
  };

  return (
    <section className="content-band closing-band simplified-contact-band simplified-section simplified-section--contact reveal-target" id="contact">
      <SectionIntro kicker={copy.contact.kicker} title={copy.contact.title} body={copy.contact.body} />
      <div className="simplified-contact-grid">
        <a className="contact-card simplified-contact-card simplified-contact-card--primary liquid-glass-card" href={linkedin} onClick={(event) => { event.preventDefault(); onOutlinkClick(linkedin); }}><Linkedin /><strong>{copy.contact.linkedin}</strong></a>
        <div className="simplified-email-action" ref={emailActionRef}>
          <button
            ref={emailTriggerRef}
            className="contact-card simplified-contact-card simplified-email-trigger liquid-glass-card"
            type="button"
            aria-expanded={emailOpen}
            aria-controls="contact-email-popover"
            onClick={() => { setEmailOpen((open) => !open); setCopyStatus("idle"); }}
          >
            <Mail /><strong>{copy.contact.email}</strong>
          </button>
          {emailOpen && (
            <div className="email-popover" id="contact-email-popover" role="dialog" aria-label={copy.contact.emailPopoverTitle}>
              <span className="email-popover-label">{copy.contact.emailPopoverTitle}</span>
              <div className="email-copy-row">
                <input
                  ref={emailInputRef}
                  className="email-address-field"
                  readOnly
                  value={email}
                  aria-label={copy.contact.emailPopoverTitle}
                  onClick={(event) => { event.currentTarget.select(); void copyEmail(); }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      void copyEmail();
                    }
                  }}
                />
                <button className="email-copy-button" type="button" onClick={() => void copyEmail()}>
                  {copyStatus === "copied" ? <Check size={15} /> : <Copy size={15} />}
                  <span>{copy.contact.copyEmail}</span>
                </button>
              </div>
              <span className={`email-copy-feedback email-copy-feedback--${copyStatus}`} role="status" aria-live="polite">
                {copyStatus === "copied" ? copy.contact.emailCopied : copyStatus === "failed" ? copy.contact.emailCopyFailed : ""}
              </span>
            </div>
          )}
        </div>
        <a className="contact-card simplified-contact-card liquid-glass-card" href={detailedHref}><Rows3 /><strong>{copy.contact.detailed}</strong></a>
      </div>
      <a className="simplified-contact-aux" href={github} onClick={(event) => { event.preventDefault(); onOutlinkClick(github); }}><Github size={15} /><span>{copy.contact.github}</span></a>
    </section>
  );
}
