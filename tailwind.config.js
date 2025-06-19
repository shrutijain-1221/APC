/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          DEFAULT: "#f5f5dc", // main beige
          light: "#fafae0",   // lighter beige
          dark: "#e5e5b6",    // slightly deeper beige
        },
        softgreen: "#98c1a1", // soft pastel green
        softgray: "#cfcfcf",  // soft muted gray
      },
    },
  },
  plugins: [],
}