/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#0D6EFD",
        danger: "#DC3545",
        specialgray: "#CED4DA",
        specialwhite: "#FFFFFF",
        graywhite: "#F8F9FA",
        bordercolor: "rgba(0, 0, 0, 0.175)",
        graybackground: "rgba(0, 0, 0, 0.03)",
        specialyblue: "#86B7FE",
      },
    },
  },
  plugins: [],
};
