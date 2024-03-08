/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: '#5A5959',
        customRed: '#D01C28',
        customYello: '#FFEAAE',
      },
    },
  },
  plugins: [],
};
