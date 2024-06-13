const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');

router.get('/all', usuariosController.getAllUsuarios);
router.post('/', usuariosController.createUsuario);
router.get('/:id', usuariosController.getUsuarioById);
router.put('/:id', usuariosController.updateUsuario);
router.delete('/:id', usuariosController.deleteUsuario);

module.exports = router;
