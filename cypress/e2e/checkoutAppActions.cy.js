/// <reference types= "cypress" />

import appActions from '../support/pages/appActions';


describe('Checkout com App Actions', () => {
  it('Deve realizar o fluxo de checkout', () => {
    cy.visit('/')
    appActions.adicionarProdutoNoCarrinho('Augusta Pullover Jacket', 'L', 'Orange', 1);

  });
});
