const ctrl = require('./post-controller');
const store = require('../../../store/mysql');

module.exports = ctrl(store);
