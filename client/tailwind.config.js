/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
        },
        'mobile-only': { 'max': '991.98px' },


      colors: {
        primary: '#008080',
        secondary: '#FFA500',
        button : '#999999',
        background: '#dddddd',
        
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}