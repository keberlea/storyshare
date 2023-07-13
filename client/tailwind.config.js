module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './client/public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        'licorice': ["Licorice", 'cursive'],
        'marvel': ["Marvel", 'sans-serif'],
        'lobster': ["Lobster", 'cursive']

      },
      textColor: {
        'inside': '#ffffff', // white color for text inside
      },
      textStroke: {
        'black': '4px black',
      },
      colors: {
        'header-blue': '#b8d1f6',
        'yellow': '#fee857',
        'pink': '#f370be',
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
