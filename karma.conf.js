const { createDefaultConfig } = require('@open-wc/testing-karma');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
  const options = createDefaultConfig(config);

  options.files = [{ pattern: 'target/**/*.spec.js', type: 'module' }];
  options.browsers = ['ChromeHeadless'];
  options.esm = { nodeResolve: true };

  config.set(options);
};
