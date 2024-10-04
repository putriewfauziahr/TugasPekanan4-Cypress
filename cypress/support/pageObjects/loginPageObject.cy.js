class loginPage {
    validateLoginPage(){
        cy.get('.login_logo').should('be.visible').should('contain', 'Swag Labs');
    }

    inputUsername(){
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.get('#user-name').should('be.visible').type(loginData.loginUsername);
        })
    }

    inputPassword(){
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.get('#password').should('be.visible').type(loginData.loginPassword);
        })
    }


    validateUsernameValue(){
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.get('#user-name').should('be.visible').should('have.value', loginData.loginUsername);
        })
    }

    validatePasswordValue(){
        cy.fixture('../fixtures/data.json').then((loginData) => {
            cy.get('#password').should('be.visible').should('have.value', loginData.loginPassword);
        })
    }

    

    clickButtonLogin(){
        cy.get('#login-button').should('be.visible').should('contain', 'Login').click();
    }

    validateHomepage(){
        cy.get('.app_logo').should('be.visible').should('contain', 'Swag Labs');
        cy.get('[data-test="title"]').should('be.visible').should('contain', 'Products');
    }


}

export default new loginPage();