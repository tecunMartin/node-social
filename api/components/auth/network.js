const express = require('express');
const response = require('../../../network/response');
const { list } = require('../../../store/dummy');
const controller = require('./index');
const router = express.Router();

// Routes
router.post('/login', (req, res) =>
  controller
    .login(req.body.username, req.body.password)
    .then((token) => response.success(req, res, token, 200))
    .catch((err) => response.error(req, res, 'Informacion invalida', 400))
);

module.exports = router;
