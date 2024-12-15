// src/app.js

const express = require("express");
const bodyParser = require('body-parser');
const router = require("../index");

// Inicializamos la aplicación de Express
const app = express();

// Middleware para procesar JSON
app.use(express.json());
app.use(bodyParser.json());

// Conectamos las rutas
app.use("/", router);

module.exports = app;
