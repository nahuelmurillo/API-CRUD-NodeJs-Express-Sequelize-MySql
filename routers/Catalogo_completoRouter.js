const express = require('express');
const router = express.Router();
const catalogocompleto = require('../controllers/Catalogo_completoControllers');

// Rutas para las categorías
router.get('/catalogo', catalogocompleto.listarCatalogo);
router.get('/catalogo/:id', catalogocompleto.obtenerCatalogo);
router.get('/catalogo/titulo/:query', catalogocompleto.filtroParcialTotalTitulo);
router.get('/catalogo/genero/:query', catalogocompleto.filtroGenero);
router.get('/catalogo/categoria/:query', catalogocompleto.filtroCategoria);

module.exports = router;
