// routes/coches/getCoches.js

const express = require("express");
const router = express.Router();
const coches = require("../../models/coches");

// Obtener todos los coches
router.get("/", (req, res) => {
  res.json(coches);
});

module.exports = router;
