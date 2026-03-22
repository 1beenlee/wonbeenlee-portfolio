import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { SectionHeader } from "@/components/home/section-header";
import { getDisplayFontClass } from "@/lib/locale-typography";

export function WritingSection({ content }: { content: SiteContent }) {
  return (
    <section id="writing" className={homeTokens.sectionSpacing}>
      <SectionHeader title={content.writing.title} intro={content.writing.intro} locale={content.locale} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {content.writing.items.map((item) => (
          <article key={item.title} className="rounded-[24px] bg-white p-7 shadow-card">
            <p className={homeTokens.tag}>{item.tag}</p>
            <h3 className={`mt-4 text-[1.75rem] leading-tight text-ink ${getDisplayFontClass(content.locale)}`}>{item.title}</h3>
            <p className="mt-5 text-sm leading-7 text-slate-600">{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
