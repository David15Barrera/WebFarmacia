const {Sequelize } = require('sequelize');

const sequelize = new Sequelize ('FARMACIAEPIWEB', 'epiFarmacia','password', {

    host: 'localhost',
    dialect:'mysql'
});

module.exports = sequelize;