const products = require('./products.json');

const findAll = (req, res) => {
    res.json(products);
}

const findById = (req, res) => {
    res.json(products[req.params.id]);
}

const calculateTotalPrice = (req, res) => {
    const product = products[req.params.id];
    const quantity = parseInt(req.params.qt);
    const order = {
        "id": req.params.id,
        "qt": quantity,
        "unit_price": product.price,
        "total_price": product.price * quantity
    }
    res.json(order);
}

const productsInStock = (req, res) => {
    let productsInStock = [];
    const qt = parseInt(req.params.qt);
    for (const id in products) {
        if(products[id].stock >= qt) {
            productsInStock.push(products[id]);
        }
    }
    res.json(productsInStock);
}

module.exports = {
    findAll,
    findById,
    calculateTotalPrice,
    productsInStock
};