# Projeto de Automação de Testes com Cypress

Este projeto nasceu como uma forma prática de aplicar e demonstrar os conhecimentos que venho adquirindo em automação de testes.

A ideia é mostrar, de forma simples e objetiva, como estou estudando conceitos importantes como testes end-to-end, organização de código, estrutura de projetos e boas práticas em QA.

## O que este projeto representa

Além de automatizar testes, este repositório também representa meu processo de aprendizagem em:

- automação de testes web
- uso do Cypress
- organização com Page Object Model
- criação de cenários de teste realistas
- geração de relatórios e evidências
- integração contínua com GitHub Actions

## O que está sendo testado

Os cenários automatizados cobrem fluxos importantes da aplicação SauceDemo, como:

- login com sucesso e com falhas
- adição e remoção de produtos no carrinho
- validação do fluxo de checkout
- verificação de mensagens de erro
- validação de regras de negócio básicas

## Tecnologias e conceitos aplicados

- Cypress: automação de testes end-to-end
- JavaScript: linguagem utilizada para escrever os testes
- Page Object Model: organização dos elementos e ações em classes separadas
- dotenv: uso de variáveis de ambiente
- relatórios com Mochawesome e JUnit
- GitHub Actions: execução de testes em pipeline

## Estrutura do projeto

- cypress/e2e: cenários de teste
- cypress/pages: classes com a lógica de interação com a interface
- cypress/support: comandos personalizados e suporte geral
- cypress/reports: relatórios gerados
- config-dev.js e config-qa.js: configurações por ambiente
- .github/workflows: pipeline de CI

## Como executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Abrir o Cypress

```bash
npm run cypress:open:dev
```

### 3. Executar os testes no terminal

```bash
npm run cy:run
```

## Scripts úteis

- npm run cy:open → abrir o Cypress
- npm run cy:run → executar os testes
- npm run cy:run:chrome → executar em Chrome
- npm run cy:run:edge → executar em Edge
- npm run cy:run:firefox → executar em Firefox

## Relatórios

Os testes geram relatórios em HTML e XML nas pastas:

- cypress/reports/html
- cypress/reports/junit

## Por que este projeto é importante para mim

Este repositório é uma forma de mostrar meu crescimento nos estudos de automação, reunindo conceitos que venho aprendendo e aplicando em prática.