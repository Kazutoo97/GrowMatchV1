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
        primaryOne: "#CBF9DC",
        primaryThree: "#CBF9DC",
        primaryFive: "#079273",
        primarySeven: "#026966",
        primaryNine: "#013946",
        mainColor: "#0ea5e9",
      },
      fontFamily: {
        lato: ['"Lato"', "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
