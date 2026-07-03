import type { SiteCopy } from "../content/types";
import type { SimplifiedCopy } from "../content/profile.simplified";
import { SimplifiedHero } from "../components/SimplifiedHero";
import { SimplifiedSelectedWork } from "../components/SimplifiedSelectedWork";
import { SimplifiedWorkStyle } from "../components/SimplifiedWorkStyle";
import { SimplifiedContactBand } from "../components/SimplifiedContactBand";

export function SimplifiedPortfolioPage({ copy, siteCopy, detailedHref, onOpenCase, onOutlinkClick }: { copy: SimplifiedCopy; siteCopy: SiteCopy; detailedHref: string; onOpenCase: (id: string) => void; onOutlinkClick: (url: string) => void }) {
  return <><SimplifiedHero copy={copy} detailedHref={detailedHref} /><SimplifiedSelectedWork copy={copy} siteCopy={siteCopy} onOpenCase={onOpenCase} /><SimplifiedWorkStyle copy={copy} /><SimplifiedContactBand copy={copy} detailedHref={detailedHref} onOutlinkClick={onOutlinkClick} /></>;
}
