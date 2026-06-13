import { Palette } from "lucide-react";

export function ThemeToggle({
  theme,
  onToggle
}: {
  theme: "teal" | "cobalt";
  onToggle: () => void;
}) {
  return (
    <button
      className="icon-button theme-toggle-btn"
      onClick={onToggle}
      aria-label="Switch visual theme"
      title={`Switch to ${theme === "teal" ? "Cobalt Graphite" : "Teal Graphite"}`}
    >
      <Palette size={17} aria-hidden="true" />
      <span>{theme === "teal" ? "Teal" : "Cobalt"}</span>
    </button>
  );
}
