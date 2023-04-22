/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    './src/index.css',
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
