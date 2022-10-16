/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      lilacBg: "#E8E9F1",
      lilacDark: "#B1B7D1",
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
