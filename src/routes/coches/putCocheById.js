const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Actualizar un coche por su ID dentro de un concesionario
router.put("/:cocheId", (req, res) => {
  const concesionarioId = Number(req.baseUrl.split("/").slice(-2, -1)[0]);
  const cocheId = Number(req.params.cocheId);

  // Validar los IDs
  if (isNaN(concesionarioId) || isNaN(cocheId)) {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  // Buscar el concesionario
  const concesionario = concesionarios.find((c) => c.id === concesionarioId);

  if (!concesionario) {
    return res.status(404).json({ message: "Concesionario no encontrado" });
  }

  // Buscar el coche en el concesionario
  const cocheIndex = concesionario.coches.findIndex((c) => c.id === cocheId);

  if (cocheIndex === -1) {
    return res.status(404).json({ message: "Coche no encontrado en el concesionario" });
  }

  // Actualizar el coche
  concesionario.coches[cocheIndex] = { id: cocheId, ...req.body };

  res.json({ message: "Coche actualizado", coche: concesionario.coches[cocheIndex] });
});

module.exports = router;
