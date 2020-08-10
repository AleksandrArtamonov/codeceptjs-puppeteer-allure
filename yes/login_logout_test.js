const {I} = inject();

Feature('login');

Scenario('invalid login', () => {
    I.amOnPage('/');
    I.click({xpath: "//a[@class=\'login\']"})
    I.fillField({id: 'email'}, I.default_email);
    I.fillField({id: 'passwd'}, I.default_password + '1');
    I.click({id: "SubmitLogin"});
    I.waitForElement({xpath: '//div[@class=\'alert alert-danger\']'});
    I.see('There is 1 error')
    I.see('Authentication failed.')
});

Scenario('valid login', () => {
    I.login();
    I.waitForText('Sign out');
    I.see('Testname Test last name');
});

Scenario('logout', () => {
    I.login();
    I.waitForText('Sign out');
    I.see('Testname Test last name');
    I.click({xpath: '//a[contains(text(),\'Sign out\')]'});
    I.waitForText('Sign in');
    I.dontSee('Testname Test last name');
});
