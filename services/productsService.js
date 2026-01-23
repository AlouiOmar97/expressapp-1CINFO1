const products = require('./products.json');

const findAll = (req, res) => {
    res.json(products);
}

const findById = (req, res) => {
    res.json(products[req.params.id]);
}

module.exports = {
    findAll,
    findById
};