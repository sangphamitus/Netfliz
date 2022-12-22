/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  important: true,
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        button: ["Bebas Neue", "cursive", "sans-serif"],
      },
      backgroundImage: {
        "login-background": "url('/src/assets/images/background_login.jpg')",
      },
    },
  },
  plugins: [theme()],
};

function theme() {
  return plugin(function ({ addComponents, theme }) {
    addComponents({
      ...card(theme),
    });
  });
}

const card = (theme) => ({
  ".card": {
    position: "relative",
    ".trash-icon": {
      position: "absolute",
      top: 20,
      right: 50,
      opacity: 0,
    },
  },
  ".card:hover": {
    ".trash-icon": {
      opacity: 1,
    },
  },
});
