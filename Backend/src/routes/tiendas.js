const express = require('express');
const router = express.Router();
const tiendasControllers = require('../controllers/tiendasControllers');

router.get('/allShop', tiendasControllers.getAllTiendas);
router.post('/createShop', tiendasControllers.createTiendas);
router.get('/searchShop/:id', tiendasControllers.getTiendaById);
router.delete('/deleteShop/:id', tiendasControllers.deleteTienda);

module.exports = router;