const { DataType, DataTypes } = require('sequelize');
const sequelize = require('../config/databases');
const Usuario = require('../models/user')

const UsuarioDatos = sequelize.define('UsuarioDatos', {
  idUsuario: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dpiUser:{
    type: DataTypes.STRING(225),
    unique:true,
    allowNull: false
  },
  nitUserDatos:{
    type: DataTypes.STRING(225),
    allowNull: false
  },
  nombreUser:{
    type: DataTypes.STRING(225),
    allowNull: false
  },
  apellidoUser:{
    type: DataTypes.STRING(225),
    allowNull: false
  },
  direccionUser:{
    type: DataTypes.STRING(150),
    allowNull: true
  },
  telefonoUser:{
    type: DataTypes.STRING(8),
    allowNull: false
  },
  genero: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  cargoUser: {
    type : DataTypes.STRING(100),
    allowNull: true
  }
}, {
    tablesName: 'USUARIOSDATOS',
    timesTamps: false
});

UsuarioDatos.belongsTo(Usuario, { foreignKey: 'idUsuario' });

module.exports = UsuarioDatos;