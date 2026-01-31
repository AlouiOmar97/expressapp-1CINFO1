const User = require('../models/user');

const findAll = async(req, res) => {
    const users = await User.find();
    res.json(users);
}

async function findById(req, res) {
    const user = await User.findById(req.params.id);
    res.json(user);
}

async function add(req, res) {
    let newUser = req.body;
    //userDB
    console.log(newUser);
    const userDB = await new User(newUser).save();
    res.json(userDB);
}
/*
async function update(req, res) {
    
    let user = await User.findById(req.params.id);
    //Object.assign(user, req.body);
    console.log(user);
    console.log(req.body);

    user.username= req.body.username;
    user.email= req.body.email;
    user.cin= req.body.cin;
    const updatedUser = await user.save();
    res.json(updatedUser);
}*/

const update = async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
}

async function deleteById(req, res) {
    const user = await User.findByIdAndDelete(req.params.id);
    res.json(user);
}

module.exports = {
    findAll,
    findById,
    add,
    update,
    deleteById
};