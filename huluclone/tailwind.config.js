module.exports = {
  content: ['./pages/**/*.{jsx,tsx,js,ts}','./components/**/*.{jsx,tsx,js,ts}'],
  theme: {
    extend: {
        screens:{
          "xxl": "2200px"
        }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
