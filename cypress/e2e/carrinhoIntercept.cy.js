/// <reference types= "cypress" />

describe('Carrinho de compras', () => {
    beforeEach(() => {
        cy.setCookie('http://lojaebac.ebaconline.art.br') // garante o cookie
        cy.visit('/produtos')
    })
})

it('Deve adicionar produto ao carrinho', () => {
    cy.intercept('POST', '**/cart/add', {
        statusCode: 200,
        body: { success: true }
    }).as('Ingrid Running Jacket')

    cy.get('button.variable-item.M').click();

    // 4. Seleciona a cor "Red" - AQUI ESTÁ A CORREÇÃO
    // Use o seletor que você pegar do Selector Playground. Será algo como:
    cy.get('button.variable-item[data-value="Red"]').click();

    // 5. Clique no botão de comprar
    cy.get('.single_add_to_cart_button').should('not.be.disabled').click();

    // 6. Espera a requisição com o alias CORRETO ser completada
    cy.wait('Ingrid Running Jacket'); // Usando o alias renomeado
});


