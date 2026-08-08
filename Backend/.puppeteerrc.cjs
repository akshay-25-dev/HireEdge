const { join } = require('path');

/**
 * @type {import("puppeteer").Configuration}
 */
module.exports = {
  // Configures Puppeteer to install Chrome inside the project directory (.cache/puppeteer)
  // so that Render can locate the browser executable at runtime.
  cacheDirectory: join(__dirname, '.cache', 'puppeteer'),
};
