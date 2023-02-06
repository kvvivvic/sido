/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors: {
        spinner: "#ffffffb7",
      },
      height: {
        card: "469px",
      },
    },
    fontFamily: {
      en: ["Playfair Display", "Roboto"],
      roboto: ["Roboto", "sans-serif"],
      lato: ["Lato", "Roboto", "sans-serif"],
    },
  },
  plugins: [],
  important: true,
};
