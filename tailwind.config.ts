import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "infinite-scroll-negative": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 6px))" },
        },
        "infinite-scroll-positive": {
          "100%": { transform: "translateX(0)" },
          "0%": { transform: "translateX(calc(-50% - 6px))" },
        },
      },
      animation: {
        "infinate-scroll-negative":
          "infinite-scroll-negative 50s linear infinite",
        "infinate-scroll-positive":
          "infinite-scroll-positive 50s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        mobai: {
          yellow: "#EFEB48",
          black: "#202020",
        },
      },
      fontFamily: {
        pixel: ["var(--font-pixel)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
