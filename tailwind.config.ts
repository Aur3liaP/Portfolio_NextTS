import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontTitle: ["var(--font-title)"],
        defaultFont: ["var(--default-font)", "sans-serif"], 
        secondaryFont: ["var(--secondary-font)", "sans-serif"], 
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        clryellow : "var(--clr-yellow)",
        clrlightpurple : "var(--clr-light-purple)",
        clrdarkpurple : "var(--clr-dark-purple)",
      },
    },
  },
  plugins: [],
} satisfies Config;
