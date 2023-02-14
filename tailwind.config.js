/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00B4DB',
        'cyan-blue': {
          medium: '#2F4554',
          dark: '#1D242E',
        },
      },
    },
  },
  plugins: [],
};
