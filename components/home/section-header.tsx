import { homeTokens } from "@/components/home/design-tokens";

export function SectionHeader({
  title,
  intro
}: {
  title: string;
  intro?: string;
}) {
  return (
    <div className="max-w-3xl">
      <h2 className={homeTokens.sectionTitle}>{title}</h2>
      {intro ? <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{intro}</p> : null}
    </div>
  );
}
