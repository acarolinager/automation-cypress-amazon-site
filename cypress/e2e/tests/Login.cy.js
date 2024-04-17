/// <reference types="Cypress"/>

import HomePage from "../pages/HomePage";
import CartPage from "../pages/CartPage";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

describe("Amazon Screen Tests", () => {
    const home = new HomePage();
    const cart = new CartPage();
    const login = new LoginPage();
    const product = new ProductPage();
  
    beforeEach(() => {
      cy.visit("https://www.amazon.com.br/");

      cy.viewport(Cypress.env("desktop"));
    });
  
    it("[Desktop] Verify page structure", () => {
      cy.viewport(Cypress.env("desktop"));

      home.loginButton().click(); 
      login.createAccountButton().click();

      login.inputName().click();
      login.sendButton().click();
      login.errorInputNameInBlank().should('have.text' , '\n  Insira seu nome\n');
      login.errorInputEmailInBlank().should('have.text' , '\n  Digite seu e-mail ou número de telefone celular\n');
      login.errorInputPasswordInBlank().should('have.text' , '\n  Mínimo de 6 caracteres necessários\n');

      login.inputName().click();
      login.inputName().type("@test");

      login.inputEmail().click();
      login.inputEmail().type("%1234%");
      
      login.inputPassword().click();
      login.inputPassword().type("123");

      login.inputConfirmationPassword().click();
      login.inputConfirmationPassword().type("12");

      login.sendButton().click();

      login.errorInputEmail().should('have.text' , '\n  Endereço de e-mail ou número de telefone celular errado ou inválido. Corrija e tente novamente.\n');
      login.errorInputPassword().should('have.text' , '\n  Mínimo de 6 caracteres necessários\n');
      login.errorInputConfirmPassword().should('have.text' , '\n  As senhas não são iguais\n');
    });
  });