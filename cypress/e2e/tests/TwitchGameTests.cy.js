/// <reference types="Cypress"/>

import HomePage from "../pages/HomePage";
import SignInPage from "../pages/SignInPage";
import DirectoryPage from "../pages/DirectoryPage";
import StreamerPage from "../pages/StreamerPage";

describe("Twitch Screen Tests", () => {

  const home = new HomePage();
  const signIn = new SignInPage();
  const directory = new DirectoryPage();
  const streamer = new StreamerPage ();

  beforeEach(() => {
    cy.visit("https://www.twitch.tv/");

    cy.viewport(Cypress.env("desktop"));
    
  });

  //pesquisa por game específico
  it("[Desktop] Verify page structure", () => {
    cy.viewport(Cypress.env("desktop"));
    home.searchButton().click();
    directory.searchBar().type('Stardew Valley');
    directory.magnifierButton().click();
    directory.gameCategory().click();
    streamer.gameName().should('have.text' , 'Stardew Valley');
  });

});