/// <reference types= "cypress" />

describe('Carrinho de compras', () => {
    beforeEach(() => {
        cy.setCookie('lojaebac', 'produto') // garante o cookie
        cy.visit('/produtos')
    })


    it('Deve adicionar produto ao carrinho', () => {
        cy.intercept('POST', '**/cart/add', {
            statusCode: 200,
            body: { success: true }
        }).as('Ajax Full-Zip Sweatshirt')

        cy.get('.product-block').eq(3).click()

        cy.get('.button-variable-item-M').click()

        cy.get('.button-variable-item-Red').click();

        cy.get('.single_add_to_cart_button').should('not.be.disabled').click();


    });

    it('Deve remover produto do carrinho', () => {
        cy.intercept({
            method: 'POST',
            url: '**/carrinho/remover-item'
        }).as('removeItem')

        cy.get('a.remove').click()

        cy.wait('@Ajax Full-Zip Sweatshirt').its('response.statusCode').should('eq', 200)


        cy.get('.cart-empty.woocommerce-info').should('contain', 'Seu carrinho está vazio')



    });

})


