var express = require('express');
const { findAll, findById, calculateTotalPrice, carsInStock } = require('../services/carsService');
var router = express.Router();

/* GET home page. */
// http://localhost:3000/cars/
router.get('/', findAll);
// http://localhost:3000/cars/details/TESLAMODEL3
router.get('/details/:id', findById);
// http://localhost:3000/cars/total/TESLAMODEL3/5
router.get('/total/:id/:qt', calculateTotalPrice);
// http://localhost:3000/cars/instock/100
router.get('/instock/:qt', carsInStock);

module.exports = router;
