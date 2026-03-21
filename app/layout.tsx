import type { Metadata } from "next";
import { Inter, Manrope, Newsreader } from "next/font/google";

import "@/app/globals.css";

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

export const metadata: Metadata = {
  title: "Wonbeen Lee Portfolio",
  description: "Multilingual portfolio site for Wonbeen Lee."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
