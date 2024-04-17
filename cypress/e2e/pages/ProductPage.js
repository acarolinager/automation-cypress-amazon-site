class ProductPage {
    product01(){
      return cy.get('[data-asin="8598078301"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus');
    }

    product02(){
        return cy.get('[data-asin="8598078352"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus');
      }

    product03(){
      return cy.get('[data-asin="8598078417"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus');
    }

    product04(){
      return cy.get('[data-asin="B009M8CY7S"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus');
    }

    product05(){
      return cy.get('[data-asin="6555600292"] > .sg-col-inner > .s-widget-container > [data-action="puis-card-container-declarative"] > .puis-card-container > .a-spacing-base > .a-spacing-small > [data-cy="title-recipe"] > .a-size-mini > .a-link-normal > .a-size-base-plus');
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
}

export default ProductPage;