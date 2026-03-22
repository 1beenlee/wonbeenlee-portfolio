import type { Locale } from "@/lib/types";

export function getDisplayFontClass(locale: Locale) {
  return locale === "ko" ? "font-korean-display" : "font-display";
}
