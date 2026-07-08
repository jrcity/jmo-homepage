import type { Config } from "tailwindcss";
import { colors, spacing, radius } from "jmo-design-tokens";

const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: colors.brand,
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
