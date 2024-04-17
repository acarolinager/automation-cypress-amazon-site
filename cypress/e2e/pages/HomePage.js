class HomePage {
    searchBar(){
      return cy.get('#twotabsearchtextbox');
    }

    magnifierButton(){
      return cy.get('#nav-search-submit-button');
    }

    loginButton(){
      return cy.get('#nav-link-accountList');
    }
}

export default HomePage;