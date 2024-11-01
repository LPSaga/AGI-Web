import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        hkgrotesk: ["var(--font-hkgrotesk)", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.5" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: ["1rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.017em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.017em" }],
        "3xl": ["1.875rem", { lineHeight: "1.333", letterSpacing: "-0.017em" }],
        "4xl": ["2.25rem", { lineHeight: "1.277", letterSpacing: "-0.017em" }],
        "5xl": ["3rem", { lineHeight: "1.2", letterSpacing: "-0.017em" }],
        "6xl": ["3.75rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
        "7xl": ["5rem", { lineHeight: "1", letterSpacing: "-0.017em" }],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0",
        wide: "0.01em",
        wider: "0.02em",
        widest: "0.4em",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "dark", // default theme from the themes object
      defaultExtendTheme: "dark", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};
