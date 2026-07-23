import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16233F",
        "ink-light": "#243459",
        marigold: "#F2A93B",
        "marigold-dark": "#D98E1E",
        teal: "#2F6B63",
        "teal-light": "#4C8A80",
        paper: "#FBF6EC",
        "paper-dim": "#F1E9D8",
        charcoal: "#23262B",
        clay: "#C1512F",
      },
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        body: ['"Work Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        "rule-lines":
          "repeating-linear-gradient(to bottom, transparent, transparent 35px, rgba(22,35,63,0.06) 35px, rgba(22,35,63,0.06) 36px)",
      },
    },
  },
  plugins: [],
};
export default config;
