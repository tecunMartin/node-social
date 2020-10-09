const express = require('express');
const secure = require('./secure');
const response = require('../../../network/response');
const { list } = require('../../../store/dummy');
const controller = require('./index');
const err = require('../../../utils/error');
const router = express.Router();

// Routes
router.get('/', listNetwork);
router.get('/:id', get);
router.post('/follow/:id', secure('follow'), follow);
router.post('/', upset);
router.put('/', secure('update'), upset);

// Internal functiones
function listNetwork(req, res) {
  controller
    .list()
    .then((lista) => response.success(req, res, lista, 200))
    .catch((e) => response.error(req, res, e.message, 500));
}

function get(req, res) {
  controller
    .get(req.params.id)
    .then((user) => response.success(req, res, user, 200))
    .catch((err) => response.error(req, res, err.message, 500));
}

function upset(req, res) {
  controller
    .add(req.body)
    .then((user) => response.success(req, res, user, 201))
    .catch((err) => response.error(req, res, err, 404));
}

function follow(req, res, next) {
  controller
    .follow(req.user.id, req.params.id)
    .then((data) => response.success(req, res, data, 201))
    .catch(next);
}

module.exports = router;
