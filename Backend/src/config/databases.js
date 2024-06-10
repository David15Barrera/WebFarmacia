const {Sequelize, Sequelize } = require('sequelize');

const Sequelize = new Sequelize ('FARMACIAEPIWEB', 'epiFarmacia','password', {

    host: 'localhost',
    dialect:'mysql'
});

module.exports = Sequelize;