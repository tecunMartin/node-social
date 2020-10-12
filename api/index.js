const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const bodyParent = require('body-parser');
require('dotenv').config();
const config = require('../config');
const user = require('./components/user/user-network');
const post = require('./components/post/post-network');
const errors = require('../network/errors');
const auth = require('./components/auth/auth-network');

app.use(bodyParent.json());

const swaggerDoc = require('./swagger.json');
// ROUER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api/post', post);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.use(errors);

app.listen(config.api.port, () => {
  console.log(`Api escuchando en el puerto ${config.api.host}${config.api.port}`);
});
