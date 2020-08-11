const { setSharedCookies } = require('@codeceptjs/configure')

// share cookies between browser helpers and REST/GraphQL
setSharedCookies();
// turn on headless mode with show option

exports.config = {
  tests: 'yes/**/*_test.js',
  output: './output',
  helpers: {

    Puppeteer: {
      url: 'http://automationpractice.com/index.php',
      show: false,
      restart: true,
      waitForNavigation: "networkidle0",
      waitForTimeout: 3000,
      waitForAction: 200
      // windowSize: '1920x1080',
    },
    REST: {
      endpoint: 'http://automationpractice.com/index.php'
    },
    ResembleHelper : {
      require: "codeceptjs-resemblehelper",
      screenshotFolder: "./output/",
      baseFolder: "./screenshots/base/",
      diffFolder: "./screenshots/diff/"
    }
  },
    include: {
      I: './steps_file.js',
      catalog_page: './pages/catalog_page.js',
      shopping_cart_page: './pages/shopping_cart_page.js',
      api_requests: './helpers/api_requests'
    },
    bootstrap: null,
    mocha: {},
    name: 'demo_framework_codeceptjs_puppeteer_allure',
    plugins: {
      retryFailedStep: {
        enabled: true,
        retries: 3
      },
      screenshotOnFail: {
        enabled: true
      },
      allure: {
		outputDir: './allure-results',
        enableScreenshotDiffPlugin: true
      },
      autoLogin: {
        enabled: true,
        saveToFile: true,
        inject: 'login',
        users: {
          user: {
            login: (I) => {
              I.login()
            },
            check: (I) => {
              I.amOnPage('/');
              I.see('Testname Test last name');
            },
          }
        }
      }
    }
  }


