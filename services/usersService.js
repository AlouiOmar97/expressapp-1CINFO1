users = [
        { id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
        { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' }, 
        { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' }, 
        { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
    ]

function findAll(req, res) {
    res.json(users);
}

const findAll = (req, res) => {
    res.json(users);
}

function findById(req, res) {
    const user = users.find(user => user.id === req.params.id);
    res.json(user);
}


module.exports = {
    findAll,
    findById
};