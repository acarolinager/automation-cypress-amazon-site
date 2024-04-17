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
    cy.visit("https://www.twitch.tv/login?popup=true");

    cy.viewport(Cypress.env("desktop"));
    
  });

  //pesquisa por usuário específico
  it("[Desktop] Verify page structure", () => {
    cy.viewport(Cypress.env("desktop"));

    signIn.usernameField().type("    ");
    signIn.passwordField().type("        ");
    signIn.enterButton().click();
    signIn.modalLoginError().should('have.text' , 'Não há suporte para seu navegador no momento. Utilize um navegador recomendado ou aprenda mais aqui.');

    signIn.registrationButton().click(); 
    signIn.signupUsername().type("     ");
    signIn.errorCaractererNameModal().should('have.text' , '*Nomes de usuário devem conter apenas caracteres alfanuméricos.');
    signIn.passwordField().type("    ");
    signIn.errorCaractererPasswordModal().should('have.text' , '*As senhas devem ter pelo menos 8 caracteres.');
    signIn.dateField().type("35");
    signIn.monthField().select('Março');
    signIn.yearField().type("2030");
    signIn.errorDateModal().should('have.text' , '*Insira uma data válida.');
    
    signIn.phoneInput().type("000000000000000");
    signIn.finalRegistrationButton().should('have.css' , 'background-color' , 'rgba(83, 83, 95, 0.38)');
  });

});