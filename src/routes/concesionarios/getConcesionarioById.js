// routes/concesionarios/getConcesionarioById.js

const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Obtener un concesionario por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const concesionario = concesionarios.find((c) => c.id === id);

  if (concesionario) {
    res.json(concesionario);
  } else {
    res.status(404).json({ message: "Concesionario no encontrado" });
  }
});

module.exports = router;
