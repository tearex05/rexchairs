/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#111"
      },
      screens: {
        'xs': '450px',
        'screen1': '500px',
        'screen2': '700px',
        'screen3': '900px',
        'screen4': '1000px',
        'screen5': '1200px',
        'screen6': '1400px',
        'screen7': '1700px',
      }
    },
  },
  plugins: [],
}
