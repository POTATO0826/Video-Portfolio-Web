/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#E4032E",
        redDeep: "#B3122B",
        ink: "#15110F",
        paper: "#FBF9F6",
        surface: "#FFFFFF",
        mist: "#F2EFEA",
        border: "#E4E0D9",
        muted: "#6E6A64",
      },
      fontFamily: {
        display: ['"Archivo"', '"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h2: ["1.875rem", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["1.25rem", { lineHeight: "1.3" }],
        caption: ["0.8125rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        content: "1100px",
      },
      borderRadius: {
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 14px 40px -18px rgba(21, 17, 15, 0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
