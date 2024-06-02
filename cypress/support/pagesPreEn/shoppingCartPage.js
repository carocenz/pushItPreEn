export class ShoppingCartPage {
    validarProducto(data) {
      cy.get(`p#productName[name="${data}"]`).should('exist');
    }
  
    checkProd(data) {
      cy.get(`p#productName[name="${data["productName"]}"]`)
      .siblings("#unitPrice")
      .should("have.text", `$${data["unitPrice"]}`);
      cy.get(`p#productName[name="${data["productName"]}"]`)
      .siblings("#productAmount")
      .should("have.text", `${data["productAmount"]}`);
      cy.get(`#productName[name="${data["productName"]}"]`)
      .siblings('#totalPrice')
      .should("have.text", `$${data.unitPrice
          * data.productAmount
        }`);
    }

    valueTotalPrice(data) {
      cy.get('#price').should("have.text", `${data[0].totalPrice + data[1].totalPrice
      }`);
    }
  }