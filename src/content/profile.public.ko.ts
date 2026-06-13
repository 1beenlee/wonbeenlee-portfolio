import type { SiteCopy } from "./types";
import { internalKo } from "./profile.internal.ko";

export const publicKo: SiteCopy = {
  ...internalKo,
  meta: {
    audience: "public",
    locale: "ko",
    label: "AI Procurement PM Portfolio",
    alternatePath: "/public/en"
  }
};
