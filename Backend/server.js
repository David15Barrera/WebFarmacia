const express = require('express');
const sequelize = require('./src/config/databases');
const usuariosRoutes = require('./src/routes/usuario');

const app = express();
const port = 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/usuarios', usuariosRoutes);

// Iniciar el servidor y conectar a la base de datos
sequelize.sync()
  .then(() => {
    app.listen(port, () => {
      console.log(`Servidor escuchando en http://localhost:${port}`);
    });
    console.log('Conexión a la base de datos exitosa.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });
