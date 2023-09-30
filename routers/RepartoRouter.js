const express = require('express');
const router = express.Router();
const repartoController = require('../controllers/RepartosControllers');

// Rutas para las categorías
router.get('/repartos', repartoController.listarRepartos);
router.post('/reparto', repartoController.crearReparto);
router.get('/reparto/:id', repartoController.obtenerReparto);
router.put('/reparto/:id', repartoController.actualizarReparto);
router.delete('/reparto/:id', repartoController.eliminarReparto);

module.exports = router;
