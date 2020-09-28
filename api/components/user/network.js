const express        = require('express');
const response       = require('../../../network/response');
const controller     = require('./index')
const router         = express.Router();

router.get('/',     ( req, res )=>{
    controller.list()
    .then ((list) => response.success(req, res, list, 200))
    .catch((err)  => response.error  (req, res,err.message, 500));
});

router.get('/:id',  ( req, res )=>{
    controller.get(req.params.id)
    .then ((lista) => response.success(req, res, lista, 200))
    .catch((err)   => response.error   (req, res, err.message, 500));
});

// Creamos la ruta para agregar usuarios.
router.post('/',    ( req, res ) => {
    controller.add( req.body.id, req.body.name )
    .then (( name ) => response.success(req, res, name, 201))
    .catch(( err )  => response.error  (req, res, 'Error interno', 500));
});

module.exports = router;