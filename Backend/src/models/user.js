const { DataType, DataTypes } = require('sequelize');
const sequelize = require('../config/databases')

const Usuario = sequelize.define('Usuario',{
    idUserLog: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreUserL: {
        type: DataTypes.STRING(225),
        allowNull:false
    },
    contrUserL: {
        type: DataTypes.STRING(225),
        allowNull: false
    }
}, {
    tableName: 'USUARIO',
    timestamps: false
});

module.exports = Usuario;