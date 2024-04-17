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
    });
  });