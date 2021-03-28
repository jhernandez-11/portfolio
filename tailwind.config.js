module.exports = {
  purge: false,
  theme: {
    colors: {
      blue: {
        light: '#23C3ED',
        default: '#159FD9',
        dark: '#187FBF'
      },
      gray: {
        darkest: '#262626',
        lightest: '#F2F2F3'
      },
      white: {
        default: '#fff'
      }
    },
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
