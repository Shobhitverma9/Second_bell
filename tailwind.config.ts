import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A", // Darker, cleaner slate
        "ink-light": "#1E293B",
        marigold: "#EA580C", // Vibrant Orange/Red for CTA (like Cry)
        "marigold-dark": "#C2410C",
        teal: "#0D9488", // More vibrant teal
        "teal-light": "#14B8A6",
        paper: "#FFFFFF", // Clean white background
        "paper-dim": "#F8FAFC", // Light slate for off-white sections
        charcoal: "#334155",
        clay: "#DC2626", // Bold Red
      },
      fontFamily: {
        display: ['"Inter"', "sans-serif"], // Modern bold sans-serif
        body: ['"Inter"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        "rule-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 35px, rgba(15,23,42,0.04) 35px, rgba(15,23,42,0.04) 36px)",
      },
    },
  },
  plugins: [],
};
export default config;
