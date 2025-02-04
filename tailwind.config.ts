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
      },
      fontFamily: {
        Roboto: ['var(--font-roboto)'], 
        PlaywriteVN: ['var(--font-playwriteVN)'],
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
      },
      // fontFamily: {
      //   roboto: ['Roboto', 'sans-serif'],
      //   playwriteVN: ['PlaywriteVN-Regular', 'sans-serif'],
      // },
    },
  },
  plugins: [],
} satisfies Config;
