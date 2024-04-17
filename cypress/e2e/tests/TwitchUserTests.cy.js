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

  it("[Desktop] Verify page structure", () => {
    cy.viewport(Cypress.env("desktop"));
    home.searchButton().click();
    directory.searchBar().type("Alanzoka");
    directory.magnifierButton().click();
    directory.searchResults().click();
    streamer.streamerName().should('have.text' , 'alanzoka');
  });
});