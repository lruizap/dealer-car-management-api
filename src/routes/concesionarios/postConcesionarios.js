// routes/concesionarios/postConcesionarios.js

const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Añadir un nuevo concesionario
router.post("/", (req, res) => {
  const nuevoConcesionario = { id: concesionarios.length + 1, ...req.body, coches: [] };
  concesionarios.push(nuevoConcesionario);
  res.status(201).json({ message: "Concesionario añadido", concesionario: nuevoConcesionario });
});

module.exports = router;
