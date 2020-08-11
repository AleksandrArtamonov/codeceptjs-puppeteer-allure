# Codeceptjs + Allure + Puppeteer + Chai + Resemble example 

### Features
- setup of CodeceptJS
  Google Puppeteer
  Allure reporting
- Visual testing with Resemble
- Using REST for creating some test data
- Using Data Driven Testing
- Using autologin

### To run tests and generate Allure report:
run tests
```
npx codeceptjs run --plugins allure  
or
npm test
```
generate report
```
allure serve allure-results
```
### TODO
- Add Github actions