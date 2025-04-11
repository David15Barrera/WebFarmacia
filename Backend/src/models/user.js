const { DataTypes } = require('sequelize');
const sequelize = require('../config/databases');

const Usuario = sequelize.define('Usuario', {
  idUserLog: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombreUsuario: {
    type: DataTypes.STRING(225),
    allowNull: false
  },
  contrasenaUsuario: {
    type: DataTypes.STRING(225),
    allowNull: false
  }
}, {
  tableName: 'USUARIOS',
  timestamps: false
});

module.exports = Usuario;
