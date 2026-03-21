import Link from "next/link";

import { homeTokens } from "@/components/home/design-tokens";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { SiteContent } from "@/lib/types";

export function SiteHeader({ content }: { content: SiteContent }) {
  return (
    <header className={homeTokens.header}>
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <Link
          href={`/${content.locale}`}
          className="font-display text-xl font-semibold tracking-tight text-ink"
        >
          Wonbeen Lee
        </Link>
        <nav className="flex flex-wrap gap-4 font-label text-sm text-slate-500">
          {content.nav.sections.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="transition hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>
        <LanguageSwitcher currentLocale={content.locale} label={content.nav.switcherLabel} />
      </div>
    </header>
  );
}
