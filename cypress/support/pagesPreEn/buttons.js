export class ButtonsPage {
    constructor() {
      this.title = "//h2[@id='title' and text()='Products']";
      this.message = '//header[contains(text(), "Message alert")]';
      this.messageButton = "//button[@id='closeModal']";
    }
  
    validarTitle() {
      cy.xpath(this.title).should("exist");
    }
  
    validarMessage() {
      cy.xpath(this.message).should("exist");
    }
  
    clickMessageButton() {
      cy.xpath(this.messageButton).click();
    }
  }