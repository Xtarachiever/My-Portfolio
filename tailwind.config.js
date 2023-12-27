/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'orange': '#ffab00',
        'redOrange':'#dd2e18',
        'deepBlue': '#001233',
        'lightCoralRed':'#ff595a',
        'gray':'#cac0b3',
        'navyBlue':"#384064",
        "lightBlue":"#9da9ce"
      },
      backgroundColor:{
        'orange': '#ffab00',
        'redOrange':'#dd2e18',
        "lightBlue":"#9da9ce"
      }
    },
  },
  plugins: [],
}