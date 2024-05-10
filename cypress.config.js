module.exports = {
  projectId: "ma41ut",
  reporter: 'junit',
  defaultCommandTimeout: 10000,
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml',
    toConsole: true,
  },

  env: {
    baseUrl: 'https://www.amazon.com.br/',
    mobileViewportWidthBreakpoint: 414,
    coverage: true,
    codeCoverage: {
      url: 'https://www.amazon.com.br/'
    },
    mobile: 'iphone-xr',
    desktop: 'macbook-15'
  },
    experimentalWebKitSupport: true,
    video: false,

  // Configure the JUnit reporter
  junit: {
    reporterEnabled: true,
    mochaFile: 'cypress/reports/junit/test-results.xml',
    toConsole: true,
  },


  experimentalStudio: true,
  chromeWebSecurity: false,


  e2e: {
    experimentalSessionAndOrigin: true,
    experimentalOriginDependencies: true,
    // reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
    defaultBrowser: 'chrome'
  },
  watchForFileChanges: false,
};