
import Login from "../pages/login";
import inventory from "../pages/inventory";

describe('Carrinho - SauceDemo', () => {

    beforeEach(() => {
        Login.visitarPagina()
        Login.loginCredencialValida()
    })

    it('Adicionar um produto ao carrinho', () => {
        inventory.adicionarProduto('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
        cy.screenshot('adicionar um produto ao carrinho')   
    })

    it('Remover produto do carrinho', () => {
        inventory.adicionarProduto('sauce-labs-backpack')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart')
        cy.screenshot('remover produto do carrinho')
    })


    it('Adicionar múltiplos produtos', () => {
        inventory.adicionarProduto('sauce-labs-bolt-t-shirt')
        inventory.adicionarProduto('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')
        cy.screenshot('adicionar múltiplos produtos')
    })

    it.only('Validar carrinho', () => {
        inventory.adicionarProduto('sauce-labs-backpack')
        inventory.adicionarProduto('sauce-labs-bolt-t-shirt')
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '2')
        inventory.abrirCarrinho()
        cy.url().should('include', '/cart.html')
        cy.get('[data-test="item-4-title-link"]').should('have.text', 'Sauce Labs Backpack')
        cy.screenshot('validar carrinho')
    })

    it('Iniciar checkout', () => {
        inventory.adicionarProduto('sauce-labs-backpack')
        inventory.abrirCarrinho()
        cy.get('[data-test="item-4-title-link"]').should('have.text', 'Sauce Labs Backpack')
        cy.get('[data-test="checkout"]').click()
        cy.url().should('include', '/checkout-step-one.html')
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Your Information')
        cy.screenshot('iniciar checkout')
    })

    it('Validar First Name obrigatório no checkout', () => {
        cy.adicionarProduto('sauce-labs-backpack')
        cy.abrirCarrinho()
        cy.get('[data-test="checkout"]').click()
        cy.cadastrarUsuario('', 'Silva', '12345')
        cy.get('[data-test="error"]').should('have.text', 'Error: First Name is required')
        cy.screenshot('validar first name obrigatório no checkout')
    })

    it('Validar Last Name obrigatório no checkout', () => {
        cy.adicionarProduto('sauce-labs-backpack')
        cy.abrirCarrinho()
        cy.get('[data-test="checkout"]').click()
        cy.cadastrarUsuario('João', '', '12345')
        cy.get('[data-test="error"]').should('have.text', 'Error: Last Name is required')
        cy.screenshot('validar last name obrigatório no checkout')
    })

    it('Validar Postal Code obrigatório no checkout', () => {
        cy.adicionarProduto('sauce-labs-backpack')
        cy.abrirCarrinho()
        cy.get('[data-test="checkout"]').click()
        cy.cadastrarUsuario('João', 'Silva', '')
        cy.get('[data-test="error"]').should('have.text', 'Error: Postal Code is required')
        cy.screenshot('validar postal code obrigatório no checkout')
    })

    it('Prosseguir para o resumo do pedido', () => {
        cy.adicionarProduto('sauce-labs-backpack')
        cy.abrirCarrinho()
        cy.get('[data-test="checkout"]').click()
        cy.cadastrarUsuario('João', 'Silva', '12345')
        cy.url().should('include', '/checkout-step-two.html')
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Overview')
        cy.screenshot('prosseguir para o resumo do pedido')
    })

    it('Validar resumo do pedido', function () {

        // Captura nome e preço ANTES de qualquer navegação
        cy.get('[data-test="item-4-title-link"]')
            .invoke('text')
            .then((nome) => {
                cy.wrap(nome.trim()).as('nomeProduto')
            });

        cy.get(':nth-child(1) > [data-test="inventory-item-description"] > .pricebar > [data-test="inventory-item-price"]')
            .invoke('text')
            .then((preco) => {
                cy.wrap(preco.trim()).as('precoProduto')
            });

        // Fluxo do usuário
        cy.adicionarProduto('sauce-labs-backpack')
        cy.abrirCarrinho()
        cy.get('[data-test="checkout"]').click()
        cy.cadastrarUsuario('João', 'Silva', '12345')

        cy.url().should('include', '/checkout-step-two.html')

        // Valida preço + regras financeiras
        cy.get('@precoProduto').then((precoProduto) => {

            const preco = parseFloat(precoProduto.replace('$', ''))
            const taxaEsperada = preco * 0.08

            cy.get('[data-test="inventory-item-price"]')
                .invoke('text')
                .then((precoCheckout) => {
                    expect(precoCheckout.trim()).to.eq(precoProduto)
                })

            cy.get('[data-test="subtotal-label"]')
                .invoke('text')
                .then((subtotal) => {
                    expect(subtotal).to.contain(precoProduto)
                })

            cy.get('[data-test="tax-label"]')
                .invoke('text')
                .then((taxaText) => {
                    const taxa = parseFloat(taxaText.replace(/[^0-9.]/g, ''))
                    expect(taxa).to.be.closeTo(taxaEsperada, 0.01)
                })

            cy.get('[data-test="total-label"]')
                .invoke('text')
                .then((totalText) => {
                    const total = parseFloat(totalText.replace(/[^0-9.]/g, ''))
                    const totalEsperado = preco + taxaEsperada
                    expect(total).to.be.closeTo(totalEsperado, 0.01)
                })

        });

        // Validação do nome do produto no checkout
        cy.get('@nomeProduto').then((nome) => {
            cy.get('[data-test="item-4-title-link"] > [data-test="inventory-item-name"]')
                .invoke('text')
                .then((nomeCheckout) => {
                    expect(nomeCheckout.trim()).to.eq(nome)
                })
        });

        cy.get('[data-test="title"]')
            .should('have.text', 'Checkout: Overview')

        cy.screenshot('validar resumo do pedido')
    })

    it('Finalizar pedido', () => {
        cy.adicionarProduto('sauce-labs-backpack')
        cy.abrirCarrinho()
        cy.get('[data-test="checkout"]').click()
        cy.cadastrarUsuario('João', 'Silva', '12345')
        cy.get('[data-test="finish"]').click()
        cy.url().should('include', '/checkout-complete.html')
        cy.get('[data-test="title"]').should('have.text', 'Checkout: Complete!')
        cy.screenshot('finalizar pedido')
    })
})

describe('problem_user - SauceDemo', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/")
    })

    it('Tentativa de remover produto do carrinho', () => {
        cy.login('problem_user', 'secret_sauce')
        cy.adicionarProduto('sauce-labs-backpack')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text', 'Add to cart')
        cy.screenshot('tentativa de remover produto do carrinho')
    })
})