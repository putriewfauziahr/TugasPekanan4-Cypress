require('@cypress/xpath');
import "../commands";
import loginPage from '../pageObjects/loginPageObject.cy.js';

describe('Login', () => {
    it('Success Login', () => {
        cy.visit('/');
        loginPage.validateLoginPage();
        loginPage.inputUsername();
        loginPage.validateUsernameValue();
        loginPage.inputPassword();
        loginPage.validatePasswordValue();
        loginPage.clickButtonLogin();
        loginPage.validateHomepage();
    });


});