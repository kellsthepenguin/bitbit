const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.center': {
          'position': 'absolute',
          'top': '50%',
          'left': '50%',
          'transform': 'translate(-50%, -50%)'
        }
      })

      addUtilities({
        '.placeholder-right-3::placeholder': {
          'position': 'relative',
          'left': '5px'
        }
      })
    })
  ]
}
