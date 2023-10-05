/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./nuxt/**/*.{vue,js,ts,jsx,tsx}",
    "./app.vue",
    "./pages/**/*.vue",
    "./components/**/*.{html,js,vue}",

    // Add any other paths as needed
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};
