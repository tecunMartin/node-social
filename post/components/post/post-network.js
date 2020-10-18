const express = require('express');
const response = require('../../../network/response');
const controller = require('./post-index');
const secure = require('../../../api/components/user/secure');

const router = express.Router();

// Routes
router.get('/', listPost);
router.get('/:id', getPost);
router.post('/', secure('create'), addPost);
router.delete('/:id', secure('create'), deletePost);

function listPost(req, res, next) {
  controller
    .list()
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

function addPost(req, res, next) {
  controller
    .add(req.user.id, req.body)
    .then((data) => response.success(req, res, data, 201))
    .catch(next);
}

function getPost(req, res, next) {
  controller
    .get(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

function deletePost(req, res, next) {
  controller
    .remove(req.params.id)
    .then((data) => response.success(req, res, data, 200))
    .catch(next);
}

module.exports = router;
