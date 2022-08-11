/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      }
    },
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('./img/background.jpg')",
      })
    },
  plugins: [],
}
}