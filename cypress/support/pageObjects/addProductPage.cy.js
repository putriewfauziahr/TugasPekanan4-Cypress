class addProduct {

    validateTitleProduct(){
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.get('[data-test="inventory-item-name"]').should('be.visible').should('contain', productData.titleProduct);
        });
    }

    validateDescProduct(){
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.get('[data-test="inventory-item-desc"]').should('be.visible').should('contain', productData.descProduct);
        });
    }

    validateImageProduct(){
        cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');
    }

    validatePriceProduct(){
        cy.fixture('../fixtures/data.json').then((productData) => {
            cy.get('[data-test="inventory-item-price"]').should('be.visible').should('contain', "$"+`${productData.priceProduct}`);
        });
    }



    clickButtonAddToCart(){
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible').click();
    }

    validateButtonRemove(){        
        cy.get('#remove-sauce-labs-backpack').should('be.visible').should('contain', 'Remove');
    }

    validateCartIs1(){
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').should('contain', '1');
    }



    clickCart(){
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').click();
    }

    validateCartPage(){
        cy.get('[data-test="title"]').should('be.visible').should('contain', 'Your Cart');
    }

    titleAndValueItemQuantity(){
        cy.get('[data-test="cart-quantity-label"]').should('be.visible').should('contain', 'QTY');
        cy.get('[data-test="item-quantity"]').should('be.visible').should('contain', '1');
    }
    
    titleDescription(){
        cy.get('[data-test="cart-desc-label"]').should('be.visible').should('contain', 'Description');
    }
    


}

export default new addProduct();