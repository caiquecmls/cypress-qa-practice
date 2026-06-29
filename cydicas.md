# 🚀 Cypress - Principais Comandos

Este guia reúne os comandos mais utilizados no Cypress para automação de testes E2E.

---

# 🌐 Navegação

## cy.visit()

Acessa uma página.

```javascript
cy.visit('https://site.com')
```

---

## cy.reload()

Recarrega a página atual.

```javascript
cy.reload()
```

---

## cy.go()

Navega entre páginas do histórico.

```javascript
cy.go('back')
cy.go('forward')
```

---

# 🔎 Encontrando Elementos

## cy.get()

Busca um elemento utilizando um seletor CSS.

```javascript
cy.get('#email')
cy.get('.button')
cy.get('[data-cy="login"]')
```

---

## cy.contains()

Encontra um elemento pelo texto.

```javascript
cy.contains('Entrar')
```

Também pode clicar diretamente.

```javascript
cy.contains('Entrar').click()
```

---

## .find()

Busca elementos filhos.

```javascript
cy.get('.card').find('button')
```

---

## .within()

Limita a busca aos elementos dentro de um container.

```javascript
cy.get('form').within(() => {
    cy.get('input').type('Caique')
})
```

---

# ⌨️ Interação

## .type()

Digita em um campo.

```javascript
cy.get('#email').type('teste@email.com')
```

---

## .clear()

Limpa o conteúdo de um input.

```javascript
cy.get('#email').clear()
```

---

## .click()

Realiza um clique.

```javascript
cy.get('button').click()
```

---

## .dblclick()

Realiza um duplo clique.

```javascript
cy.get('button').dblclick()
```

---

## .rightclick()

Realiza clique com o botão direito.

```javascript
cy.get('.menu').rightclick()
```

---

## .check()

Marca um checkbox ou radio button.

```javascript
cy.get('#aceitar').check()
```

---

## .uncheck()

Desmarca um checkbox.

```javascript
cy.get('#aceitar').uncheck()
```

---

## .select()

Seleciona uma opção de um select.

```javascript
cy.get('select').select('Brasil')
```

---

## .selectFile()

Realiza upload de arquivo.

```javascript
cy.get('input[type=file]')
.selectFile('cypress/fixtures/foto.png')
```

---

# ✅ Validações

## .should()

Realiza validações.

### Elemento existe

```javascript
.should('exist')
```

### Elemento não existe

```javascript
.should('not.exist')
```

### Está visível

```javascript
.should('be.visible')
```

### Não está visível

```javascript
.should('not.be.visible')
```

### Está habilitado

```javascript
.should('be.enabled')
```

### Está desabilitado

```javascript
.should('be.disabled')
```

### Contém texto

```javascript
.should('contain', 'Bem-vindo')
```

### Texto exato

```javascript
.should('have.text', 'Bem-vindo')
```

### Possui valor

```javascript
.should('have.value', 'admin')
```

### Possui classe

```javascript
.should('have.class', 'active')
```

### Possui atributo

```javascript
.should('have.attr', 'href')
```

---

# 🌍 URL e Página

## cy.url()

Obtém a URL atual.

```javascript
cy.url()
.should('include', '/dashboard')
```

---

## cy.title()

Obtém o título da página.

```javascript
cy.title()
.should('eq', 'Dashboard')
```

---

# ⏳ Esperas

## cy.wait()

Espera um tempo ou uma requisição.

Evite:

```javascript
cy.wait(5000)
```

Prefira:

```javascript
cy.wait('@login')
```

---

# 🌐 API

## cy.intercept()

Intercepta requisições HTTP.

```javascript
cy.intercept(
    'POST',
    '/login'
).as('login')
```

Depois espere a requisição.

```javascript
cy.wait('@login')
```

---

## Mock de API

```javascript
cy.intercept(
    'GET',
    '/usuarios',
    {
        fixture: 'usuarios.json'
    }
)
```

---

# 📂 Fixtures

## cy.fixture()

Lê arquivos da pasta fixtures.

```javascript
cy.fixture('usuario')
```

---

# 🍪 Cookies

## cy.getCookie()

Obtém um cookie.

```javascript
cy.getCookie('token')
```

---

## cy.setCookie()

Cria um cookie.

```javascript
cy.setCookie('token', '123')
```

---

## cy.clearCookies()

Remove todos os cookies.

```javascript
cy.clearCookies()
```

---

# 🖥️ Local Storage

```javascript
cy.window().then((win) => {
    win.localStorage.getItem('token')
})
```

---

# 📋 Alias

## .as()

Cria um alias.

```javascript
cy.get('#email').as('campoEmail')
```

Uso:

```javascript
cy.get('@campoEmail')
```

---

# 🔁 Loops

## .each()

Percorre todos os elementos encontrados.

```javascript
cy.get('li').each(($el) => {

})
```

---

# ⚙️ Manipulação

## .then()

Permite manipular valores retornados.

```javascript
cy.get('.titulo')
.then(($el) => {

    const texto = $el.text()

})
```

---

## .invoke()

Executa métodos de um elemento.

```javascript
cy.get('.titulo')
.invoke('text')
```

---

# 🎯 Eventos

## .focus()

Coloca foco no elemento.

```javascript
.focus()
```

---

## .blur()

Remove o foco.

```javascript
.blur()
```

---

## .trigger()

Dispara eventos manualmente.

```javascript
.trigger('mouseover')
```

ou

```javascript
.trigger('change')
```

---

# 📜 Scroll

## .scrollIntoView()

Move a tela até o elemento.

```javascript
cy.get('.produto')
.scrollIntoView()
```

---

## cy.scrollTo()

Move a tela.

```javascript
cy.scrollTo('bottom')

cy.scrollTo('top')
```

---

# 📱 Responsividade

## cy.viewport()

Altera o tamanho da tela.

```javascript
cy.viewport(390, 844)
```

ou

```javascript
cy.viewport('iphone-13')
```

---

# 📸 Screenshot

## cy.screenshot()

Captura uma imagem da tela.

```javascript
cy.screenshot()
```

---

# 📝 Logs

## cy.log()

Exibe mensagens no log do Cypress.

```javascript
cy.log('Login realizado com sucesso')
```

---

# ⭐ Comandos Essenciais

Estes são os comandos mais utilizados no dia a dia:

- cy.visit()
- cy.get()
- cy.contains()
- .type()
- .click()
- .should()
- cy.intercept()
- cy.wait()
- cy.fixture()
- cy.url()
- .select()
- .check()
- .each()
- .within()
- .then()
- .invoke()