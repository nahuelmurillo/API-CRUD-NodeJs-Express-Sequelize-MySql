const express = require('express');
const router = express.Router();
const generoController = require('../controllers/GenerosControllers');

// Rutas para las categorías
router.get('/generos', generoController.listarGeneros);
router.post('/genero', generoController.crearGenero);
router.get('/genero/:id', generoController.obtenerGenero);
router.put('/genero/:id', generoController.actualizarGenero);
router.delete('/genero/:id', generoController.eliminarGenero);

module.exports = router;
