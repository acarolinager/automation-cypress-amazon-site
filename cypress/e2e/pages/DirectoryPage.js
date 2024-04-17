class DirectoryPage {
  searchBar() {
    return cy.get('.jNIlkd');
  }

  magnifierButton() {
    return cy.get('.hRzxkQ > .ScCoreButton-sc-ocjdkq-0'); 
  }

  searchResults() {
    return cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > .fMQokC > .hxGXwG > .fRWndA > :nth-child(1) > .cVmNmw > .CoreText-sc-1txzju1-0 > .ScCoreLink-sc-16kq0mq-0');
  }
  gameCategory(){
    return cy.get(':nth-child(2) > :nth-child(1) > .kEZcIh > :nth-child(2) > .fRWndA > :nth-child(1) > .Layout-sc-1xcs6mc-0 > .CoreText-sc-1txzju1-0 > .ScCoreLink-sc-16kq0mq-0');
  }

}

export default DirectoryPage;
