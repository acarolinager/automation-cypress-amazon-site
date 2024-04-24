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

    const urlBook01 = "https://www.amazon.com.br/Crep%C3%BAsculo-Stephenie-Meyer/dp/8598078301/ref=sr_1_1?crid=2VB82IPCC4912&dib=eyJ2IjoiMSJ9.-8at8f3n4j1s4z0-1CalkI6O6jZzbYd9Rwuq1-qDa_CsMil9801urq_OMpKhpoNzsaeIYuLuRWaqss_t_SvZNgxJRi0vLGdukzs7CVXuB7ef2zLeQreKBZJ9B6ZSn65u55YT3eTgOjnk63NhRT0R7LUC9LBlbkZ4Eg1mLbZ09NMDwws_s_XZz6AV6zmHc0v440Kl8458gHRWD_vvaLzvN6pO1U6xxHaHj9y5KkIPq4oD2WQrVPiOLhHqfVe1HC2Td1x2lx_uCrZCUv6JFowkVqbluueVJeTV1rNtwyjEnys.kG9aSEnV5mDYtAy8M3TmOOdtHGXY4HHCcBmvxyEFcAc&dib_tag=se&keywords=crepusculo&qid=1713389396&sprefix=crepus%2Caps%2C301&sr=8-1";
    const urlBook02 = "https://www.amazon.com.br/Lua-Nova-Stephenie-Meyer/dp/8598078352/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=351E0P02ANMEP&dib=eyJ2IjoiMSJ9.PWyqoWpvl7YvtZvMOq-Jsm6VRzFogPrx7F-8aSslDyjNv0nrOPUhUb-tmMPA60jWJyoXN2TTo1beX-z_4Mi4PFDAOxchftw8-icpHOub_TwN0h5OBbUQvlJTDx2yrSASDmRzafpm-xbUuBd9KzV7-UHLU68RYDsCR9GBW3ghncKpKKtTI71WGEE1JI6Y6nxJUfOIUmKV8xIi2O3RY29WJTSO5V_YssI2Caz13W-I_qAOP_XIQn2XbZfNzbSV2gF0L2qrCsxdHj-NjnMBWujRbPJN-gR0QWJms5ZRewzkH-o.5c8u_PC_V8rCV3vIoEY8ENfPVbGHQnTxJbUhLwMQZ5M&dib_tag=se&keywords=lua+nova&qid=1713389655&sprefix=lua+nova%2Caps%2C331&sr=8-1";
    const urlBook03 = "https://www.amazon.com.br/Eclipse-Stephenie-Meyer/dp/8598078417/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30UP76T32NQLP&dib=eyJ2IjoiMSJ9.aOLibjqrkEao8BRM1UUDe52jjBAgTPxRuPJZmazUKNmUiR2xfnCyPztOvNBMjKq96qJcGf_5FGS6N9qRgTeVqLzyQ6Zasi7s0F7xHO3TQyGstLl2vLvGKuPWgLO-OQfLqLCQA1lAHoOYR8-6rp5Uyc8HK25gwLsc7lBAny0ElHa7NOyGubVJ_ZDfbtD8o3wA7QunTOEgCR_vEMxAvTm39B-sWwgKIi4pFjNjNoNQMeAzvke5Q5GII1Bmzp_KXiuy6R-LgwFE4rp2BJI0Sb0TRClek_l_50Uw3FhREGOZYow.VehvpeE46p4tM6AZdZ4YcOpgml0JMJMoqvuwZ_D4E0s&dib_tag=se&keywords=eclipse&qid=1713389688&sprefix=eclip%2Caps%2C269&sr=8-1";
    const urlBook04 = "https://www.amazon.com.br/Amanhecer-Crep%C3%BAsculo-Livro-Stephenie-Meyer-ebook/dp/B009M8CY7S/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1HA8I1BXUY545&dib=eyJ2IjoiMSJ9.b8Nz1gYGpbtv4gyLO1lbt2sR6nWTFXr6Msfm_91RoaGiMPV_YwhHnPxWMdZqGjPdD_udhEoNgYyOLo5ejXEgOH6lOjwvqlMqhgBOEMYqDaP_NDVe9xUKWGGmnpyzDcVN32HdKQMFuex7X3lSDBH2AsWnlbBqQ1sUjBIv4pAEO7UzB13qAVmXIs6M7idhp6BDxfVQOazqnoqeBNgBLtKvkyeqTSNC0-ONOFlmvB2pmt1OeXW3QV8NvoLwoCEC2sW5bruqwuiP2k-HQKeXfnab1ECW8u2i4grzxKGcuA40Gl4.YNFq7bSKrgdUPduNGX2a-Lr75ONd8lHxAkZCPKm3hCs&dib_tag=se&keywords=amanhecer&qid=1713389738&sprefix=amanhece%2Caps%2C279&sr=8-1";
    const urlBook05 = "https://www.amazon.com.br/Sol-meia-noite-Midnight-S%C3%A9rie-Crep%C3%BAsculo/dp/6555600292/ref=sr_1_1?crid=1NXA1WPDDEFCM&dib=eyJ2IjoiMSJ9.QyEphNv5OcvfyiBjJM6xn5Gq7TMP_jBLpS24kdP8oD2eTlT4KW93T32CC6dzEwONf4eM5ZlilS24IW_I6n5Yg6ZumAid5VXsazullxm5t0Y3zCPibHbj9AB_zJ6-K7A6Q8sjDMGdYi4tsXE7GlgS6D-G9SjesVqssfx9IuJs2XlPaanoqgcK0n-lo5NvgxbvBQgdfF7BKIZD34W8Rlzj5Eeg2OpyAyXoxDfmnpplLYY6qpvUifB9YRLXQP_gCpiElgY1H5aH_yzQvZo9ARrXwrAbRtr7Ncnz9WIU7GznO1w.P57_W_h4HsYObtSs8Bpmrj85bsEQzt23F6cvC4teBsc&dib_tag=se&keywords=sol+da+meia+noite&qid=1713389803&sprefix=sol+da+m%2Caps%2C276&sr=8-1";
  
    beforeEach(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();

      cy.visit("https://www.amazon.com.br/");

      cy.viewport(Cypress.env("desktop"));
    });
  
    it.only("[Desktop] Verify page structure", () => {
      cy.viewport(Cypress.env("desktop"));

      //Livro 1
      cy.visit(urlBook01);
      cy.wait(1000);
      product.searchBook01();

      //Livro 2
      cy.visit(urlBook02);
      cy.wait(1000);
      product.searchBook02();

      //Livro 3
      cy.visit(urlBook03);
      cy.wait(1000);
      product.searchBook03();

      //Livro 4
      cy.visit(urlBook04);
      cy.wait(1000);
      product.searchBook04();

      //Livro 5
      cy.visit(urlBook05);
      cy.wait(1000);
      product.searchBook05();

      cart.goToCartButton().click();
      cart.closeOrderButton().click();

      login.loginText().should('have.text', '\n            Fazer login\n          ');

      // //Livro 1
      // home.searchBar().click();
      // home.searchBar().type("crepúsculo");
      // home.magnifierButton().click();

      // product.product01().should('have.text' , "Crepúsculo: (Série Crepúsculo): 1");
      // product.product01().click();
      // product.addCartButton().click();

      // //Livro 2
      // home.searchBar().click();
      // home.searchBar().type("lua nova");
      // home.magnifierButton().click();

      // product.product02().should('have.text' , "Lua nova: (Série Crepúsculo): 2");
      // product.product02().click();
      // product.addCartButton().click()

      // //Livro 3
      // home.searchBar().click();
      // home.searchBar().type("eclipse");
      // home.magnifierButton().click();

      // product.product03().should('have.text' , "Eclipse: (Série Crepúsculo): 3");
      // product.product03().click();
      // product.addCartButton().click()

      // //Livro 4
      // home.searchBar().click();
      // home.searchBar().type("amanhecer");
      // home.magnifierButton().click();

      // product.product04().should('have.text' , "Amanhecer (Crepúsculo Livro 4)");
      // product.product04().click();
      // product.secondOption().click();
      // product.addCartButton().click()

      // //Livro 5
      // home.searchBar().click();
      // home.searchBar().type("sol da meia noite");
      // home.magnifierButton().click();

      // product.product05().should('have.text' , "Sol da meia-noite: (Midnight Sun) - Série Crepúsculo: 5");
      // product.product05().click();
      // product.addCartButton().click()

      // cart.goToCartButton().click();
      // cart.closeOrderButton().click();

      // login.loginText().should('have.text', '\n            Fazer login\n          ');
    });
  });