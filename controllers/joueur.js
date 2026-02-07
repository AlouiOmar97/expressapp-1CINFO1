var express = require('express');
var router = express.Router();

/* GET joueurs listing. */

const { findAll, findById, add, update, deleteById } = require('../services/joueursService');
const validate = require('../middlewares/validateJoueur');
// localhost:3000/joueurs/
router.get('/', findAll);
// localhost:3000/joueurs/1
router.get('/:id', findById);
// localhost:3000/joueurs/
router.post('/', validate, add);
// localhost:3000/joueurs/1
router.put('/:id', update);
// localhost:3000/joueurs/1
router.delete('/:id', deleteById);
module.exports = router;
