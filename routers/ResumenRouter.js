const express = require('express');
const router = express.Router();
const resumenController = require('../controllers/ResumenesControllers');

// Rutas para las categorías
router.get('/resumenes', resumenController.listarResumenes);
router.post('/resumen', resumenController.crearResumen);
router.get('/resumen/:id', resumenController.obtenerResumen);
router.put('/resumen/:id', resumenController.actualizarResumen);
router.delete('/resumen/:id', resumenController.eliminarResumen);

module.exports = router;
