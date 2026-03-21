export const homeTokens = {
  shell: "grid-shell min-h-screen",
  container: "mx-auto max-w-7xl px-5 pb-20 pt-6 sm:px-8 lg:px-12",
  sectionSpacing: "anchor-offset mt-28 lg:mt-36",
  glassCard: "rounded-[24px] bg-white/82 p-7 shadow-float backdrop-blur-xl",
  softCard: "rounded-[24px] bg-white p-7 shadow-card",
  warmCard: "rounded-[24px] bg-panel p-7 shadow-card",
  accentCard: "rounded-[24px] bg-panelStrong p-7 shadow-card",
  contactPanel:
    "rounded-[28px] bg-panelStrong p-8 shadow-card md:p-10",
  heroPanel:
    "anchor-offset relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(248,250,252,0.96))] p-8 shadow-card md:p-12 lg:p-14",
  heroGlow:
    "absolute inset-y-0 right-0 hidden w-[34%] bg-[radial-gradient(circle_at_center,rgba(45,52,54,0.06),transparent_68%)] lg:block",
  header:
    "sticky top-4 z-20 rounded-full bg-white/78 px-5 py-3 shadow-float backdrop-blur-xl",
  metaLabel: "font-label text-[11px] uppercase tracking-[0.22em] text-slate-500",
  tag: "font-label text-[10px] uppercase tracking-[0.3em] text-slate-500",
  sectionTitle: "font-display text-4xl tracking-tight text-ink md:text-5xl",
  bodyLarge: "text-lg leading-8 text-slate-700",
  primaryCta:
    "inline-flex items-center rounded-xl bg-[linear-gradient(135deg,#2d3436,#41555d)] px-6 py-3.5 font-label text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-float",
  secondaryCta:
    "inline-flex items-center rounded-xl bg-white px-6 py-3.5 font-label text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-panel",
  editorialLink:
    "inline-flex items-center border-b border-ink/20 pb-1 font-label text-sm font-semibold text-ink transition hover:border-ink"
} as const;
