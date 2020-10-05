/* Este archivo es un generador de tokens con JWT */
const jwt = require('jsonwebtoken');
const config = require('../config');
const secret = config.jwt.secret;
const chalk = require('chalk');

function sign( data ) {
    return jwt.sign(data, secret);
}

function verify( token ) {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        throw new Error("ESTE ES:"+error.message);
    }
}

const check = {
    own: function( req, owner ) {
        const decoded = decodeHeader(req);
        // COMPROBAR SI ES O NO PROPIO.
        if ( decoded.id !== owner ) {
            throw new Error('NO PUEDES HACER ESTO');
        }
    },
}

function getToken( auth ) {
    if ( !auth ) {
        throw new Error('No viene token');
    }
    
    if ( auth.indexOf('Bearer') === -1 ) {
        throw new Error('Formato invalido');
    }
    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || "";
    const token         = getToken( authorization );
    const decoded       = verify  ( token );
    
    req.user = decoded;
    return decoded;
}

module.exports = {
    sign,
    check,
}
