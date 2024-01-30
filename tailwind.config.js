/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      "dark-yellow": "#F9D326",
      yellow: "#F3DE53",
      "input-outline-grey": "#64748b",
      "input-outline-yellow": "#facc15",
      blue: "#1877F2",
      "dark-grey": "#545454",
      "dark-green": "#111111",
      grey: "#5A5A5A",
      secondary: " #F4F4F4",
      lime: "#BAEF58",
      "light-grey": "#989898",
      "extralight-grey": "#D9D9D9",
    },
  },
  plugins: [],
};
