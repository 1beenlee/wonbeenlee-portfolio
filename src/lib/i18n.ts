import { internalEn } from "../content/profile.internal.en";
import { internalKo } from "../content/profile.internal.ko";
import { internalJa } from "../content/profile.internal.ja";
import { publicEn } from "../content/profile.public.en";
import { publicKo } from "../content/profile.public.ko";
import { publicJa } from "../content/profile.public.ja";
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

  if (normalized === "/ja") {
    return { audience: "internal", locale: "ja", copy: internalJa };
  }

  if (normalized === "/public/en") {
    return { audience: "public", locale: "en", copy: publicEn };
  }

  if (normalized === "/public/ja") {
    return { audience: "public", locale: "ja", copy: publicJa };
  }

  if (normalized === "/public") {
    return { audience: "public", locale: "ko", copy: publicKo };
  }

  return { audience: "internal", locale: "ko", copy: internalKo };
}

export function getLanguageHref(audience: Audience, locale: Locale): string {
  if (audience === "public") {
    if (locale === "ko") return "/public/en";
    if (locale === "en") return "/public/ja";
    return "/public";
  }

  if (locale === "ko") return "/en";
  if (locale === "en") return "/ja";
  return "/";
}
