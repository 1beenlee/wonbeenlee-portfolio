import type { Metadata } from "next";
import { Inter, Manrope, Newsreader, Noto_Sans_KR } from "next/font/google";

import "@/app/globals.css";
import { contactLinks, siteName } from "@/lib/portfolio-config";
import { siteUrl } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-label",
  display: "swap"
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-korean-display",
  weight: ["500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Wonbeen Lee — Global Product Manager",
    template: "%s"
  },
  description:
    "Global Product Manager building AI-enabled B2B SaaS products for complex enterprise workflows, product ops, and SRM/S2P systems.",
  applicationName: siteName,
  authors: [{ name: "Wonbeen Lee", url: contactLinks.linkedinHref }],
  creator: "Wonbeen Lee",
  publisher: "Wonbeen Lee",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon" }]
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} ${inter.variable} ${notoSansKr.variable}`}>
        {children}
      </body>
    </html>
  );
}
