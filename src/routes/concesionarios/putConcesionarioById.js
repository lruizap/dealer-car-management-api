// routes/concesionarios/putConcesionarioById.js

const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Actualizar un concesionario por ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = concesionarios.findIndex((c) => c.id === id);

  if (index !== -1) {
    concesionarios[index] = { ...concesionarios[index], ...req.body };
    res.json({ message: "Concesionario actualizado", concesionario: concesionarios[index] });
  } else {
    res.status(404).json({ message: "Concesionario no encontrado" });
  }
});

module.exports = router;
