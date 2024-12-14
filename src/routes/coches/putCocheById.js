// routes/coches/putCocheById.js

const express = require("express");
const router = express.Router();
const coches = require("../../models/coches");

// Actualizar un coche por ID
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = coches.findIndex((c) => c.id === id);

  if (index !== -1) {
    coches[index] = { id, ...req.body };
    res.json({ message: "Coche actualizado", coche: coches[index] });
  } else {
    res.status(404).json({ message: "Coche no encontrado" });
  }
});

module.exports = router;
