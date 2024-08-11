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
        "backLight": "#D0D0D4;",
        "header": "#0D0F17;",
        "header2": "#A6A6A9;",
        "svgDark": "#212435",
        "svgLight": "#A6A6A9",
        "cardDark": "#1E2139",
        "cardLight": "#C0C1C6",
        "menuDark": "#252945",
        "menuLight": "#C0C1C6",
      },
      animation: {
        skewEffect: "fadeInSlow 3s ease-in-out forwards, skewEffect 20s cubic-bezier(0.4, 0, 0.6, 1) infinite ",
        aboutImage: "float 3s ease-in-out infinite ",
        typing: "blinkCursor 500ms steps(40) infinite normal, typing 2s steps(15) 0s normal",
      }
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
      float: {
        "0%": {
          transform: "translateY(0)",
        },
        "50%": {
          transform: "translateY(-10px)",
        },
        "100%": {
          transform: "translateY(0)"
        }
      },
      blinkCursor: {
        "from": {
          "border-right-color": "rgb(255, 255, 255, 0.75)",
          width: "7.5em",
        },

        "to": {
          "border-right-color": " transparent",
          width: "7.5em",
        }
      },
      typing: {
        "from": {
          width: "0",
        },
        "to": {
          width: "",
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
export default config;
