import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      screens: {
        "3xl": "1800px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: colors.neutral,
        vibrant: {
          "steel-blue": "#3f88c5",
          keppel: "#44bba4",
          onyx: "#393e41",
          cinnabar: "#e94f37",
          ivory: "#f6f7eb",
        },
        gold: {
          DEFAULT: "#938861",
          100: "#CFC8B1",
        },
        blue: "#151a23",
      },
      fontFamily: {
        sans: "var(--font-inter)",
        ["sans-tight"]: "var(--font-inter-tight)",
        rocksalt: "var(--font-rocksalt)",
        smooch: "var(--font-smooch)",
      },
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
};

export default config;
