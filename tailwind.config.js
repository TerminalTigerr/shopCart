/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        darkGreen: 'rgb(26, 93, 26)',
        deepYellow: 'rgb(241, 201, 59)',
        deepYellowLigt: 'rgb(251, 216, 93)',
        deepYellowSupLight: 'rgb(250, 227, 146)'
      }
    },
  },
  plugins: [],
}

