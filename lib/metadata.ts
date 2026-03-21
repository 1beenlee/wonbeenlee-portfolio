import type { Metadata } from "next";

import { assetPaths, siteName } from "@/lib/portfolio-config";
import { buildLocaleUrl, locales, siteUrl } from "@/lib/site";
import type { Locale, SiteContent } from "@/lib/types";

const ogImage = `${siteUrl}${assetPaths.ogImage}`;
const ogLocales: Record<Locale, string> = {
  en: "en_US",
  ja: "ja_JP",
  ko: "ko_KR"
};

export function buildMetadata(locale: Locale, content: SiteContent): Metadata {
  const languages = Object.fromEntries(
    locales.map((entry) => [entry, buildLocaleUrl(entry)])
  );

  return {
    metadataBase: new URL(siteUrl),
    title: content.seo.title,
    description: content.seo.description,
    alternates: {
      canonical: buildLocaleUrl(locale),
      languages
    },
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: buildLocaleUrl(locale),
      siteName,
      locale: ogLocales[locale],
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Wonbeen Lee portfolio preview"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
      images: [ogImage]
    }
  };
}
