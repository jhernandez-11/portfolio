module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transform: ['hover', 'focus']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
