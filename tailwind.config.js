/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 1s 2.5',
      },
      colors:{
        personalized: {
          '50':  '#f6f9fb',
          '100': '#e1f1fc',
          '200': '#bfddf9',
          '300': '#92bbf0',
          '400': '#6694e4',
          '500': '#506fda',
          '600': '#4153c8',
          '700': '#333ea6',
          '800': '#232a79',
          '900': '#141a4c',
        },
      }
    },
  },
  plugins: [],
}