import { elements } from "./elements";

class Login {
    
    usernameInput(){
        return elements.usernameInput();
    }

    passwordInput(){
        return elements.passwordInput();
    }

    loginButton(){
        return elements.loginButton();
    }

    typeUsername(username) {
        this.usernameInput().type(username);
    }

    typePassword(password) {
        this.passwordInput().type(password);
    } 

    clickLoginButton() {
        this.loginButton().click();
    }

    visitarPagina() {
        cy.visit('https://www.saucedemo.com/');
    }

    login(username, password) {
        this.usernameInput().clear();

        if (username) {
            this.usernameInput().type(username);
        }

        this.passwordInput().clear();

        if (password) {
            this.passwordInput().type(password);
        }

        this.loginButton().click();
    }

    checkError(mensagem) {
        cy.get('[data-test="error"]').should('be.visible').and('contain', mensagem);
    }

    loginCredencialValida() {
        this.typeUsername('standard_user');
        this.typePassword('secret_sauce');
        this.clickLoginButton();
    }
}

export default new Login(); 