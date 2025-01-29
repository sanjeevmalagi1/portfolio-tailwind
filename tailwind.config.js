module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
  ],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        'primary-color': '#1a27c9',
        'primary-color-hover': '#141c94',
        'secondary-color': '#F7E05E'
      }
    }
  },
  variants: {},
  plugins: [],
}
