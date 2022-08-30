const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    fontFamily: {

    },
    extend: {
      colors: {
        theme: {
          greenLight: '#CAE4DA',
          green: '#5EAF94',
          greenDark: '#009473',
          blueLight: '#D7D6FF',
          blue: '#7789FF',
          blueDark: '#0066FF',
          redLight: '#FFD0D6',
          red: '#FF6A89',
          redDark: '#FF0066',
          yellowLight: '#FFEACF',
          yellow: '#FFC270',
          yellowDark: '#FCAF3C'
        }
      },
      fontFamily: {
        display: ['Fredoka One', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
