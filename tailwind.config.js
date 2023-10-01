/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#9ca3af",
        textBlack: "#29303B",
        descCard: "#4F545E",
        textCard: "#777777",
        HeadingCard: "#424242",
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
