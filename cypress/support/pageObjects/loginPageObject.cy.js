class loginPage {
    visit(){
        cy.visit('/');
        cy.get('.home-main>.content>.title').should('contain', 'Get fit and look fab in new seasonal styles');
    }



}

export default new loginPage();