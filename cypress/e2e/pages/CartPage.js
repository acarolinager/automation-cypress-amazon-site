class CartPage {
    goToCartButton(){
      return cy.get('#sw-gtc > .a-button-inner > .a-button-text');
    }

    closeOrderButton(){
      return cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input');
    }
}

export default CartPage;