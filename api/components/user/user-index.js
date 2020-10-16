// const store = require('../../../store/mysql');
require('dotenv').config();
const config = require('../../../config');

let store;
if (config.remoteDB === true) {
  store = require('../../../store/remote-mysql');
} else {
  store = require('../../../store/mysql');
}

const ctrl = require('./user-controller');

module.exports = ctrl(store);
