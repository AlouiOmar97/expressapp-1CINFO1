users = [
        { id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
        { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' }, 
        { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' }, 
        { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
    ]

// function findAll(req, res) {
//     res.json(users);
// }

const findAll = (req, res) => {
    res.json(users);
}

function findById(req, res) {
    const user = users.find(user => user.id == req.params.id);
    res.json(user);
}

function add(req, res) {
    let newUser = req.body;
    newUser = { id: Date.now(), ...newUser };
    users.push(newUser);
    res.json(newUser);
}

function update(req, res) {
    let user = users.find(user => user.id == req.params.id);
    //Object.assign(user, req.body);
    console.log(user);
    console.log(req.body);

    user.username= req.body.username;
    user.email= req.body.email;
    user.status= req.body.status;
    res.json(user);
}

function deleteById(req, res) {
    const index = users.findIndex(user => user.id === Number(req.params.id));
    if (index !== -1) {
        users.splice(index, 1);
        res.json({ message: `User with id ${req.params.id} deleted.` });
    } else {
        res.status(404).json({ message: "User not found." });
    }
}

module.exports = {
    findAll,
    findById,
    add,
    update,
    deleteById
};