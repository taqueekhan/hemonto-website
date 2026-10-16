import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { burgundy: { DEFAULT: "#4D1821", deep: "#2E0D13", soft: "#7A2F3B" }, cream: { DEFAULT: "#F4EBDD", dark: "#E6D8C3", light: "#FBF6EC" } },
    fontFamily: { display: ["var(--font-display)", "Georgia", "serif"], sans: ["var(--font-body)", "system-ui", "sans-serif"] },
  } },
} satisfies Config;
