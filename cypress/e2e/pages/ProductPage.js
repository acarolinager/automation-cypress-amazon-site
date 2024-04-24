class ProductPage {
    product(){
      return cy.get('#productTitle');
    }

    secondOption(){
      return cy.get('#a-autoid-1-announce');
    }

    descriptionProductArea(){
      return cy.get('#editorialReviews_feature_div > h2');
    }

    customerReviewArea(){
      return cy.get('#cm_cr_dp_d_rating_histogram > :nth-child(1) > h2');
    }

    addCartButton(){
      return cy.get('#add-to-cart-button');
    }

    searchBook01(){
      this.product().contains("Crepúsculo: (Série Crepúsculo): 1");
      this.addCartButton().click();
    }

    searchBook02(){
      this.product().contains("Lua nova: (Série Crepúsculo): 2");
      this.addCartButton().click();
    }

    searchBook03(){
      this.product().contains("Eclipse: (Série Crepúsculo): 3");
      this.addCartButton().click();
    }

    searchBook04(){
      this.product().contains("Amanhecer (Crepúsculo Livro 4)");
      this.secondOption().click();
      this.addCartButton().click();
    }

    searchBook05(){
      this.product().contains("Sol da meia-noite: (Midnight Sun) - Série Crepúsculo: 5");
      this.addCartButton().click();
    }
}

export default ProductPage;