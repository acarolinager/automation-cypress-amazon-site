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
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
      
      cy.visit("https://www.amazon.com.br/");

      cy.viewport(Cypress.env("desktop"));
    });
  
    it("[Desktop] Verify page structure", () => {
      cy.viewport(Cypress.env("desktop"));

      home.searchBar().click();
      home.searchBar().type("crepúsculo");
      home.magnifierButton().click();

      product.product01().should('have.text' , "Crepúsculo: (Série Crepúsculo): 1");
      product.product01().click();

      product.descriptionProductArea().click();
      product.descriptionProductArea().should('have.text' , ' Descrição do produto ');

      product.customerReviewArea().click();
      product.customerReviewArea().should('have.text', 'Avaliações de clientes');
    });
  });