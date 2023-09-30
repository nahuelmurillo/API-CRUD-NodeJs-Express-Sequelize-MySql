const express = require('express');
const router = express.Router();
const catalogoRepartoController = require('../controllers/CatalogosRepartosControllers');

// Rutas para las categorías
router.get('/catalogosRepartos', catalogoRepartoController.listarCatalogosRepartos);
router.post('/catalogoReparto', catalogoRepartoController.crearCatalogoReparto);
router.get('/catalogoReparto/:id', catalogoRepartoController.obtenerCatalogoReparto);
router.put('/catalogoReparto/:id', catalogoRepartoController.actualizarCatalogoReparto);
router.delete('/catalogoReparto/:id', catalogoRepartoController.eliminarCatalogoReparto);

module.exports = router;
