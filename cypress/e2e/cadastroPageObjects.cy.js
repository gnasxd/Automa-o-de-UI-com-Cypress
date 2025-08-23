/// <reference types= "cypress" />

const cadastroPage = require("../support/pages/cadastro.page");
const { homePage } = require("../support/pages/home.page");
const emailDinamico = `user${Date.now()}@exemplo.com`;
const {nome, sobrenome, telefone, senha, senhaDenovo} = require("../fixtures/example.json")

describe('teste de Autenticação', () => {

  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });


  it('Deve cadastrar um novo usario na loja ebac', () => {
    homePage.openMenu('Account')
    cadastroPage.cadastro(nome, sobrenome, telefone, emailDinamico, senha, senhaDenovo)
    homePage.openMenu('Account')
  })
})