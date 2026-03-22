import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { SectionHeader } from "@/components/home/section-header";
import { getDisplayFontClass } from "@/lib/locale-typography";

export function WorkSection({ content }: { content: SiteContent }) {
  return (
    <section id="work" className={homeTokens.sectionSpacing}>
      <SectionHeader title={content.work.title} intro={content.work.intro} locale={content.locale} />
      <div className="mt-12 space-y-10">
        {content.work.cases.map((entry, index) => (
          <article
            key={entry.title}
            className="grid gap-6 rounded-[28px] bg-white p-7 shadow-card md:p-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-10"
          >
            <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
              <p className={homeTokens.tag}>
                {String(index + 1).padStart(2, "0")} / {content.work.title}
              </p>
              <h3 className={`mt-4 max-w-xl text-[2.1rem] leading-tight text-ink md:text-[2.5rem] ${getDisplayFontClass(content.locale)}`}>
                {entry.title}
              </h3>
              <div className="mt-8 rounded-[24px] bg-panel p-6">
                <div>
                  <dt className={homeTokens.metaLabel}>{content.ui.workCaseLabels.context}</dt>
                  <dd className="mt-2 text-sm leading-7 text-slate-700">{entry.context}</dd>
                </div>
                <div className="mt-6">
                  <dt className={homeTokens.metaLabel}>{content.ui.workCaseLabels.problem}</dt>
                  <dd className="mt-2 text-sm leading-7 text-slate-700">{entry.problem}</dd>
                </div>
              </div>
            </div>
            <dl className={`grid gap-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <div className="border-b border-slate-200/80 pb-5">
                <dt className={homeTokens.metaLabel}>{content.ui.workCaseLabels.role}</dt>
                <dd className="mt-3 text-base leading-8 text-slate-700">{entry.role}</dd>
              </div>
              <div className="border-b border-slate-200/80 pb-5">
                <dt className={homeTokens.metaLabel}>{content.ui.workCaseLabels.approach}</dt>
                <dd className="mt-3 text-base leading-8 text-slate-700">{entry.approach}</dd>
              </div>
              <div>
                <dt className={homeTokens.metaLabel}>{content.ui.workCaseLabels.outcome}</dt>
                <dd className="mt-3 text-base leading-8 text-slate-700">{entry.outcome}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </section>
  );
}
