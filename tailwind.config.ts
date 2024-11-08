import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const allColors = {
  ...defaultTheme.colors,
  ...{
    "ir-01": "#FEF9FA",
    "ir-02": "#FDF0F3",
    "ir-03": "#F9D2D9",
    "ir-04": "#F2A6B3",
    "ir-05": "#EA6C80",
    "ir-06": "#DF2040",
    "ir-07": "#B71A34",
    "ir-08": "#8F1428",
    "ir-09": "#650E1D",
    "ir-10": "#3D0912",
    "ir-11": "#160306",
    "leaf-01": "#FBFDFC",
    "leaf-02": "#F4FBF6",
    "leaf-03": "#D9F2E1",
    "leaf-04": "#B2E6C3",
    "leaf-05": "#81D59D",
    "leaf-06": "#40BF6A",
    "leaf-07": "#349D57",
    "leaf-08": "#297A44",
    "leaf-09": "#1D5830",
    "leaf-10": "#12361E",
    "leaf-11": "#06130B",
    "fire-01": "#FFFDFA",
    "fire-02": "#FFF7F0",
    "fire-03": "#FEE5CD",
    "fire-04": "#FCCC9C",
    "fire-05": "#FBAB5B",
    "fire-06": "#F87F06",
    "fire-07": "#CC6805",
    "fire-08": "#9B5108",
    "fire-09": "#723A03",
    "fire-10": "#462302",
    "fire-11": "#190D01",
    "storm-01": "#FCFDFD",
    "storm-02": "#F6F8F9",
    "storm-03": "#E0E7EB",
    "storm-04": "#C2CFD6",
    "storm-05": "#9AB0BC",
    "storm-06": "#668899",
    "storm-07": "#54707D",
    "storm-08": "#415762",
    "storm-09": "#2F3F46",
    "storm-10": "#1D262B",
    "storm-11": "#0A0E0F",
    "sun-02": "#FEFAEF",
    "sun-03": "#FBF0D0",
    "sun-06": "#EBB513",
    "sun-08": "#96740C",
    "twlt-01": "#F9FEFD",
    "twlt-02": "#F2FCFC",
    "twlt-03": "#D4F7F4",
    "twlt-04": "#AAEEE9",
    "twlt-05": "#72E3DA",
    "twlt-06": "#2AD5C6",
    "twlt-07": "#23AFA3",
    "twlt-08": "#1B887F",
    "twlt-09": "#13625C",
    "twlt-10": "#0C3C37",
    "twlt-11": "#041413",
    "twlt-alnf": "#F2FCFB",
    "twlt-alf": "#21A79C",
    "oil-01": "#FDFDFD",
    "oil-02": "#F7F7F7",
    "oil-03": "#E5E5E5",
    "oil-04": "#CCCCCC",
    "oil-05": "#ABABAB",
    "oil-06": "#808080",
    "oil-07": "#696969",
    "oil-08": "#525252",
    "oil-09": "#3B3B3B",
    "oil-10": "#242424",
    "oil-11": "#0D0D0D",
    "uv-01": "#FDFAFF",
    "uv-02": "#F7F0FE",
    "uv-03": "#E6CFFC",
    "uv-04": "#CC9EFA",
    "uv-05": "#AB5FF6",
    "uv-06": "#7F0DF1",
    "uv-07": "#680AC6",
    "uv-08": "#52089B",
    "uv-09": "#3B066F",
    "uv-10": "#240344",
    "uv-11": "#0D0118",
    "uv-alnf": "#F4F1FF",
    "uv-alf": "#400AC6",
  },
};

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ["0.75rem", { lineHeight: "14px", fontWeight: "400" }],
      sm: ["0.875rem", { lineHeight: "16px", fontWeight: "400" }],
      base: ["1rem", { lineHeight: "20px" }],
      lg: ["1.125rem", { lineHeight: "22px" }],
      "2xl": ["1.5rem", { lineHeight: "28px" }],
      "2.5xl": ["2rem", { lineHeight: "38px" }],
      "5xl": ["3rem", { lineHeight: "56px" }],
      "7xl": ["4.5rem", { lineHeight: "88px" }],
      "8xl": ["6rem", { lineHeight: "120px" }],
    },
    borderRadius: {
      ...defaultTheme?.borderRadius,
      xxl: "1.125rem",
      "2.5xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.5rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(112deg, rgba(255, 255, 255, 0.29) 7.59%, rgba(255, 255, 255, 0.39) 102.04%)",
      },
      width: {
        "4.5": "1.125rem",
      },
      height: {
        "9.5": "38px",
        "4.5": "1.125rem",
      },
      colors: allColors,
      fontFamily: {
        inter: ["var(--font-inter)"],
        dana: ["var(--font-dana)", { fontFeatureSettings: '"ss02"' }],
      },
      spacing: {
        "13": "52px",
        "30": "120px",
      },
      boxShadow: {
        e1: "0 -1px 4px rgba(0, 0, 0, 0.04)",
        e2: "0 1px 4px rgba(0, 0, 0, 0.04)",
        e3: "0 1px 8px rgba(0, 0, 0, 0.08)",
        e4: "0 1px 8px rgba(0, 0, 0, 0.12)",
        e5: "0 8px 12px rgba(0, 0, 0, 0.12)",
        e6: "0 8px 16px rgba(0, 0, 0, 0.16)",
        e7: "0 16px 24px rgba(0, 0, 0, 0.16)",
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "fade-in": "fade-in 0.2s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
  important: true,
};

export default config;
