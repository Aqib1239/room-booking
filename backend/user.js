let mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    contact:Number,
    gender:String,
    address:String
});

module.exports = mongoose.model('registration',userSchema);