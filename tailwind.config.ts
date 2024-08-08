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
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')],
};
export default config;
