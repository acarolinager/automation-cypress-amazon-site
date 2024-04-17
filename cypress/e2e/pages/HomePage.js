class HomePage {
  searchButton() {
    return cy.get('.eLnISm > .CoreText-sc-1txzju1-0');
  }

  gameNameButton(){
    return cy.get(':nth-child(2) > :nth-child(1) > .kEZcIh > :nth-child(2) > .fRWndA > :nth-child(1) > .Layout-sc-1xcs6mc-0 > .CoreText-sc-1txzju1-0 > .ScCoreLink-sc-16kq0mq-0');
  }
}

export default HomePage;
