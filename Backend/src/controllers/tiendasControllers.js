const tiendas = require('../models/tiendas');
const datosTiendas = require('../models/datostiendas');
const Tiendas = require('../models/tiendas');


//Obtener todas las tiendas
exports.getAllTiendas = async (req, res) => {
    try{
        const tiendas = await Tiendas.findAll();
        res.json({
            tiendas: tiendas
        });
    }catch (error){
        res.status(500).json({ error: error.message });
    }
};


//Crear un nueva tienda
exports.createTiendas = async (req, res) => {
    try {
      const { nombreTienda, telefonoTienda, ubicacion, descripcionShop, ...datos } = req.body;
      const tiendas = await Tiendas.create({ nombreTienda, telefonoTienda, ubicacion, descripcionShop });
      datos.idDatos = tiendas.idTiendas;
      const datosTienda = await datosTiendas.create(datos);
      res.status(201).json({ tiendas, datosTienda });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  // Obtener un tienda por ID
exports.getTiendaById = async (req, res) => {
    try {
      const { id } = req.params;
      const tienda = await Tiendas.findByPk(id);
      if (!tienda) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      const datosTienda = await datosTiendas.findOne({ where: { idDatos: id } });
  
      res.json({ tienda, datosTienda });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Eliminar un usuario
exports.deleteTienda = async (req, res) => {
    try {
      const { id } = req.params;
      const tienda = await Tiendas.findByPk(id);
      if (!tienda) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
      await datosTiendas.destroy({ where: { idDatos: id } });
      await tienda.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };