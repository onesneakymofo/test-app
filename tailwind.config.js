const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './src/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        amber: colors.amber,
        blue: colors.blue,
        black: colors.black,
        blueGray: colors.blueGray,
        coolGray: colors.coolGray,
        cyan: colors.cyan,
        emerald: colors.emerald,
        indigo: colors.indigo,
        gray: colors.gray,
        green: colors.green,
        fuchsia: colors.fuchsia,
        lightBlue: colors.lightBlue,
        lime: colors.lime,
        red: colors.red,
        rose: colors.rose,
        orange: colors.orange,
        pink: colors.pink,
        purple: colors.purple,
        teal: colors.teal,
        trueGray: colors.trueGray,
        violet: colors.violet,
        warmGray: colors.warmGray,
        white: colors.white,
        yellow: colors.yellow
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
