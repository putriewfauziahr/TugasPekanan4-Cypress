const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/support/E2E",
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com/',
    blockHosts: ["https://events.backtrace.io"],
    setupNodeEvents(on, config) {
    },
  },
});
