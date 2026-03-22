import { homeTokens } from "@/components/home/design-tokens";
import { getDisplayFontClass } from "@/lib/locale-typography";
import type { Locale } from "@/lib/types";

export function SectionHeader({
  title,
  intro,
  locale
}: {
  title: string;
  intro?: string;
  locale: Locale;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className={`${homeTokens.sectionTitle} ${getDisplayFontClass(locale)}`}>{title}</h2>
      {intro ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{intro}</p> : null}
    </div>
  );
}
