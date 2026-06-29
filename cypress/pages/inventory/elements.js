export const elements = {
    logo: () => cy.get('.app_logo'),
    produto: (produto) => cy.get('[data-test="add-to-cart-' + produto + '"]'),
    carrinho: () => cy.get('[data-test="shopping-cart-badge"]')
};