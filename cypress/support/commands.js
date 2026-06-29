



Cypress.Commands.add('abrirCarrinho', (produto) => {
    cy.get('[data-test="shopping-cart-badge"]').click()
})

Cypress.Commands.add('cadastrarUsuario', (nome, sobrenome, cep) => {
    cy.get('[data-test="firstName"]').clear()
    if (nome) {
      cy.get('[data-test="firstName"]').type(nome)
    }

    cy.get('[data-test="lastName"]').clear()
    if (sobrenome) {
      cy.get('[data-test="lastName"]').type(sobrenome)
    }
  
    cy.get('[data-test="postalCode"]').clear()
    if (cep) {
      cy.get('[data-test="postalCode"]').type(cep)
    }
  
    cy.get('[data-test="continue"]').click()
})
