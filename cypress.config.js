const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://pushing-it.vercel.app/", //https://pushing-front.vercel.app/
    watchForFileChanges: true, //false si no quiero que se ejecute cypress cuando guardo alguna modificación del código
    defaultCommandTimeout: 10000, //tiempo en el que quiero que cypress espere una respuesta
  },

  env: {
    usuario: "pushingit",
    password: "123456!",
  },
});

