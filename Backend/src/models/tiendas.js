const { DataTypes } = require('sequelize');
const sequelize = require('../config/databases');

const Tiendas = sequelize.define('Tienda',{
  idTiendas:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombreTienda:{
    type: DataTypes.STRING(225),
    allowNull:false
  },
  telefonoTienda:{
    type: DataTypes.STRING(225),
    allowNull: false
  },
  ubicacion:{
    type: DataTypes.STRING(225),
    allowNull: false
  },
  descripcionShop:{
    type: DataTypes.TEXT,
    allowNull:false
  }
}, {
    tableName: 'TIENDAS',
    timestamps: false
});
 module.exports = Tiendas;