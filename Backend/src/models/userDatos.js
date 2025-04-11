const { DataTypes } = require('sequelize');
const sequelize = require('../config/databases');
const Usuario = require('../models/user');

const UsuarioDatos = sequelize.define('UsuarioDatos', {
  idUsuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  dpiUser: {
    type: DataTypes.STRING(225),
    unique: true,
    allowNull: false
  },
  nitUserDatos: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(225),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(225),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(150),
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  genero: {
    type: DataTypes.ENUM('MASCULINO', 'FEMENINO', 'OTRO'),
    allowNull: true
  },
  cargo: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  idUserLog: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'USUARIOS',
      key: 'idUserLog'
    }
  }
}, {
  tableName: 'USUARIOSDATOS',
  timestamps: false
});

UsuarioDatos.belongsTo(Usuario, { foreignKey: 'idUserLog' });

module.exports = UsuarioDatos;
