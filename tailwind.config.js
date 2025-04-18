// tailwind.config.js
import { heroui } from "@heroui/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0FF1F6',
        grayscale: '#002228',
        secbg: '#07292F',
      },
      fontFamily: {
        default: ["'Work Sans'", "sans-serif"],
        heading: ["'Montserrat'", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(),
  ]
};
