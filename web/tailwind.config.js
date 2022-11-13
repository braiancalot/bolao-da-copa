/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif"
      },
      colors: {
        gray: {
          100: "#E1E1E6",
          200: "#C4C4CC",
          300: "#8D8D99",
          700: "#323238",
          800: "#202024",
          900: "#121214"
        },
        green: {
          500: "#129E57"
        },
        yellow: {
          500: "#F7DD43",
          700: "#B8A119",
        }
      },
      backgroundImage: {
        app: "url(/bg-effects.png)"
      }
    },
  },
  plugins: [],
}
