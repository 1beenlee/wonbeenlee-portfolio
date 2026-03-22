import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { SectionHeader } from "@/components/home/section-header";

export function ContactSection({ content }: { content: SiteContent }) {
  return (
    <section id="contact" className={homeTokens.sectionSpacing}>
      <div className={homeTokens.contactPanel}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-end">
          <SectionHeader title={content.contact.title} intro={content.contact.intro} locale={content.locale} />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            {content.contact.items.slice(0, 2).map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className={index === 0 ? homeTokens.primaryCta : homeTokens.secondaryCta}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {content.contact.items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-[24px] bg-white/92 p-6 shadow-card transition hover:-translate-y-0.5"
            >
              <p className={homeTokens.metaLabel}>{item.label}</p>
              <p className="mt-4 text-base font-medium text-ink">{item.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
