const ctrl = require('./user-controller');
const store = require('../../../store/mysql');

module.exports = ctrl(store);
