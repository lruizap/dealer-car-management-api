const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Borrar un coche por su ID dentro de un concesionario
router.delete("/:cocheId", (req, res) => {
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

  // Buscar el índice del coche en el listado de coches del concesionario
  const cocheIndex = concesionario.coches.findIndex((c) => c.id === cocheId);

  if (cocheIndex !== -1) {
    // Eliminar el coche del listado
    concesionario.coches.splice(cocheIndex, 1);
    res.json({ message: "Coche eliminado" });
  } else {
    res.status(404).json({ message: "Coche no encontrado en el concesionario" });
  }
});

module.exports = router;
