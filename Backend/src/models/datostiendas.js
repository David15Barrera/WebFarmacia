const { DataTypes} = require('sequelize');
const sequelize = require('../config/databases');
const Tiendas = require('../models/tiendas');

const datosTiendas = sequelize.define('datosTiendas', {
    idDatos:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        references:{
            model: 'TIENDAS',
            key:'idTiendas'
        }
    },
    titulo:{
        type: DataTypes.STRING(225),
        allowNull: true
    },
    subtitulo:{
        type: DataTypes.STRING(225),
        allowNull: true
    },
    descripcionT:{
        type: DataTypes.STRING(225),
        allowNull: true
    },
    horaInicio:{
        type: DataTypes.STRING(10),
        allowNull: true  
    },
    horaFinal:{
        type: DataTypes.STRING(5),
        allowNull: true
    },
    redes:{
        type: DataTypes.STRING(225),
        allowNull: true
    },
    direccion:{
     type: DataTypes.STRING(225),
     allowNull: true
    }
},{
    tableName:'DATOSTIENDA',
    timestamps: false
})

datosTiendas.belongsTo(Tiendas, {foreignKey:'idDatos'});

module.exports = datosTiendas;