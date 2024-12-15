const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Obtener un coche por su ID dentro de un concesionario
router.get("/:cocheId", (req, res) => {
  const concesionarioId = Number(req.baseUrl.split("/").slice(-2, -1)[0]);
  const cocheId = Number(req.params.cocheId);

  // Validar IDs
  if (isNaN(concesionarioId) || isNaN(cocheId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  // Buscar el concesionario
  const concesionario = concesionarios.find((c) => c.id === concesionarioId);

  if (!concesionario) {
    return res.status(404).json({ message: "Concesionario no encontrado" });
  }

  // Buscar el coche en el listado del concesionario
  const coche = concesionario.coches.find((c) => c.id === cocheId);

  if (coche) {
    res.json(coche);
  } else {
    res.status(404).json({ message: "Coche no encontrado en el concesionario" });
  }
});

module.exports = router;
