/* Este archivo es un generador de tokens con JWT */
const jwt = require('jsonwebtoken');

function sign( data ) {
    return jwt.sign(data, 'secreto');
}

module.exports = {
    sign,
}
