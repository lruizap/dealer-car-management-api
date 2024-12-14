// index.js

const express = require("express");
const router = express.Router();

// Rutas de coches
router.use("/coches", require("./routes/coches/getCoches"));
router.use("/coches", require("./routes/coches/postCoches"));
router.use("/coches", require("./routes/coches/getCocheById"));
router.use("/coches", require("./routes/coches/putCocheById"));
router.use("/coches", require("./routes/coches/deleteCocheById"));

// Rutas de concesionarios
router.use("/concesionarios", require("./routes/concesionarios/getConcesionarios"));
router.use("/concesionarios", require("./routes/concesionarios/postConcesionarios"));
router.use("/concesionarios", require("./routes/concesionarios/getConcesionarioById"));
router.use("/concesionarios", require("./routes/concesionarios/putConcesionarioById"));
router.use("/concesionarios", require("./routes/concesionarios/deleteConcesionarioById"));


module.exports = router;
