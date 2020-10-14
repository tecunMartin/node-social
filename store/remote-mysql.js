const remote = require('./remote');
require('dotenv').config();
const config = require('../config');
module.exports = new remote(config.mysqlService.host, config.mysqlService.port);
