var express = require('express');
var router = express.Router();

/* GET chats listing. */

const { findAll, findById, add, update, deleteById } = require('../services/chatsService');
const validate = require('../middlewares/validateChat');
// localhost:3000/chats/
router.get('/', findAll);
// localhost:3000/chats/1
router.get('/:id', findById);
// localhost:3000/chats/
router.post('/', validate, add);
// localhost:3000/chats/1
router.put('/:id', update);
// localhost:3000/chats/1
router.delete('/:id', deleteById);
module.exports = router;
