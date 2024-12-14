const express = require('express');
const router = express.Router();
let concesionarios = require('../models/concesionarios');

// GET /concesionarios
router.get('/', (req, res) => res.json(concesionarios));

// POST /concesionarios
router.post('/', (req, res) => {
  const newConcesionario = { id: Date.now(), ...req.body, coches: [] };
  concesionarios.push(newConcesionario);
  res.status(201).json(newConcesionario);
});

// GET /concesionarios/:id
router.get('/:id', (req, res) => {
  const concesionario = concesionarios.find((c) => c.id == req.params.id);
  if (concesionario) res.json(concesionario);
  else res.status(404).json({ error: 'Concesionario no encontrado' });
});

// PUT /concesionarios/:id
router.put('/:id', (req, res) => {
  const index = concesionarios.findIndex((c) => c.id == req.params.id);
  if (index !== -1) {
    concesionarios[index] = { ...concesionarios[index], ...req.body };
    res.json(concesionarios[index]);
  } else {
    res.status(404).json({ error: 'Concesionario no encontrado' });
  }
});

// DELETE /concesionarios/:id
router.delete('/:id', (req, res) => {
  concesionarios = concesionarios.filter((c) => c.id != req.params.id);
  res.status(204).end();
});

// Routes for coches
router.get('/:id/coches', (req, res) => {
  const concesionario = concesionarios.find((c) => c.id == req.params.id);
  if (concesionario) res.json(concesionario.coches);
  else res.status(404).json({ error: 'Concesionario no encontrado' });
});

router.post('/:id/coches', (req, res) => {
  const concesionario = concesionarios.find((c) => c.id == req.params.id);
  if (concesionario) {
    const newCoche = { id: Date.now(), ...req.body };
    concesionario.coches.push(newCoche);
    res.status(201).json(newCoche);
  } else {
    res.status(404).json({ error: 'Concesionario no encontrado' });
  }
});

module.exports = router;
