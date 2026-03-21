import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { SectionHeader } from "@/components/home/section-header";
import { assetPaths } from "@/lib/portfolio-config";

export function ResumeSection({ content }: { content: SiteContent }) {
  return (
    <section id="resume" className={homeTokens.sectionSpacing}>
      <SectionHeader title={content.resume.title} intro={content.resume.intro} />
      <div className="mt-12 rounded-[32px] bg-panel p-6 shadow-card md:p-8 lg:p-10">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1.12fr)_minmax(0,1.02fr)_minmax(0,0.74fr)]">
        <article className="rounded-[24px] bg-white p-6 shadow-card">
          <h3 className="font-display text-[2rem] leading-tight text-ink">
            {content.ui.resumeSectionLabels.experience}
          </h3>
          <div className="mt-5 space-y-5">
            {content.resume.snapshot.experience.map((item) => (
              <div key={`${item.title}-${item.period}`} className="border-l border-slate-200 pl-4">
                <p className="text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                <p className="mt-2 font-label text-[11px] uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-[24px] bg-white p-6 shadow-card">
          <h3 className="font-display text-[2rem] leading-tight text-ink">
            {content.ui.resumeSectionLabels.educationAwards}
          </h3>
          <div className="mt-5 space-y-5">
            {[...content.resume.snapshot.education, ...content.resume.snapshot.awards].map((item) => (
              <div key={`${item.title}-${item.period}`} className="border-l border-slate-200 pl-4">
                <p className="text-base font-semibold text-ink">{item.title}</p>
                <p className="mt-1 text-sm text-slate-500">{item.subtitle}</p>
                <p className="mt-2 font-label text-[11px] uppercase tracking-[0.22em] text-slate-400">{item.period}</p>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="rounded-[24px] bg-white p-6 shadow-card">
          <p className={homeTokens.tag}>Professional ledger</p>
          <h3 className="mt-4 font-display text-[2rem] leading-tight text-ink">
            {content.ui.resumeSectionLabels.languages}
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
            {content.resume.snapshot.languages.map((item) => (
              <li key={item} className="border-b border-slate-200/80 pb-3 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
          <a
            href={assetPaths.resume}
            className={`${homeTokens.primaryCta} mt-8`}
          >
            {content.resume.snapshot.resumeLabel}
          </a>
        </article>
        </div>
      </div>
    </section>
  );
}
