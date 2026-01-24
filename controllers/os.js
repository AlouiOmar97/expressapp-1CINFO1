var express = require('express');
const { findAll, findCpus, findCpusById } = require('../services/osService');
var router = express.Router();

/* GET home page. */
router.get('/', findAll);
router.get('/cpus', findCpus);
// http://localhost:3000/os/cpus/0
router.get('/cpus/:id', findCpusById);

module.exports = router;
