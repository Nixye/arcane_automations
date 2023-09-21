const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "eebns3",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
