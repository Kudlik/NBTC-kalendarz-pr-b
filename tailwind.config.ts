import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: "#0b0c0e",
          900: "#111317",
          800: "#181b20",
          700: "#22262d",
          600: "#2d323b",
        },
        brand: {
          green: "#03A95B",
          yellow: "#FFF500",
          purple: "#8A38E1",
          red: "#E2394D",
        },
      },
      backgroundImage: {
        "frost-gradient":
          "radial-gradient(circle at 15% 0%, rgba(138,56,225,0.25), transparent 45%), radial-gradient(circle at 85% 10%, rgba(3,169,91,0.18), transparent 40%), radial-gradient(circle at 50% 100%, rgba(255,245,0,0.08), transparent 40%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
