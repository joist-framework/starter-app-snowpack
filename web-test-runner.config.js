const { esbuildPlugin } = require('@web/dev-server-esbuild');

module.exports = {
  nodeResolve: true,
  puppeteer: true,
  plugins: [esbuildPlugin({ ts: true })],
};
