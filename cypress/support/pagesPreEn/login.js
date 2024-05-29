export class LogInPage {
    constructor() {
      this.dblClickLogIn = "//span[text()='Iniciá sesión']";
      this.userInput = "//input[@id='user']";
      this.passInput = "//input[@id='pass']";
      this.logInButton = "//button[starts-with(@type,'subm')]";
    }
  
    clickIniciaSesion() {
      cy.xpath(this.dblClickLogIn).dblclick();
    }
  
    escribirUsuario(usuario) {
      cy.xpath(this.userInput).type(usuario);
    }
  
    escribirContraseña(contraseña) {
      cy.xpath(this.passInput).type(contraseña);
    }
  
    clickLogIn() {
      cy.xpath(this.logInButton).click();
    }
  }