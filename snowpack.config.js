/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/__dist__',
  },
  plugins: ['@snowpack/plugin-typescript'],
  optimize: {
    minify: true,
    target: 'es2018',
  },
};
