# US-002 - Carrinho de Compras e Checkout

## História de Usuário

**ID:** US-002

**Título:** Realizar compra de produtos

**Como** um cliente autenticado

**Quero** adicionar produtos ao carrinho e concluir uma compra

**Para** adquirir os produtos desejados.

---

# Regras de Negócio

* Apenas usuários autenticados podem adicionar produtos ao carrinho.
* Um usuário pode adicionar um ou mais produtos.
* Um produto adicionado poderá ser removido antes da finalização da compra.
* O checkout exige o preenchimento dos dados pessoais.
* Todos os campos do formulário de checkout são obrigatórios.
* A compra somente poderá ser concluída após o preenchimento correto das informações.

---

# Critérios de Aceite

## CA-001 - Adicionar um produto ao carrinho

**Dado** que o usuário está autenticado

**Quando**

* Clicar em **Add to cart** de um produto

**Então**

* O botão deverá alterar para **Remove**
* O contador do carrinho deverá exibir **1**
* O produto deverá estar presente no carrinho

---

## CA-002 - Remover produto do carrinho

**Dado** que existe um produto no carrinho

**Quando**

* Clicar em **Remove**

**Então**

* O produto deverá ser removido
* O contador do carrinho deverá desaparecer
* O carrinho deverá ficar vazio

---

## CA-003 - Adicionar múltiplos produtos

**Dado** que o usuário está autenticado

**Quando**

* Adicionar dois produtos diferentes ao carrinho

**Então**

* O contador deverá exibir **2**
* Ambos os produtos deverão estar presentes no carrinho

---

## CA-004 - Acessar o carrinho

**Dado** que existe pelo menos um produto no carrinho

**Quando**

* Clicar no ícone do carrinho

**Então**

* O usuário deverá visualizar a página do carrinho
* Todos os produtos adicionados deverão ser exibidos
* O nome e o preço dos produtos deverão ser apresentados corretamente

---

## CA-005 - Iniciar Checkout

**Dado** que existe um produto no carrinho

**Quando**

* Clicar em **Checkout**

**Então**

* O usuário deverá ser direcionado para a página **Checkout: Your Information**

---

## CA-006 - Validação do campo First Name

**Dado** que o usuário está na tela de Checkout

**Quando**

* Deixar o campo **First Name** vazio
* Preencher os demais campos
* Clicar em **Continue**

**Então**

* O sistema deverá exibir a mensagem:

```text
Error: First Name is required
```

---

## CA-007 - Validação do campo Last Name

**Dado** que o usuário está na tela de Checkout

**Quando**

* Deixar o campo **Last Name** vazio
* Preencher os demais campos
* Clicar em **Continue**

**Então**

* O sistema deverá exibir a mensagem:

```text
Error: Last Name is required
```

---

## CA-008 - Validação do campo Postal Code

**Dado** que o usuário está na tela de Checkout

**Quando**

* Deixar o campo **Postal Code** vazio
* Preencher os demais campos
* Clicar em **Continue**

**Então**

* O sistema deverá exibir a mensagem:

```text
Error: Postal Code is required
```

---

## CA-009 - Prosseguir para o resumo da compra

**Dado** que todos os campos obrigatórios foram preenchidos

**Quando**

* Clicar em **Continue**

**Então**

* O usuário deverá acessar a página **Checkout Overview**
* Todos os produtos adicionados deverão ser exibidos
* O subtotal deverá ser apresentado
* O imposto deverá ser apresentado
* O valor total deverá ser apresentado

---

## CA-010 - Finalizar compra

**Dado** que o usuário está na tela de resumo da compra

**Quando**

* Clicar em **Finish**

**Então**

* A compra deverá ser concluída com sucesso
* A mensagem abaixo deverá ser exibida:

```text
Thank you for your order!
```

* O botão **Back Home** deverá estar disponível

---

## CA-011 - Retornar para a Home

**Dado** que a compra foi finalizada

**Quando**

* Clicar em **Back Home**

**Então**

* O usuário deverá retornar para a tela de produtos

---

# Casos de Teste Automatizados

| ID     | Cenário                          | Status     |
| ------ | -------------------------------- | ---------- |
| CT-001 | Adicionar um produto ao carrinho | ✅ Automatizado |
| CT-002 | Remover produto do carrinho      | ✅ Automatizado |
| CT-003 | Adicionar múltiplos produtos     | ✅ Automatizado |
| CT-004 | Validar carrinho                 | ✅ Automatizado |
| CT-005 | Iniciar checkout                 | ✅ Automatizado |
| CT-006 | Validar First Name obrigatório   | ✅ Automatizado |
| CT-007 | Validar Last Name obrigatório    | ✅ Automatizado |
| CT-008 | Validar Postal Code obrigatório  | ✅ Automatizado |
| CT-009 | Prosseguir para o resumo         | ✅ Automatizado |
| CT-010 | Finalizar compra                 | ✅ Automatizado |
| CT-011 | Retornar para Home               | ⏳ Pendente |

---

# Desafios Extras (Não obrigatórios)

## Nível 1

* Validar o nome do produto adicionado ao carrinho.
* Validar o preço do produto no carrinho.
* Validar o botão **Remove** após adicionar o produto.

---

## Nível 2

* Validar que o subtotal corresponde à soma dos produtos adicionados.
* Validar que o valor total é igual ao subtotal + imposto.

---

## Nível 3

* Automatizar utilizando comandos customizados.
* Criar comandos como:

  * `cy.addProductToCart()`
  * `cy.removeProductFromCart()`
  * `cy.checkout()`
  * `cy.fillCheckout()`

---

# Objetivo Técnico

Durante a implementação desta User Story, espera-se aplicar:

* `beforeEach()`
* Custom Commands
* Organização dos testes por funcionalidade
* Reutilização de código
* Boas práticas de automação
* Assertions com `should()`
* Navegação entre páginas
* Independência entre testes

---

# Critério de Conclusão

A User Story será considerada concluída quando:

* Todos os critérios de aceite estiverem automatizados.
* Todos os testes executarem com sucesso.
* Não houver duplicação desnecessária de código.
* Os comandos customizados estiverem sendo reutilizados sempre que aplicável.
* O projeto permanecer organizado e de fácil manutenção.
