/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6E9C1",
        secondary: "#FFF5D6",
        third: "#EFC143",
        fourth: "#6E68BB",
        fifth: "#007856",
        sixth: "#E62A2A",
        seven: "#FF4BB1",
        eight: "#4A4A4A",
        nine: "#EEBD3A",
      },
      fontFamily: {
        poppins: ["Poppins", "sans - serif"],
      },
    },
    screens: {
      mobile: "414px",
      tablet: "601px",
      desktop: "1280px",
    },
  },
  plugins: [],
};
