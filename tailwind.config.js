const {heroui} = require('@heroui/theme');
import { nextui } from "@nextui-org/theme";
import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/components/(checkbox|form).js"
  ],
  theme: {
    extend: {
      screens: {
        "sm": "640px",
        // => @media (min-width: 640px) { ... }

        "md": "768px",
        // => @media (min-width: 768px) { ... }

        "lg": "1024px",
        // => @media (min-width: 1024px) { ... }

        "xl": "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1280px",
        // => @media (min-width: 1536px) { ... }
      },
    },
    color: {
      greenSmooth: "#9AD2A9",
      primaryOrange: "#d87a1c",
      purplePrimary: "#511C8E",
      purpleSmooth: "#744BA3",
    },
  },
  darkMode: "class",
  /* Se cambio el color primary, danger y success por defecto */
  plugins: [tailwindScrollbar({
      nocompatible: true,preferredStrategy: "pseudoelements",}),nextui({
      themes: {
        light: {
          colors: {
            danger: {
              DEFAULT: "#EF4444",foreground: "#FFFFFF",},success: {
              DEFAULT: "#10b981",foreground: "#fff",},primary: {
              DEFAULT: "#4f46e5",foreground: "#fff",},background: {
              DEFAULT: "#f9f9f9",foreground: "#1f2937",},},},dark: {
          colors: {
            danger: {
              DEFAULT: "#EF4444",foreground: "#FFFFFF",},success: {
              DEFAULT: "#10b981",foreground: "#fff",},primary: {
              DEFAULT: "#4f46e5",foreground: "#fff",},background: {
              DEFAULT: "#010409",foreground: "#e5e7eb",},},},},}),heroui()],
};
