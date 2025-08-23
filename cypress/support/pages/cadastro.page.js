/// <reference types= "cypress" />


class signUpPage {
    get #signUp() {return cy.get('[data-testid="signUp"] > .css-146c3p1')}
    get #firstName() { return cy.get('[data-testid="firstName"]') }
    get #lastName() { return cy.get('[data-testid="lastName"]') }
    get #phone() { return cy.get('[data-testid="phone"]') }
    get #email() { return cy.get(':nth-child(7) > .css-175oi2r > [data-testid="email"]') }
    get #password() { return cy.get(':nth-child(8) > .css-175oi2r > [data-testid="password"]') }
    get #repassword() { return cy.get('[data-testid="repassword"]') }
    get #create() { return cy.get('[data-testid="create"]') }

    cadastro(nome, sobrenome, telefone, email,senha, senhaDenovo){
        this.#signUp.click()
        this.#firstName.type(nome)
        this.#lastName.type(sobrenome)
        this.#phone.type(telefone)
        this.#email.type(email)
        this.#password.type(senha)
        this.#repassword.type(senhaDenovo)
        this.#create.click()
    }
}

module.exports = new signUpPage();