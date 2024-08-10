import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))"
      },
      backgroundColor: {
        "backDark": "#121212;",
        "backLight": "#636571;",
        "header": "#0D0F17;",
        "header2": "#6b7280;",
        "svgDark": "#212435",
        "svgLight": "#888E99",
        "cardDark": "#1E2139",
        "cardLight": "#54545F",
      },
      animation: {
        skewEffect:
          "fadeInSlow 3s ease-in-out forwards, skewEffect 20s cubic-bezier(0.4, 0, 0.6, 1) infinite ",
        bounceSlow: "bounce 1s infinite, fadeInSlow 3s ease-in-out forwards, pulse 8s infinite",
      },
      keyframes: {
        fadeInSlow: {
          "0%": {
            opacity: "0%",
          },
          "100%": {
            opacity: "100%",
          },
        },
        skewEffect: {
          "0%": {
            transform: "skewX(0deg)",
          },
          "30%": {
            transform: "skewY(6deg)",
          },
          "70%": {
            transform: "skewY(-6deg)",
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')],
};
export default config;
