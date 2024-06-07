const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3000;

// Configuración de Sequelize
const sequelize = new Sequelize('FARMACIAEPIWEB', 'root', 'Sistemas1.', {
    host: 'localhost',
    dialect: 'mysql'
  });

  // Middleware para parsear JSON
app.use(express.json());