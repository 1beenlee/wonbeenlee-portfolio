"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { locales } from "@/lib/site";
import type { Locale } from "@/lib/types";

export function LanguageSwitcher({
  currentLocale,
  label
}: {
  currentLocale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);

    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const currentPath = pathname.replace(/^\/(en|ja|ko)/, "") || "";

  return (
    <div className="flex items-center gap-1.5 font-label text-[11px] uppercase tracking-[0.22em] text-slate-500" aria-label={label}>
      {locales.map((locale) => {
        const href = `/${locale}${currentPath}${hash}`;
        const active = locale === currentLocale;

        return (
          <Link
            key={locale}
            href={href}
            className={`rounded-full px-3 py-1.5 transition ${
              active
                ? "bg-accent text-white"
                : "text-slate-500 hover:bg-panel hover:text-ink"
            }`}
          >
            {locale === "en" ? "EN" : locale === "ja" ? "日本語" : "한국어"}
          </Link>
        );
      })}
    </div>
  );
}
