var express = require('express');
const { findAll, findById, calculateTotalPrice, productsInStock } = require('../services/productsService');
var router = express.Router();

/* GET home page. */
// http://localhost:3000/products/
router.get('/', findAll);
// http://localhost:3000/products/details/MACBOOKPRO
router.get('/details/:id', findById);
// http://localhost:3000/products/total/MACBOOKPRO/5
router.get('/total/:id/:qt', calculateTotalPrice);
// http://localhost:3000/products/instock/100
router.get('/instock/:qt', productsInStock);

module.exports = router;
