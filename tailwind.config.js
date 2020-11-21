module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './dist/**/*.html',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'primary-color': '#1a27c9',
        'primary-color-hover': '#141c94',
      }
    }
  },
  variants: {},
  plugins: [],
}
