# US-001 - Login no SauceDemo

## História de Usuário

**ID:** US-001

**Título:** Autenticação de usuário

**Como** um cliente da loja

**Quero** realizar login utilizando minhas credenciais

**Para** acessar o catálogo de produtos.

---

# Regras de Negócio

* O usuário deve informar **Username** e **Password**.
* Ambos os campos são obrigatórios.
* Apenas credenciais válidas permitem acesso ao sistema.
* Em caso de erro, uma mensagem deve ser exibida ao usuário.

---

# Critérios de Aceite

## CA-001 - Login com sucesso

**Dado** que o usuário está na tela de login

**Quando** informar:

* Username válido
* Password válida

**E** clicar em **Login**

**Então**

* O usuário deverá ser redirecionado para a página de produtos (`/inventory.html`);
* O logo **Swag Labs** deverá estar visível;
* O usuário deverá estar autenticado.

---

## CA-002 - Username vazio

**Dado** que o usuário está na tela de login

**Quando**

* Não informar o Username;
* Informar uma Password válida;
* Clicar em **Login**.

**Então**

* O sistema deverá exibir a mensagem:

```
Epic sadface: Username is required
```

---

## CA-003 - Password vazia

**Dado** que o usuário está na tela de login

**Quando**

* Informar um Username válido;
* Não informar a Password;
* Clicar em **Login**.

**Então**

* O sistema deverá exibir a mensagem:

```
Epic sadface: Password is required
```

---

## CA-004 - Username e Password vazios

**Dado** que o usuário está na tela de login

**Quando**

* Não informar Username;
* Não informar Password;
* Clicar em **Login**.

**Então**

* O sistema deverá exibir a mensagem:

```
Epic sadface: Username is required
```

---

## CA-005 - Username inválido e Password inválida

**Dado** que o usuário está na tela de login

**Quando**

* Informar Username inválido;
* Informar Password inválida;
* Clicar em **Login**.

**Então**

* O sistema deverá exibir a mensagem:

```
Epic sadface: Username and password do not match any user in this service
```

---

## CA-006 - Username válido e Password inválida

**Dado** que o usuário está na tela de login

**Quando**

* Informar Username válido;
* Informar Password inválida;
* Clicar em **Login**.

**Então**

* O sistema deverá exibir a mensagem:

```
Epic sadface: Username and password do not match any user in this service
```

---

## CA-007 - Username inválido e Password válida

**Dado** que o usuário está na tela de login

**Quando**

* Informar Username inválido;
* Informar Password válida;
* Clicar em **Login**.

**Então**

* O sistema deverá exibir a mensagem:

```
Epic sadface: Username and password do not match any user in this service

# Casos de Teste Automatizados

| ID     | Cenário                                           | Status            |
| -------| ------------------------------------------------- | ----------------- |
| CT-002 | Login com username vazio e senha válida           | ✅ Automatizado |
| CT-001 | Realizar login com sucesso                        | ✅ Automatizado |
| CT-003 | Login com username válido e senha vazia           | ✅ Automatizado |
| CT-004 | Login com username vazio e senha vazia            | ✅ Automatizado |
| CT-005 | Login com username inválido e senha inválida      | ✅ Automatizado |
| CT-006 | Login com username válido e senha inválida        | ✅ Automatizado |
| CT-007 | Login com username inválido e senha válida        | ✅ Automatizado |