const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Obtener todos los coches de un concesionario por su ID
router.get("/", (req, res) => {
  const concesionarioId = Number(req.baseUrl.split("/").slice(-2, -1)[0]);

  // Validar que el ID es un número válido
  if (isNaN(concesionarioId)) {
    return res.status(400).json({ message: "Invalid concesionario ID format" });
  }

  // Buscar el concesionario correspondiente
  const concesionario = concesionarios.find((c) => c.id === concesionarioId);

  if (concesionario) {
    res.json(concesionario.coches);
  } else {
    res.status(404).json({ message: "Concesionario no encontrado" });
  }
});

module.exports = router;
