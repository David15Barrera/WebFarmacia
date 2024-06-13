const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosControllers');

router.get('/all', usuariosController.getAllUsuarios);
router.post('/login', usuariosController.getIdUsuarioCargoByNombreContrasena);
router.post('/', usuariosController.createUsuario);
router.get('/search/:id', usuariosController.getUsuarioById);
router.put('/update/:id', usuariosController.updateUsuario);
router.delete('/delete/:id', usuariosController.deleteUsuario);

module.exports = router;
