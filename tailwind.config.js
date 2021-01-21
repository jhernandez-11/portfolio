module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      comfortaa: ['Comfortaa', 'cursive']
    },
    extend: {
      height: {
        'almost-full': '90%' 
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
