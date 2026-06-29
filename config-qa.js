const { defineConfig } = require("cypress");
const baseConfig = require("./cypress.config");

const e2e = {
    baseUrl: 'https://www.saucedemoqa.com',
    env:{
        username: 'standard_user',
        password: 'secret_sauce'
    }
}

module.exports = defineConfig({
    ...baseConfig,
    e2e
})