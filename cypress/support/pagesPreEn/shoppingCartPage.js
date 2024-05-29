export class ShoppingCartPage {
    validarProducto(data) {
      cy.xpath(`//p[@id='productName' and @name="${data}"]`).should("exist");
    }
  
    checkProd(data) {
      cy.xpath(`//p[@id='productName' and @name="${data["productName"]}"]`)
        .siblings("#unitPrice")
        .should("have.text", `${data["unitPrice"]}`);
      cy.xpath(`//p[@id='productName' and @name="${data["productName"]}"]`)
        .siblings("#productAmount")
        .should("have.text", `${data["productAmount"]}`);
      cy.xpath(`//p[@id='productName' and @name="${data["productName"]}"]`)
        .siblings("#totalPrice")
        .should("have.text", `${data["totalPrice"]}`);
    }
  }