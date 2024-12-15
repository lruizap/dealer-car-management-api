// routes/coches/getCocheById.js

const express = require("express");
const router = express.Router();
const coches = require("../../models/coches");

// Obtener un coche por ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const coche = coches.find((c) => c.id === id);

  if (coche) {
    res.json(coche);
  } else {
    res.status(404).json({ message: "Coche no encontrado" });
  }
});

module.exports = router;
