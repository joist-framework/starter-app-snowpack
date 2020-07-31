const esm = require('@open-wc/karma-esm');

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
  config.set({
    files: [{ pattern: 'target/**/*.spec.js', type: 'module' }],
    plugins: [esm, 'karma-*'],
    frameworks: ['jasmine', 'esm'],
    esm: {
      nodeResolve: true,
    },
    exclude: [],
    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,
  });
};
