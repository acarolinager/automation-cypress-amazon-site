class StreamerPage {
  streamerName(){
    return cy.get('.bFVHiS > a > .CoreText-sc-1txzju1-0');
  }

  gameName(){
    return cy.get('.igPudw > .CoreText-sc-1txzju1-0');
  }
}

export default StreamerPage;
