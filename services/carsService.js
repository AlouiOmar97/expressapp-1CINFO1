const cars = require('./cars.json');

const findAll = (req, res) => {
    res.json(cars);
}

const findById = (req, res) => {
    res.json(cars[req.params.id]);
}

const calculateTotalPrice = (req, res) => {
    const car = cars[req.params.id];
    const quantity = parseInt(req.params.qt);
    const order = {
        "id": req.params.id,
        "qt": quantity,
        "unit_price": car.price,
        "total_price": car.price * quantity
    }
    res.json(order);
}

const carsInStock = (req, res) => {
    let carsInStock = [];
    const qt = parseInt(req.params.qt);
    for (const id in cars) {
        if(cars[id].stock >= qt) {
            carsInStock.push(cars[id]);
        }
    }
    res.json(carsInStock);
}

module.exports = {
    findAll,
    findById,
    calculateTotalPrice,
    carsInStock
};