export const elements = {
    usernameInput: () => cy.get('[data-test="username"]'),
    passwordInput: () => cy.get('[data-test="password"]'),
    loginButton: () => cy.get('#login-button'),
    mensagemErro: () => cy.get('[data-test="error"]')
};