import { useEffect, useState } from "react";

export type ThemeType = "teal" | "cobalt";

export function useTheme() {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("wbeen-portfolio-theme");
    return saved === "teal" ? "teal" : "cobalt";
  });

  useEffect(() => {
    if (theme === "teal") {
      document.documentElement.setAttribute("data-theme", "teal");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("wbeen-portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "cobalt" ? "teal" : "cobalt"));
  };

  return { theme, setTheme, toggleTheme };
}
