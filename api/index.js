const express = require('express');
const app = express();

const bodyParent = require('body-parser');
const config = require('../config');
const user = require('./components/user/network');

app.use(bodyParent.json());

// ROUER
app.use('/api/user', user)
app.listen(config.api.port, () => {
    console.log(`Api escuchando en el puerto ${config.api.port}`);
});