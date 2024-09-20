import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    color: {
      greenSmooth: "#9AD2A9",
      primaryOrange: "#d87a1c",
      purplePrimary: "#511C8E",
      purpleSmooth: "#744BA3",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  /* Se cambio el color primary, danger y success por defecto */
  plugins: [nextui({
    themes:{
      light: {
        colors:{
          danger:{
            DEFAULT: '#EF4444',
            foreground: '#FFFFFF'
          },
          success:{
            DEFAULT:"#10b981",
            foreground:"#fff"
          },
          primary:{
            DEFAULT:"#4f46e5",
            foreground:"#fff"
          }
        }
      },
      dark:{
        colors:{
          danger:{
            DEFAULT: '#EF4444',
            foreground: '#FFFFFF'
          },
          success:{
            DEFAULT:"#10b981",
            foreground:"#fff"
          },
          primary:{
            DEFAULT:"#4f46e5",
            foreground:"#fff"
          }
        }
      }
    }
  })],
};
