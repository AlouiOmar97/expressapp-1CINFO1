var express = require('express');
var router = express.Router();

/* GET users listing. */

const { findAll, findById, add, update, deleteById } = require('../services/usersServiceDB');
const validate = require('../middlewares/validateUser');
// localhost:3000/usersdb/
router.get('/', findAll);
// localhost:3000/usersdb/1
router.get('/:id', findById);
// localhost:3000/usersdb/
router.post('/', validate, add);
// localhost:3000/usersdb/1
router.put('/:id', update);
// localhost:3000/usersdb/1
router.delete('/:id', deleteById);
module.exports = router;
