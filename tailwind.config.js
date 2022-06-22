/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#16A3B7",
      },
      animation: {
        "goDown-in": "goDown-in 0.5s ease-out forwards",
      },
      keyframes: {
        "goDown-in": {
          "0%": {
            top: "20%",
            opacity: 0,
          },
          "100%": {
            top: "50%",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
