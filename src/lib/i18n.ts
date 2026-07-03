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
  pageMode: "simplified" | "detailed";
};

export function resolveRoute(pathname: string): RouteConfig {
  const normalized = pathname.replace(/\/+$/, "") || "/";
  const isDetailed = normalized === "/detailed" || normalized.startsWith("/detailed/");
  const pageMode = isDetailed ? "detailed" : "simplified";

  if (normalized === "/en" || normalized === "/detailed/en") {
    return { audience: "internal", locale: "en", copy: internalEn, pageMode };
  }

  if (normalized === "/ja" || normalized === "/detailed/ja") {
    return { audience: "internal", locale: "ja", copy: internalJa, pageMode };
  }

  if (normalized === "/public/en") {
    return { audience: "public", locale: "en", copy: publicEn, pageMode: "simplified" };
  }

  if (normalized === "/public/ja") {
    return { audience: "public", locale: "ja", copy: publicJa, pageMode: "simplified" };
  }

  if (normalized === "/public") {
    return { audience: "public", locale: "ko", copy: publicKo, pageMode: "simplified" };
  }

  return { audience: "internal", locale: "ko", copy: internalKo, pageMode };
}

export function getLanguageHref(
  audience: Audience,
  locale: Locale,
  pageMode: "simplified" | "detailed" = "simplified"
): string {
  if (pageMode === "detailed") {
    if (locale === "ko") return "/detailed/en";
    if (locale === "en") return "/detailed/ja";
    return "/detailed";
  }
  if (audience === "public") {
    if (locale === "ko") return "/public/en";
    if (locale === "en") return "/public/ja";
    return "/public";
  }

  if (locale === "ko") return "/en";
  if (locale === "en") return "/ja";
  return "/";
}
