const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const config = require('../config');
const router = require('./cache-network');
const app = express();
app.use(bodyParser.json());

// RUTAS
app.use('/', router);

app.listen(config.cacheService.port, () => {
  console.log(`Servicio de cache escuchando en el puerto ${config.cacheService.port}`);
});
