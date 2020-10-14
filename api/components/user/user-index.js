// const store = require('../../../store/mysql');
const store = require('../../../store/remote-mysql');
const ctrl = require('./user-controller');

module.exports = ctrl(store);
