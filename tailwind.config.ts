import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ember: {
          400: "#ff8a35",
          500: "#ff681f",
          600: "#f04e0b",
        },
        ink: {
          900: "#050607",
          800: "#0b0f14",
          700: "#111821",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(255, 104, 31, 0.32)",
        card: "0 22px 55px rgba(0, 0, 0, 0.22)",
      },
      backgroundImage: {
        "radial-ember": "radial-gradient(circle at center, rgba(255,104,31,.2), transparent 44%)",
      },
    },
  },
  plugins: [],
};

export default config;
