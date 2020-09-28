const express = require('express');

const response = require('../../../network/response');
const contoller = require('./controller')

const router = express.Router();

router.get('/', ( req, res )=>{
    const lista = contoller.list();
    response.success(req, res, lista, 200);
});


module.exports = router;