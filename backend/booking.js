
let mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name:String,
    email:String,
    contact:Number,
    roomno:String,
    price:Number,
    duration:String,
    type:String,
    bookingdate:String,
    status:String
});

module.exports = mongoose.model('booking',bookingSchema);