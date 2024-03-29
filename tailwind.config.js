/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textColor: {
        'custom-gray': 'rgb(238, 236, 236)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'bebas-neue': ['"Bebas Neue"', 'sans-serif'],
      },
      colors: {
        primary: '#141416',
        secondary: '#EE7C53',
        button: '#53354D',
      },
    },
  },
  plugins: [],
};
