const express = require('express');
const router = express.Router();
const catalogoGeneroController = require('../controllers/CatalogosGenerosControllers');

// Rutas para las categorías
router.get('/catalogosGeneros', catalogoGeneroController.listarCatalogosGeneros);
router.post('/catalogoGenero', catalogoGeneroController.crearCatalogoGenero);
router.get('/catalogoGenero/:id', catalogoGeneroController.obtenerCatalogoGenero);
router.put('/catalogoGenero/:id', catalogoGeneroController.actualizarCatalogoGenero);
router.delete('/catalogoGenero/:id', catalogoGeneroController.eliminarCatalogoGenero);

module.exports = router;
