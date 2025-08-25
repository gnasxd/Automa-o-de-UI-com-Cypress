/// <reference types= "cypress" />

class AppActions {
  adicionarProdutoNoCarrinho(produto, tamanho, cor, quantidade) {
    cy.contains(produto).click(); // Nome igual na página!
    cy.get(`.button-variable-item-${tamanho}`).click({ force: true });
    cy.get(`.button-variable-item-${cor}`).click({ force: true });
    cy.get('.input-text.qty').clear().type(quantidade);
    cy.get('.single_add_to_cart_button').click();
}

IrParaCheckout(){

cy.get('.dropdown-toggle > .mini-cart-items').click()

cy.get('.checkout-button').should('be.visible').click()
}
   
  


  }


export default new AppActions();
