/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {'sans': ['Helvetica', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
