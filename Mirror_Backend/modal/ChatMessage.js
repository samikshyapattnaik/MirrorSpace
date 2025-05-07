const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
    sender:String,
    text:String,
    timestamp:{
        type:Date,
        default:Date.now,
    },
})
module.exports = mongoose.model("chatmessage",ChatMessageSchema)