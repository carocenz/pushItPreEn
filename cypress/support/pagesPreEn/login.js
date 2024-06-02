export class LogInPage {
    constructor() {
      this.dblClickLogIn = 'span:contains("Iniciá sesión")';
      this.userInput = 'input#user';
      this.passInput = 'input#pass';
      this.logInButton = 'button[type^="subm"]';
    }
  
    clickIniciaSesion() {
      cy.get(this.dblClickLogIn).dblclick();
    }
  
    escribirUsuario(usuario) {
      cy.get(this.userInput).type(usuario);
    }
  
    escribirContraseña(contraseña) {
      cy.get(this.passInput).type(contraseña);
    }
  
    clickLogIn() {
      cy.get(this.logInButton).click();
    }
  }