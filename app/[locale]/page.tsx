import { notFound } from "next/navigation";

import { PortfolioPage } from "@/components/portfolio-page";
import { buildMetadata } from "@/lib/metadata";
import { getSiteContent, isLocale, locales } from "@/lib/site";
import type { Locale } from "@/lib/types";

type Params = { locale: string };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return buildMetadata(locale, getSiteContent(locale));
}

export default async function LocalePage({
  params
}: {
  params: Promise<Params>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioPage content={getSiteContent(locale as Locale)} />;
}
