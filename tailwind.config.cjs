module.exports = {
  // mode: 'jit',
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
