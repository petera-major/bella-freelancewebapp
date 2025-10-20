/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: '#FCECEC',
        gold: '#E6C674',
        softGold: '#F7E8B3',
        rose: '#F4B6C2',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
