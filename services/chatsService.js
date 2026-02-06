const Chat = require('../models/chat');
var socketIo = require('socket.io')
 
 
function socketIO(server) {
    const io = socketIo(server);
     io.on("connection",(socket)=>{
        console.log("user connected with socket id"+socket.id); 
        io.emit("msg","msg from serveur")
    })
 return io;
}

const findAll = async(req, res) => {
    const chats = await Chat.find();
    res.json(chats);
}

async function findById(req, res) {
    const chat = await Chat.findById(req.params.id);
    res.json(chat);
}

async function add(req, res) {
    let newChat = req.body;
    newChat.cdate = new Date();
    newChat.status = "seen";
    //chatDB
    console.log(newChat);
    const chatDB = await new Chat(newChat).save();
    res.json(chatDB);
}
/*
async function update(req, res) {
    
    let chat = await Chat.findById(req.params.id);
    //Object.assign(chat, req.body);
    console.log(chat);
    console.log(req.body);

    chat.content= req.body.content;
    chat.status= req.body.status;
    chat.cdate= req.body.cdate;
    const updatedChat = await chat.save();
    res.json(updatedChat);
}*/

const update = async (req, res) => {
    const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(chat);
}

async function deleteById(req, res) {
    const chat = await Chat.findByIdAndDelete(req.params.id);
    res.json(chat);
}

module.exports = {
    socketIO,
    findAll,
    findById,
    add,
    update,
    deleteById
};