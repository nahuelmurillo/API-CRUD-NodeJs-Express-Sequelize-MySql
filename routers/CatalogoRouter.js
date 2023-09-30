const express = require('express');
const router = express.Router();
const catalogoController = require('../controllers/CatalogosControllers');

// Rutas para las categorías
router.get('/catalogos', catalogoController.listarCatalogos);
router.post('/catalogos/catalogo', catalogoController.crearCatalogo);
router.get('/catalogos/catalogo/:id', catalogoController.obtenerCatalogo);
router.put('/catalogos/catalogo/:id', catalogoController.actualizarCatalogo);
router.delete('/catalogos/catalogo/:id', catalogoController.eliminarCatalogo);

module.exports = router;
