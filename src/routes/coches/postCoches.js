const express = require("express");
const router = express.Router();
const concesionarios = require("../../models/concesionarios");

// Añadir un nuevo coche a un concesionario
router.post("/", (req, res) => {
  const concesionarioId = Number(req.baseUrl.split("/").slice(-2, -1)[0]);

  // Validar el ID del concesionario
  if (isNaN(concesionarioId)) {
    return res.status(400).json({ message: "Invalid concesionario ID format" });
  }

  // Buscar el concesionario
  const concesionario = concesionarios.find((c) => c.id === concesionarioId);

  if (!concesionario) {
    return res.status(404).json({ message: "Concesionario no encontrado" });
  }

  // Crear un nuevo coche con un ID único dentro del concesionario
  const nuevoCoche = {
    id: concesionario.coches.length > 0 ? concesionario.coches[concesionario.coches.length - 1].id + 1 : 1,
    ...req.body,
  };

  // Agregar el nuevo coche al listado de coches del concesionario
  concesionario.coches.push(nuevoCoche);

  res.status(201).json({ message: "Coche añadido", coche: nuevoCoche });
});

module.exports = router;
