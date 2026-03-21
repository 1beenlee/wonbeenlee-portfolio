"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function HomeRedirectPage() {
  useEffect(() => {
    window.location.replace("/en");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Redirecting</p>
        <Link href="/en" className="mt-4 inline-block text-lg font-medium text-ink underline">
          Continue to the English homepage
        </Link>
      </div>
    </main>
  );
}
