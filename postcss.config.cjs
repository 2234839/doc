const mode = process.env.NODE_ENV;
const dev = mode === "development";
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
