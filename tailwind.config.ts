import type { Config } from "tailwindcss";
import { colors, spacing, radius } from "@jmo/design-token";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}",
    "../jmo-ui-kit/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ...colors.brand,
          primary: "#915AD4",
          orchid: "#915AD4",
          indigo: "#5E59D4",
          magenta: "#B959D4",
          berry: "#CA4599",
        },
        surface: {
          dark: "#1D0548",
          light: "#F9F6FE",
        },
        neutral: colors.neutral,
        semantic: colors.semantic,
      },
      spacing,
      borderRadius: radius,
    },
  },
  plugins: [],
};

export default config;
