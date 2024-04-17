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

      //Livro 1
      home.searchBar().click();
      home.searchBar().type("crepúsculo");
      home.magnifierButton().click();

      product.product01().should('have.text' , "Crepúsculo: (Série Crepúsculo): 1");
      product.product01().click();
      product.addCartButton().click()

      //Livro 2
      home.searchBar().click();
      home.searchBar().type("lua nova");
      home.magnifierButton().click();

      product.product02().should('have.text' , "Lua nova: (Série Crepúsculo): 2");
      product.product02().click();
      product.addCartButton().click()

      //Livro 3
      home.searchBar().click();
      home.searchBar().type("eclipse");
      home.magnifierButton().click();

      product.product03().should('have.text' , "Eclipse: (Série Crepúsculo): 3");
      product.product03().click();
      product.addCartButton().click()

      //Livro 4
      home.searchBar().click();
      home.searchBar().type("amanhecer");
      home.magnifierButton().click();

      product.product04().should('have.text' , "Amanhecer (Crepúsculo Livro 4)");
      product.product04().click();
      product.secondOption().click();
      product.addCartButton().click()

      //Livro 5
      home.searchBar().click();
      home.searchBar().type("sol da meia noite");
      home.magnifierButton().click();

      product.product05().should('have.text' , "Sol da meia-noite: (Midnight Sun) - Série Crepúsculo: 5");
      product.product05().click();
      product.addCartButton().click()

      cart.goToCartButton().click();
      cart.closeOrderButton().click();

      login.loginText().should('have.text', '\n            Fazer login\n          ');
    });
  });