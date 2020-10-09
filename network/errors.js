const responser = require('./response');

function errors(err, req, res, next) {
  console.error('[error]', err);

  const message = err.message || 'Error interno';
  const status = err.statusCode || 500;

  responser.error(req, res, message, status);
}

module.exports = errors;
