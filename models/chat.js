const mongo =  require('mongoose')

const Schema = mongo.Schema;

const Chat = new Schema({
    content: String,
    status: String,
    cdate: Date
})

module.exports = mongo.model('chat', Chat);