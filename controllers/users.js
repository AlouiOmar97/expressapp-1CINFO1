var express = require('express');
var router = express.Router();

/* GET users listing. */
//const usersService = require('../services/usersService');
//router.get('/', usersService.findById);

const { findAll, findById, add, update, deleteById } = require('../services/usersService');
router.get('/', findAll);
router.get('/:id', findById);
router.post('/', add);
router.put('/:id', update);
router.delete('/:id', deleteById);
module.exports = router;
