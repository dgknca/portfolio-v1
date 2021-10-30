const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      syne: ['Syne', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      gray: {
        ...colors.gray
      },
      black: {
        DEFAULT: '#000'
      },
      white: {
        DEFAULT: '#fff'
      },
      green: {
        DEFAULT: '#41b883'
      },
      blue: {
        500: colors.blue[500]
      }
    }
  },
  corePlugins: {
    container: false
  }
}
