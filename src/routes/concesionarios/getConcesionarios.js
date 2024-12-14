// routes/concesionarios/getConcesionarios.js

const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Obtener todos los concesionarios
router.get("/", (req, res) => {
  res.json(concesionarios);
});

module.exports = router;
