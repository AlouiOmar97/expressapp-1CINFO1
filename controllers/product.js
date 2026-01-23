var express = require('express');
const { findAll, findById } = require('../services/productsService');
var router = express.Router();

/* GET home page. */
router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;
