let mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    rno:String,
    price:Number,
    image:String,
    type:String,
    status:String
});

module.exports = mongoose.model('room',roomSchema);