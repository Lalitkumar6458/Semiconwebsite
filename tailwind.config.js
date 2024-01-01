/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          bgClr:"linear-gradient(to bottom, #2e4ffe 0%, #4f7efa 100%)"
      },
      colors: {
    blueDark:"#060924",
    orangeClr:'#ff6900',
    lighBlue:"#4f7efa",
    iconBg:"rgba(255,255,255,0.1)",
    borderClr:"rgba(255, 255, 255, 0.2)",
    hoverClr:"rgba(255, 255, 255, 0.05)",
    countBg:"rgba(255, 255, 255, 0.08)",
    textClr:"#A0A5B9"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'Oswald':[ 'Oswald','sans-serif'],
        'Roboto':['Roboto',' sans-serif'],
      }
    },
  },
  plugins: [],
}
