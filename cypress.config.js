const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/support/E2E",
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
    },
  },
});
