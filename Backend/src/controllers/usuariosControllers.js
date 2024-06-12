const Usuario = require('../models/user');
const UsuarioDatos = require('../models/userDatos');

//Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        res.json(usuario);
    }catch (error){
        res.status(500).json({ error: error.message });
    }
};

//Crear un nuevo usuario
exports.createUsuario = async (req, res) => {
    try {
      const { nombreUserL, contraUserL, ...datos } = req.body;
      const usuario = await Usuario.create({ nombreUserL, contraUserL });
      datos.idUsuario = usuario.idUserLog;
      const usuarioDatos = await UsuarioDatos.create(datos);
      res.status(201).json({ usuario, usuarioDatos });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  // Actualizar un usuario
exports.updateUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombreUserL, contraUserL, ...datos } = req.body;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.update({ nombreUserL, contraUserL });
    const usuarioDatos = await UsuarioDatos.findOne({ where: { idUsuario: id } });
    await usuarioDatos.update(datos);
    res.json({ usuario, usuarioDatos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Obtener un usuario por ID
exports.getUsuarioById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    const usuarioDatos = await UsuarioDatos.findOne({ where: { idUsuario: id } });
    res.json({ usuario, usuarioDatos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar un usuario
exports.deleteUsuario = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await UsuarioDatos.destroy({ where: { idUsuario: id } });
    await usuario.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};