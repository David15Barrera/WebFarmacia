const Usuario = require('../models/user');
const UsuarioDatos = require('../models/userDatos');

//Obtener todos los usuarios
exports.getAllUsuarios = async (req, res) => {
    try{
        const usuarios = await Usuario.findAll();
        const usuariosDatos = await UsuarioDatos.findAll();
        res.json({
          usuarios: usuarios,
          usuariosDatos: usuariosDatos
        });
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

exports.getIdUsuarioCargoByNombreContrasena = async (req, res) => {
  const { nombreUsuario, contrasena } = req.body;

  try {
    // Buscar usuario por nombre de usuario y contraseña en la tabla Usuario
    const usuario = await Usuario.findOne({
      where: {
        nombreUserL: nombreUsuario,
        contraUserL: contrasena
      }
    });

    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Buscar información adicional en la tabla UsuarioDatos
    const usuarioDatos = await UsuarioDatos.findOne({
      where: {
        idUsuario: usuario.idUserLog
      }
    });

    // Devolver respuesta con id, nombre de usuario y cargo
    res.json({
      idUsuario: usuario.idUserLog,
      nombreUsuario: usuario.nombreUserL,
      cargoUsuario: usuario.cargoUser, // Tomar cargoUser de la tabla Usuario
      cargoUsuarioDatos: usuarioDatos ? usuarioDatos.cargoUser : null // Tomar cargoUser de la tabla UsuarioDatos si existe
    });
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