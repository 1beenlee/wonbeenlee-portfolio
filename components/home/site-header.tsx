import Link from "next/link";

import { homeTokens } from "@/components/home/design-tokens";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { SiteContent } from "@/lib/types";

export function SiteHeader({ content }: { content: SiteContent }) {
  return (
    <header className={homeTokens.header}>
      <div className="grid items-center gap-x-3 gap-y-2 lg:flex lg:items-center lg:justify-between lg:gap-6">
        <Link
          href={`/${content.locale}`}
          className="col-start-1 row-start-1 font-display text-lg font-semibold tracking-tight text-ink sm:text-[1.15rem] lg:text-xl"
        >
          Wonbeen Lee
        </Link>
        <div className="col-start-2 row-start-1 justify-self-end">
          <LanguageSwitcher currentLocale={content.locale} label={content.nav.switcherLabel} />
        </div>
        <nav className="no-scrollbar col-span-2 row-start-2 -mx-1 flex gap-1.5 overflow-x-auto pb-0.5 font-label text-[11px] text-slate-500 sm:text-xs lg:col-auto lg:row-auto lg:mx-0 lg:flex-wrap lg:justify-center lg:gap-4 lg:overflow-visible lg:pb-0 lg:text-sm">
          {content.nav.sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="shrink-0 rounded-full px-2.5 py-1.5 transition hover:bg-panel hover:text-ink lg:px-0 lg:py-0 lg:hover:bg-transparent"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
