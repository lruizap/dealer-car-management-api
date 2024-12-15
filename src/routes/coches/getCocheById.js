const express = require("express");
const router = express.Router();
const coches = require("../../models/coches");

// Obtener un coche por ID
router.get("/:cocheId", (req, res) => {
  const cocheId = Number(req.params.cocheId);

  // Verificar que el ID es válido
  if (isNaN(cocheId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  // Buscar coche por ID
  const coche = coches.find((c) => c.id === cocheId);

  if (coche) {
    res.json(coche);
  } else {
    res.status(404).json({ message: "Coche no encontrado" });
  }
});

module.exports = router;
