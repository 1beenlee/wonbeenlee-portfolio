import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { homeTokens } from "@/components/home/design-tokens";
import { HeroSection } from "@/components/home/hero-section";
import { ImpactSection } from "@/components/home/impact-section";
import { ResumeSection } from "@/components/home/resume-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { WorkSection } from "@/components/home/work-section";
import { WritingSection } from "@/components/home/writing-section";
import type { SiteContent } from "@/lib/types";

export function PortfolioPage({ content }: { content: SiteContent }) {
  return (
    <div className={homeTokens.shell}>
      <div className={homeTokens.container}>
        <SiteHeader content={content} />
        <main className="pt-8">
          <HeroSection content={content} />
          <ImpactSection content={content} />
          <WorkSection content={content} />
          <AboutSection content={content} />
          <WritingSection content={content} />
          <ResumeSection content={content} />
          <ContactSection content={content} />
        </main>
        <SiteFooter content={content} />
      </div>
    </div>
  );
}
