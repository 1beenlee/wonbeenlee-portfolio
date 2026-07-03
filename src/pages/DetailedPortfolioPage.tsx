import type { ReactNode } from "react";
import type { SimplifiedCopy } from "../content/profile.simplified";

export function DetailedPortfolioPage({ copy, simplifiedHref, children }: { copy: SimplifiedCopy; simplifiedHref: string; children: ReactNode }) {
  return <><section className="content-band detailed-intro-band reveal-target" id="top"><span className="eyebrow">{copy.detailedIntro.eyebrow}</span><h1>{copy.detailedIntro.title}</h1><p>{copy.detailedIntro.body}</p><a className="secondary-button" href={simplifiedHref}>{copy.detailedIntro.returnLabel}</a><span className="depth-continuity-line" aria-hidden="true" /></section>{children}</>;
}
