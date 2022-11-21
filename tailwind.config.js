/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontFamily: {
      sans: 'Courgette, sans-serif'
    },
    extend: {
      colors: {
        beige: {
          50: '#FBF6F6',
          100: '#E0D5D3'
        },
        brown: {
          200: '#DA6951',
          400: '#852C19',
          700: '#5F2F2F'
        },
        green: {
          500: '#00A611',
        }
      }
     },
  },
  plugins: [],
}
