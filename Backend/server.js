const express = require('express');
const { Sequelize } = require('sequelize');
const app = express();
const port = 3000;

// Configuración de Sequelize
const sequelize = new Sequelize('FARMACIAEPIWEB', 'epiFarmacia', 'farmaciaEpi2024.', {
    host: 'localhost',
    dialect: 'mysql'
  });

  // Middleware para parsear JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido al sistema de farmacia!');
});

//Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en htt(localhost:${port}`);
});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });