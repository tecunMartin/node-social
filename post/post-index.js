const express = require('express');
const bodyParent = require('body-parser');

require('dotenv').config();
const config = require('../config');
const post = require('./components/post/post-network');
const errors = require('../network/errors');

const app = express();
app.use(bodyParent.json());

// ROUER
app.use('/api/post', post);

app.use(errors);

app.listen(config.post.port, () => {
  console.log(`Servicio posts escuchando en el puerto ${config.post.port}`);
});
