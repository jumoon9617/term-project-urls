import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        'deep-gray': "#242726",
        'light-gray': "#484D5A",
        'rust-red': "#AA493B",
        'golden-yellow': "#E0BA4E",
      },
      backgroundImage: {
        'custom-bg': "url('./assets/images/Background.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
