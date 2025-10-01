/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fdfaf5',
          100: '#f8efe0',
          200: '#f1dfc3',
          300: '#e7c79a',
          400: '#d4a260',
          500: '#bb8340',
          600: '#a06832',
          700: '#81502a',
          800: '#684129',
          900: '#553724'
        },
        teal: {
          100: '#c7f0e9',
          200: '#8dd8cb',
          300: '#4db8a6',
          400: '#209989',
          500: '#107f7a'
        }
      },
      fontFamily: {
        display: ['"Nunito"', 'sans-serif'],
        body: ['"Lato"', 'sans-serif']
      }
    }
  },
  plugins: []
};
