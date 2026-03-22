import type { SiteContent } from "@/lib/types";

import { homeTokens } from "@/components/home/design-tokens";
import { SectionHeader } from "@/components/home/section-header";

export function AboutSection({ content }: { content: SiteContent }) {
  return (
    <section id="about" className={homeTokens.sectionSpacing}>
      <SectionHeader title={content.about.title} locale={content.locale} />
      <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="rounded-[28px] bg-white p-7 shadow-card md:p-8 lg:p-10">
          {content.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-3xl text-[1.02rem] leading-8 text-slate-700 [&:not(:first-child)]:mt-6"
            >
              {paragraph}
            </p>
          ))}
        </div>
        <aside className="rounded-[28px] bg-panel p-7 shadow-card md:p-8 lg:p-10">
          <p className={homeTokens.tag}>{content.ui.aboutSidebarTitle}</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-700">
            {content.ui.aboutSidebarItems.map((item) => (
              <li key={item} className="border-b border-slate-200/80 pb-4 last:border-b-0 last:pb-0">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
