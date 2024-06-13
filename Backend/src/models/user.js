const { DataTypes } = require('sequelize');
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
    contraUserL: {
        type: DataTypes.STRING(225),
        allowNull: false
    }
}, {
    tableName: 'USUARIOS',
    timestamps: false
});

module.exports = Usuario;