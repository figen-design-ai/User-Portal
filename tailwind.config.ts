import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          pink: "#FBDEF5",
          gradient: {
            start: "#EC4899",
            end: "#F97316",
          },
        },
        black:{
          DEFAULT: "#000000",
        },
        gray: {
          light: "#F5F2EE66",
          border: "#E5E7EB",
          text: "#6B7280",
          dark: "#1F2937",
          wash: '#D9D9D933',
          shadow: '#0000004D',
          overlay: '#00000099',
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
