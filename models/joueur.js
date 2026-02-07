const mongo =  require('mongoose')

const Schema = mongo.Schema;

const Joueur = new Schema({
    name: String,
    position: String,
    playNum: Number,
    jdate: Date
})

module.exports = mongo.model('joueur', Joueur);