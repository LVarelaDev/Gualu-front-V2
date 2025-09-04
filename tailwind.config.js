import { heroui } from "@heroui/react";
import { heroui } from "@heroui/react";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px", // corregido
      },
      colors: {
        greenSmooth: "#9AD2A9",
        primaryOrange: "#d87a1c",
        purplePrimary: "#511C8E",
        purpleSmooth: "#744BA3",
      },
    },
  },
  darkMode: "class",
  plugins: [
    tailwindScrollbar({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
    heroui({
      themes: {
        light: {
          colors: {
            danger: { DEFAULT: "#EF4444", foreground: "#FFFFFF" },
            success: { DEFAULT: "#10b981", foreground: "#fff" },
            primary: { DEFAULT: "#4f46e5", foreground: "#fff" },
            background: { DEFAULT: "#f9f9f9", foreground: "#1f2937" },
          },
        },
        dark: {
          colors: {
            danger: { DEFAULT: "#EF4444", foreground: "#FFFFFF" },
            success: { DEFAULT: "#10b981", foreground: "#fff" },
            primary: { DEFAULT: "#4f46e5", foreground: "#fff" },
            background: { DEFAULT: "#010409", foreground: "#e5e7eb" },
          },
        },
      },
    }),
  ],
};
