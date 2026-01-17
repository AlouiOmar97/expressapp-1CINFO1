var express = require('express');
var router = express.Router();

/* GET users listing. */
//const usersService = require('../services/usersService');
//router.get('/', usersService.findById);

const { findAll, findById } = require('../services/usersService');
router.get('/', findAll);
router.get('/:id', findById);
module.exports = router;
