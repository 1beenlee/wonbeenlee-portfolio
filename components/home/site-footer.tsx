import type { SiteContent } from "@/lib/types";

export function SiteFooter({ content }: { content: SiteContent }) {
  return (
    <footer className="mt-20 border-t border-slate-200/80 pt-6 text-sm text-slate-500">
      <p>{content.footer.note}</p>
    </footer>
  );
}
