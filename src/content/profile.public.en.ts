import type { SiteCopy } from "./types";
import { internalEn } from "./profile.internal.en";

export const publicEn: SiteCopy = {
  ...internalEn,
  meta: {
    audience: "public",
    locale: "en",
    label: "AI Procurement PM Portfolio",
    alternatePath: "/public"
  }
};
