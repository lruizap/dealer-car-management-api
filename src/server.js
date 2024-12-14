// src/server.js

const app = require("./app");

// Definimos el puerto del servidor
const port = process.env.PORT || 8080;

// Arrancamos el servidor
app.listen(port, () => {
  console.log(`Servidor desplegado en el puerto: ${port}`);
});
