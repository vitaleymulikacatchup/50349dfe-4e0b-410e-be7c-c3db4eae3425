/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zoe-blue': '#0ea5e9',
        'zoe-red': '#ef4444',
        'zoe-yellow': '#fbbf24',
        'zoe-gray': '#6b7280',
        'zoe-dark': '#1f2937',
        'hero-overlay': 'rgba(0, 0, 0, 0.4)'
      },
      fontFamily: {
        'sans': ['Arial', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')"
      }
    },
  },
  plugins: [],
}