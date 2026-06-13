import { internalEn } from "../content/profile.internal.en";
import { internalKo } from "../content/profile.internal.ko";
import { publicEn } from "../content/profile.public.en";
import { publicKo } from "../content/profile.public.ko";
import type { Audience, Locale, SiteCopy } from "../content/types";

type RouteConfig = {
  audience: Audience;
  locale: Locale;
  copy: SiteCopy;
};

export function resolveRoute(pathname: string): RouteConfig {
  const normalized = pathname.replace(/\/+$/, "") || "/";

  if (normalized === "/en") {
    return { audience: "internal", locale: "en", copy: internalEn };
  }

  if (normalized === "/public/en") {
    return { audience: "public", locale: "en", copy: publicEn };
  }

  if (normalized === "/public") {
    return { audience: "public", locale: "ko", copy: publicKo };
  }

  return { audience: "internal", locale: "ko", copy: internalKo };
}

export function getLanguageHref(audience: Audience, locale: Locale): string {
  if (audience === "public") {
    return locale === "ko" ? "/public/en" : "/public";
  }

  return locale === "ko" ? "/en" : "/";
}
