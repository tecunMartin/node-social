// const store = require('../../../store/mysql');
require('dotenv').config();
const config = require('../../../config');

let store, cache;
if (config.remoteDB === true) {
  store = require('../../../store/remote-mysql');
  cache = require('../../../store/remote-cache');
} else {
  store = require('../../../store/mysql');
  cache = require('../../../store/redis');
}

const ctrl = require('./user-controller');

module.exports = ctrl(store, cache);
