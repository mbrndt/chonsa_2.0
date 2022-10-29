/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lavenderBg: "#E8E9F1",
      lavenderDark: "#B1B7D1",
      red: "#F25F5C",
      white: "#FFFFFF",
      graydark: "#4B4B4B",
      graysoft: "#9B9B9B",
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
        josefin: "Josefin Sans",
      },
    },
  },
  plugins: [],
};
