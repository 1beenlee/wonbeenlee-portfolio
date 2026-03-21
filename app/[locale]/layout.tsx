import { LocaleHtmlSync } from "@/components/locale-html-sync";
import { isLocale } from "@/lib/site";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return children;
  }

  return (
    <>
      <LocaleHtmlSync locale={locale} />
      {children}
    </>
  );
}
