/// <reference types= "cypress" />
import { generateUser } from '../support/pages/factory';
const { homePage } = require("../support/pages/home.page")

describe('teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });


  it('Deve cadastrar um novo usario na loja ebac', () => {

    const user = generateUser();
    homePage.openMenu('Account')
    cy.contains('Sign up').click();


    cy.get('[data-testid="firstName"]').type(user.firstName);
    cy.get('[data-testid="lastName"]').type(user.lastName);
    cy.get('[data-testid="phone"]').type(user.phoneNumber);
    cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]').type(user.email);
    cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]').type(user.password);
    cy.get('[data-testid="repassword"]').type(user.passwordConfirmation);
    cy.get('[data-testid="create"]').click();
      homePage.openMenu('Account')
  });


})


