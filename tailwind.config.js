module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'header-blue': '#b8d1f6',
        'button-yellow': '#fee857',
        'app-color': '#72a1ed',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
