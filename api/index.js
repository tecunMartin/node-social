const express       = require('express');
const app           = express();
const swaggerUi     = require('swagger-ui-express');
const bodyParent    = require('body-parser');
const config        = require('../config');
const user          = require('./components/user/network');

app.use(bodyParent.json());

const swaggerDoc    = require('./swagger.json');
const auth          = require('./components/auth/network');
// ROUER
app.use('/api/user', user);
app.use('/api/auth', auth);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.listen(config.api.port, () => {
    console.log(`Api escuchando en el puerto ${config.api.host}${config.api.port}`);
});
