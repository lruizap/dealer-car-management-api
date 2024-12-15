// routes/coches/deleteCocheById.js

const express = require("express");
const router = express.Router();
const coches = require("../../models/coches");

// Borrar un coche por ID
router.delete("/:cocheId", (req, res) => {
  const id = parseInt(req.params.id);
  const index = coches.findIndex((c) => c.id === id);

  if (index !== -1) {
    coches.splice(index, 1);
    res.json({ message: "Coche eliminado" });
  } else {
    res.status(404).json({ message: "Coche no encontrado" });
  }
});

module.exports = router;
