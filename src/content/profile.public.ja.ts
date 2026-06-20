import type { SiteCopy } from "./types";
import { internalJa } from "./profile.internal.ja";

export const publicJa: SiteCopy = {
  ...internalJa,
  meta: {
    audience: "public",
    locale: "ja",
    label: "AI Procurement PM Portfolio",
    alternatePath: "/public/en"
  }
};
