/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        subTextColor: '#7F8489',
        primaryTextColor: '#FDFDFD',
      },
    },
  },
  plugins: [],
};
