const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  files: ['src/**/*.spec.ts'],
  nodeResolve: true,
  puppeteer: true,
  plugins: [esbuildPlugin({ ts: true })],
};
