import { Github, Linkedin, Mail, ExternalLink, MapPin } from "lucide-react";
import type { SiteCopy, ContactLink } from "../content/types";
import { SectionIntro } from "./ValueCards";
import { canonicalProfile } from "../content/profile.shared";

export function ContactCTA({ copy }: { copy: SiteCopy }) {
  return (
    <section className="content-band closing-band reveal-target" id="contact">
      {/* Background Liquid blobs */}
      <div className="liquid-glass-background">
        <div className="blob blob-teal" />
        <div className="blob blob-cyan" />
      </div>

      <SectionIntro
        kicker={copy.sections.contact.kicker}
        title={copy.sections.contact.title}
        body={copy.sections.contact.body}
      />
      
      <div className="contact-grid">
        {copy.sections.contact.links.map((link) => (
          <ContactCard key={link.href} link={link} />
        ))}
        
        {/* Email card */}
        <a className="contact-card liquid-glass-card" href="mailto:talentlee52@gmail.com">
          <div className="card-glass-glow" />
          <div className="card-fluid-blob" />
          <div className="liquid-accent-layer" aria-hidden="true" />
          <Mail size={22} aria-hidden="true" />
          <div>
            <strong>Email</strong>
            <p>talentlee52@gmail.com</p>
          </div>
          <ExternalLink size={16} aria-hidden="true" />
        </a>

        {/* Location card */}
        <div className="contact-card location-card liquid-glass-card">
          <div className="card-glass-glow" />
          <div className="card-fluid-blob" />
          <div className="liquid-accent-layer" aria-hidden="true" />
          <MapPin size={22} aria-hidden="true" />
          <div>
            <strong>Location</strong>
            <p>{canonicalProfile.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ link }: { link: ContactLink }) {
  const isGithub = link.label.toLowerCase().includes("github");
  const Icon = isGithub ? Github : Linkedin;

  return (
    <a className="contact-card liquid-glass-card" href={link.href} target="_blank" rel="noreferrer">
      <div className="card-glass-glow" />
      <div className="card-fluid-blob" />
      <div className="liquid-accent-layer" aria-hidden="true" />
      <Icon size={22} aria-hidden="true" />
      <div>
        <strong>{link.label}</strong>
        <p>{link.note}</p>
      </div>
      <ExternalLink size={16} aria-hidden="true" />
    </a>
  );
}
