import { fallbackSiteUrl } from "@/lib/portfolio-config";
import { siteEn } from "@/content/site.en";
import { siteJa } from "@/content/site.ja";
import { siteKo } from "@/content/site.ko";
import type { Locale, SiteContent } from "@/lib/types";

export const locales: Locale[] = ["en", "ja", "ko"];
export const defaultLocale: Locale = "en";
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  fallbackSiteUrl;

const siteMap: Record<Locale, SiteContent> = {
  en: siteEn,
  ja: siteJa,
  ko: siteKo
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getSiteContent(locale: Locale): SiteContent {
  return siteMap[locale];
}

export function buildLocaleUrl(locale: Locale) {
  return `${siteUrl}/${locale}`;
}
