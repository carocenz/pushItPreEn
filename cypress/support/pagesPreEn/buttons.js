export class ButtonsPage {
    constructor() {
      this.title = 'h2#title:contains("Products")';
      this.message = 'header:contains("Message alert")';
      this.messageButton = 'button#closeModal';
    }
  
    validarTitle() {
      cy.get(this.title).should('exist');
    }
  
    validarMessage() {
      cy.get(this.message).should('exist');
    }
  
    clickMessageButton() {
      cy.get(this.messageButton).click();
    }
  }