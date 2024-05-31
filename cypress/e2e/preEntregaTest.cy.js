import { LogInPage } from "../support/pagesPreEn/logIn";
import { ProductsPage } from "../support/pagesPreEn/productsPage";
import { ShoppingCartPage } from "../support/pagesPreEn/shoppingCartPage";
import { ButtonsPage } from "../support/pagesPreEn/buttons";

describe("Pre-Entrega", () => {
  let data;
  const loginPage = new LogInPage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  const buttonPage = new ButtonsPage();
  const totalProd = 60.05;
  const totalPriceValue = totalProd.toString();
  const totalPrice = `//p[@id='price' and b[text()='${totalPriceValue}']]`;

//El precio queda como string porque al verificarlos en shoppingCart el valor al cual los chequea tiene el $ integrado con el número.
//Por lo tanto, tuve que agregar el $ antes del número y definitlo como string.
  before(() => {
    cy.fixture("datosPreEn").then((datosPreEn) => {
      data = datosPreEn;
    });
  });

  it("Test", () => {
    //LOGIN
    //Ingresar en la pagina de pushing IT.
    cy.visit("");
    loginPage.clickIniciaSesion();
    //Ingresar al sistema con datos validos.
    loginPage.escribirUsuario(Cypress.env().usuario);
    loginPage.escribirContraseña(Cypress.env().password);
    loginPage.clickLogIn();
    
    //HOME
    //Dirigirse al modulo "Online Shop".
    cy.xpath("//a[text()='Online Shop']").should("exist").click();

    //PRODUCTS
    //Elegir 1 productos a eleccion y agregarlo 2 veces
    //#1
    buttonPage.validarTitle();
    productsPage.clickAddToCart('Sweater rosa');
    buttonPage.validarMessage();
    buttonPage.clickMessageButton();
    //#2
    buttonPage.validarTitle();
    productsPage.clickAddToCart('Sweater rosa');
    buttonPage.validarMessage();
    buttonPage.clickMessageButton();

    //Elegir otro producto a eleccion y agregarlo 1 vez
    //#1
    productsPage.clickAddToCart('Zapatillas Azules');
    buttonPage.validarMessage();
    buttonPage.clickMessageButton();
    cy.xpath("//h2[@id='title' and text()='Products']", {
      timeout: 5000,
    }).should("exist");
    cy.xpath("//button[contains(text(), 'Go to shopping cart')]").click();

    //SHOPPINGCART
    //Verificar el nombre y precio, precio total y cantidad de los dos productos.
    cy.xpath('//h2[@id="title" and text()="Shopping Cart"]').should("exist");
    shoppingCartPage.validarProducto(data.shoppingCart[0].productName);
    shoppingCartPage.checkProd(data.shoppingCart[0]);
    shoppingCartPage.validarProducto(data.shoppingCart[1].productName);
    shoppingCartPage.checkProd(data.shoppingCart[1]);

    //Hacer click en "Show total price" y verificar el precio acumulado de los 2 productos
    cy.xpath("//button[contains(text(), 'Show total price')]").click();
    cy.xpath("//b[text()='Total $']").should("exist");
    cy.xpath(totalPrice).should('exist');
  });
});