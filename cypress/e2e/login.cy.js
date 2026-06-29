import login from "../pages/login"
import inventory from "../pages/inventory"

describe('Login - SauceDemo', () =>{

    beforeEach(() => {
        login.visitarPagina()
    })

    it('Realizar login com sucesso', ()=>{
        //login.login(Cypress.env('username'), Cypress.env('password'))
        login.login('standard_user', 'secret_sauce')
        cy.url().should('include', '/inventory.html')
        inventory.logo().should('have.text', 'Swag Labs');
        cy.screenshot('login com sucesso')
    })

    it('Realizar tentativa de login com username vazio e senha válida', ()=>{
        login.login('', 'secret_sauce')
        login.checkError('Epic sadface: Username is required')
        cy.screenshot('tentativa de login com username vazio e senha válida')
    })

    it('Realizar tentativa de login com username válido e senha vazia', ()=>{
        login.login('standard_user', '')
        login.checkError('Epic sadface: Password is required')
        cy.screenshot('tentativa de login com username válido e senha vazia')
    })

    it('Realizar tentativa de login com username vazio e senha vazia', ()=>{
        login.login('', '')
        login.checkError('Epic sadface: Username is required')
        cy.screenshot('tentativa de login com username vazio e senha vazia')
    })

    it('Realizar tentativa de login com username inválido e senha inválida', ()=>{
        login.login('invalid_user', 'invalid_password')
        login.checkError('Epic sadface: Username and password do not match any user in this service')
        cy.screenshot('tentativa de login com username inválido e senha inválida')
    })

    it('Realizar tentativa de login com username válido e senha inválida', ()=>{
        login.login('standard_user', 'invalid_password')
        login.checkError('Epic sadface: Username and password do not match any user in this service')
        cy.screenshot('tentativa de login com username válido e senha inválida')
    })

    it('Realizar tentativa de login com username inválido e senha válida', ()=>{
        login.login('invalid_user', 'secret_sauce')
        login.checkError('Epic sadface: Username and password do not match any user in this service')
        cy.screenshot('tentativa de login com username inválido e senha válida')
    })
})
