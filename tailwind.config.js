/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{jsx, tsx}', 
    './components/**/*.{jsx, tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}

