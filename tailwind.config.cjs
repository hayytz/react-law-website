/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E3B748",
        secondary: "#E6E6E6",
        bgHero: "#111111",
        bgcolor: "#1D1D1D",
        subscribeBg: "#47474780",
        hoverColor: "#2E2E2E"

      },

      fontFamily: {
        inter: ['Inter', "sans-serif"],
      
      },
      backgroundImage: {
        'name': "url('./')",
      }
    },
    screens: {
     'xl': {'max': '1700px'},
    },
  },
  plugins: [],
};