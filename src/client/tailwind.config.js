/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      button: ["Bebas Neue", "cursive", "sans-serif"],
    },
    backgroundImage: {
      'login-background': "url('/src/assets/images/background_login.jpg')",
    }
  },
  plugins: [],
};
