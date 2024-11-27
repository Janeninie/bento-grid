import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        yellow: {
          100: "hsl(31, 66%, 93%)",
          500: "hsl(39, 100%, 71%)",
        },
        purple: {
          100: "hsl(254, 88%, 90%)",
          500: "hsl(256, 67%, 59%)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
