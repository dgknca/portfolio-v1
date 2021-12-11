const cssnano = require('cssnano')

const mode = process.env.NODE_ENV
const dev = mode === 'development'

module.exports = {
  plugins: [
    require('tailwindcss/nesting')(require('postcss-nesting')),
    require('tailwindcss'),
    require('autoprefixer'),
    !dev &&
      cssnano({
        preset: 'default'
      })
  ]
}
