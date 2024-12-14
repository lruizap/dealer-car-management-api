// routes/coches/postCoches.js

const express = require("express");
const router = express.Router();
const coches = require("../../models/coches");

// Añadir un nuevo coche
router.post("/", (req, res) => {
  const nuevoCoche = { id: coches.length + 1, ...req.body };
  coches.push(nuevoCoche);
  res.status(201).json({ message: "Coche añadido", coche: nuevoCoche });
});

module.exports = router;
