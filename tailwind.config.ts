import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#1a202c",
        mist: "#f8fafc",
        line: "#cbd5e0",
        accent: "#2d3436",
        accentSoft: "#edf2f7",
        sand: "#f1f5f9",
        soft: "#fcfcfc",
        panel: "#f8fafc",
        panelStrong: "#edf2f7"
      },
      boxShadow: {
        card: "0 20px 50px rgba(26, 32, 44, 0.06)",
        float: "0 12px 40px rgba(26, 32, 44, 0.06)"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "serif"],
        label: ["var(--font-label)", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
