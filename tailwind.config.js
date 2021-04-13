const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fff',
      black: '#000',
      gray: colors.coolGray,
      truegray: colors.trueGray,
      warmgray: colors.warmGray,
      red: colors.red,
      lightblue: colors.lightBlue,
      blue: colors.blue,
      yellow: colors.amber,
      green: colors.emerald,
      violet: colors.violet,
      orange: colors.orange,
      bluetext: '#5366c2',
      bluebg: '#000430',
      bluetextsmall: '#11a3e9',
      lime: colors.lime
    },
    extend: {}
  },
  variants: {
    extend: {
      padding: ['hover']
    }
  },
  plugins: []
}
