export class ProductsPage {
    clickAddToCart(product) {
      cy.xpath(`//*[@data-cy="add-to-cart-${product}"]`).click();
    }
  }