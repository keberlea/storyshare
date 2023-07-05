module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'licorice': ["Licorice", 'cursive'],
        'marvel': ["Marvel", 'sans-serif']
      },
      textColor: {
        'inside': '#ffffff', // white color for text inside
      },
      textStroke: {
        'black': '4px black',
      },
      colors: {
        'header-blue': '#b8d1f6',
        'button-yellow': '#fee857',
        'button-pink': '#f370be',
        'app-color': '#72a1ed',
        'foot-color': '#5e5d7c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
