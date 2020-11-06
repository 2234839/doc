module.exports = {
  purge: [
    './src/**/*.html',
    './doc/**/*.md',
    './src/**/*.svelte',
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
