// Requires
// Importacion de librerias
const express = require('express');
const mongoose = require('mongoose');

// Inicializar variables
const app = express();

// Conexión a la bbdd
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb', (err, res) => {
  if(err) throw err;
  else console.log('Base de datos: \x1b[32m%s\x1b[0m',' online');
});

// Rutas
app.get('/', (req, res, next) => {

  res.status(403).json({
    ok: true,
    mensaje: 'Petición realizada correctamente'
  })
});

// Escuchar peticiones

app.listen(3000, () => {
  console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m',' online');
});

