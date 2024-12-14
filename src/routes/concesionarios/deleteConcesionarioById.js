// routes/concesionarios/deleteConcesionarioById.js

const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Borrar un concesionario por ID
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = concesionarios.findIndex((c) => c.id === id);

  if (index !== -1) {
    concesionarios.splice(index, 1);
    res.json({ message: "Concesionario eliminado" });
  } else {
    res.status(404).json({ message: "Concesionario no encontrado" });
  }
});

module.exports = router;
