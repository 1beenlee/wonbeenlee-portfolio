import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { SectionHeader } from "@/components/home/section-header";
import { getDisplayFontClass } from "@/lib/locale-typography";

export function ImpactSection({ content }: { content: SiteContent }) {
  return (
    <section id="impact" className={`${homeTokens.sectionSpacing} rounded-[28px] bg-panel py-16 md:py-20`}>
      <div className="px-6 md:px-10">
        <div className="text-center">
          <p className={homeTokens.tag}>Metrics of practice</p>
          <div className="mt-4 flex justify-center">
            <SectionHeader title={content.impact.title} intro={content.impact.intro} locale={content.locale} />
          </div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.impact.items.map((item) => (
            <article key={item.title} className={homeTokens.softCard}>
              <h3 className={`text-[2rem] leading-tight text-ink ${getDisplayFontClass(content.locale)}`}>{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
