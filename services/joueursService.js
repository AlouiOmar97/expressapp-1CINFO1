const Joueur = require('../models/joueur');

const findAll = async(req, res) => {
    const joueurs = await Joueur.find();
    res.json(joueurs);
}

async function findById(req, res) {
    const joueur = await Joueur.findById(req.params.id);
    res.json(joueur);
}

async function add(req, res) {
    let newJoueur = req.body;
    newJoueur.jdate = new Date()
    //joueurDB
    console.log(newJoueur);
    const joueurDB = await new Joueur(newJoueur).save();
    res.json(joueurDB);
}
/*
async function update(req, res) {
    
    let joueur = await Joueur.findById(req.params.id);
    //Object.assign(joueur, req.body);
    console.log(joueur);
    console.log(req.body);

    joueur.name= req.body.name;
    joueur.position= req.body.position;
    joueur.playNum= req.body.playNum;
    joueur.jdate = new Date()
    const updatedJoueur = await joueur.save();
    res.json(updatedJoueur);
}*/

const update = async (req, res) => {
    const joueur = await Joueur.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(joueur);
}

async function deleteById(req, res) {
    const joueur = await Joueur.findByIdAndDelete(req.params.id);
    res.json(joueur);
}

module.exports = {
    findAll,
    findById,
    add,
    update,
    deleteById
};