/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{svelte,ts,js}'],
  theme: {
    extend: {
      fontFamily: { sans: ['ui-sans-serif', 'system-ui'] }
    }
  },
  plugins: []
}
