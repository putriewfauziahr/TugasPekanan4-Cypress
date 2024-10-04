require('@cypress/xpath');
import "../commands.js";
import loginPage from '../pageObjects/loginPageObject.cy.js';
import addProduct from '../pageObjects/addProductPage.cy.js';

describe('Add Products', () => {
    it('Add Product to the Cart ', () => {
        cy.visit('/');
        loginPage.validateLoginPage();
        loginPage.inputUsername();
        loginPage.validateUsernameValue();
        loginPage.inputPassword();
        loginPage.validatePasswordValue();
        loginPage.clickButtonLogin();
        loginPage.validateHomepage();

        addProduct.validateTitleProduct();
        addProduct.validateDescProduct();
        addProduct.validateImageProduct();
        addProduct.validatePriceProduct();
        addProduct.clickButtonAddToCart();
        addProduct.validateButtonRemove();
        addProduct.validateCartIs1();

        addProduct.clickCart();
        addProduct.validateCartPage();
        addProduct.titleAndValueItemQuantity();
        addProduct.titleDescription();
        addProduct.validateTitleProduct();
        addProduct.validateDescProduct();
        addProduct.validatePriceProduct();

    });


});