/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      ol: "1140px",
      xl: "1440px",
    },
    colors: {
      primary: "#001AFF",
      abu: "#7e5bef",
      white: "#ffffff",
      black: "#000000",
      warna1: "#CCCBFF",
      warna2: "#FEFFD5",
      warna3: "#E9FFEE",
      warna4: "#D8FFF8",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
