// src/index.js

const express = require("express");
const router = express.Router();

// Dealer routes
router.use("/concesionarios", require("./src/routes/concesionarios/getConcesionarios"));
router.use("/concesionarios", require("./src/routes/concesionarios/postConcesionarios"));
router.use("/concesionarios", require("./src/routes/concesionarios/getConcesionarioById"));
router.use("/concesionarios", require("./src/routes/concesionarios/putConcesionarioById"));
router.use("/concesionarios", require("./src/routes/concesionarios/deleteConcesionarioById"));

// Car routes
router.use("/concesionarios/:id/coches", require("./src/routes/coches/getCoches"));
router.use("/concesionarios/:id/coches", require("./src/routes/coches/postCoches"));
router.use("/concesionarios/:id/coches/:cocheId", require("./src/routes/coches/getCocheById"));
router.use("/concesionarios/:id/coches/:cocheId", require("./src/routes/coches/putCocheById"));
router.use("/concesionarios/:id/coches/:cocheId", require("./src/routes/coches/deleteCocheById"));

module.exports = router;
