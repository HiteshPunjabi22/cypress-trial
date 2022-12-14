const { defineConfig } = require('cypress')
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  chromeWebSecurity: false,
  includeShadowDom: true,
  defaultCommandTimeout: 50000,
  taskTimeout: 80000,
  restartBrowserBetweenSpecFiles: true,
  pageLoadTimeout: 40000,
  hideXHR: false,
  failOnStatusCode: false,
  video: false,
  width: 1920,
  height: 1080,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',
  "reporter": "junit",
  "reporterOptions": {
    "mochaFile": "tests/TEST-output-[hash].xml",
    "toConsole": true,
    "attachments": true
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      on('task',{
        log(message) {
          console.log(message)
          return null
        }
      })
      return config;
    },
    baseUrl: 'https://www.saucedemo.com'
  }
})
