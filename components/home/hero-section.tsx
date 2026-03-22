import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { getDisplayFontClass } from "@/lib/locale-typography";

export function HeroSection({ content }: { content: SiteContent }) {
  return (
    <section id="hero" className={homeTokens.heroPanel}>
      <div className={homeTokens.heroGlow} />
      <div className="relative grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.55fr)] lg:items-end">
        <div className="max-w-4xl">
          <p className={homeTokens.tag}>{content.hero.eyebrow}</p>
          <h1 className={`mt-5 max-w-4xl text-[3rem] font-medium tracking-tight text-ink md:text-[4.8rem] md:leading-[1.02] ${getDisplayFontClass(content.locale)}`}>
            {content.hero.title}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-[1.45rem] md:leading-9">
            {content.hero.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            {content.hero.ctas.map((cta, index) => {
              const primary = index === 0;
              const className = primary ? homeTokens.primaryCta : homeTokens.editorialLink;

              return cta.external ? (
                <a
                  key={cta.label}
                  href={cta.href}
                  target="_blank"
                  rel="noreferrer"
                  className={className}
                >
                  {cta.label}
                </a>
              ) : (
                <a key={cta.label} href={cta.href} className={className}>
                  {cta.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="lg:justify-self-end">
          <div className="grid gap-4 border-t border-slate-300/60 pt-6 sm:grid-cols-2 lg:grid-cols-1 lg:gap-6 lg:pl-6">
            <div>
              <p className={homeTokens.metaLabel}>{content.ui.heroMetaLabels.currentRole}</p>
              <p className="mt-2 text-base font-medium text-ink lg:max-w-[13rem]">{content.hero.currentRole}</p>
            </div>
            <div>
              <p className={homeTokens.metaLabel}>{content.ui.heroMetaLabels.location}</p>
              <p className="mt-2 text-base font-medium text-ink">{content.hero.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
