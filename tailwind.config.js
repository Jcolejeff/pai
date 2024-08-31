/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "small-circle": 'url("/small-ellipse.png")',
        "big-circle": 'url("/big-ellipse.png")',
        "map-image": 'url("/frame-18.png")',
        "big-map": 'url("/frame-17.png")',
        splash: 'url("/splash.png")',
      },
      colors: {
        "custom-blue": "#1570ef",
        default: "#fafafa",
        primary: {
          1: "#1570ef",
          2: "#B8CADB",
        },
        secondary: {
          1: "#0149FF",
          2: "#F6762C",
          3: "#F1F1F1",
          4: "#333B47",
          5: "#FFFFFF14",
          6: "#E6F0FF",
        },
      },
      Icons: {
        "open-icon": 'url("/open-icon.png")',
        "close-icon": 'url("/close-icon.png)',
      },
      fontFamily: {
        "general-sans": ['"General Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
});
