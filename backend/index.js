const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/Room-booking");
const cors = require('cors');
app.use(cors());
let user = require('./user');
let feedback = require('./feedback');
let admin = require('./admin');
let room = require('./room');
let booking = require('./booking');

const bodyParser = require('body-parser');
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.use(express.json());


app.post('/signup',async (req,res)=>{
    let result = new user(req.body);
    let data = await result.save();
    res.send(data);
});

app.post('/login',async (req,res)=>{
    console.log("Login");
    if (req.body.email && req.body.password){
        let data = await user.findOne(req.body).select('-password');
        if (data){
            res.send(data);
        }else{
            res.send("Email and Password no matched");
        }
    }else{
        res.send("Provide both email and password");
    }
    
});


app.post('/feedback',async (req,res)=>{
    let result = new feedback(req.body);
    let data = await result.save();
    res.send(data);
});

app.post('/adminlogin',async (req,res)=>{
    if (req.body.username && req.body.password){
        let data = await admin.findOne(req.body).select('-password');
        if (data){
            res.send(data);
        }else{
            res.send("Username and Password no matched");
        }
    }else{
        res.send("Provide both username and password");
    }
    
});

app.get('/viewfeedback',async (req,res)=>{
    let data = await feedback.find();
    res.send(data);
});

app.delete('/deletefeedback/:id',async (req,res)=>{
    let data = await feedback.deleteOne({_id:req.params.id});
    res.send(data);
});


app.post('/addroom',async (req,res)=>{
    let result = new room(req.body);
    let data = await result.save();
    res.send(data);
});

app.get('/getroom',async (req,res)=>{
    let data = await room.find();
    res.send(data);
});

app.delete('/deleteroom/:id',async (req,res)=>{
    let data = await room.deleteOne({_id:req.params.id});
    res.send(data);
});

app.get('/editroom/:id',async (req,res)=>{
    let data = await room.findOne({_id:req.params.id});
    res.send(data);
});

app.put('/updateroom/:id',async (req,res)=>{
    let data = await room.updateOne(
        {_id: req.params.id },
        {$set: req.body }
    );
    res.send(data);
});


app.get('/viewusers',async (req,res)=>{
    let data = await user.find();
    res.send(data);
});

app.delete('/deleteuser/:id',async (req,res)=>{
    let data = await user.deleteOne({_id:req.params.id});
    res.send(data);
});

app.post('/booking',async (req,res)=>{
    let result = new booking(req.body);
    let data = await result.save();
    res.send(data);
});

app.get('/userbooking/:email',async (req,res)=>{
    let data = await booking.find({email:req.params.email});
    res.send(data);
});


app.get('/bookings',async (req,res)=>{
    let data = await booking.find();
    res.send(data);
});

app.delete('/deletebooking/:id',async (req,res)=>{
    let data = await booking.deleteOne({_id:req.params.id});
    res.send(data);
});

app.get('/editbooking/:id',async (req,res)=>{
    let data = await booking.findOne({_id:req.params.id});
    res.send(data);
});

app.put('/updatebooking/:id',async (req,res)=>{
    let data = await booking.updateOne(
        {_id: req.params.id },
        {$set: req.body }
    );
    res.send(data);
});

app.get('/searchbooking/:key',async (req,res)=>{
    let result = await booking.find({
        "$or":[
            { email:{$regex:req.params.key,$options: 'i'} },
            { bookingdate:{$regex:req.params.key,$options: 'i'} },
            { name:{$regex:req.params.key,$options: 'i'} }
        ]
    });
    res.send(result);
});

app.get('/searchroom/:key',async (req,res)=>{
    let result = await room.find({
        "$or":[
            { type:{$regex:req.params.key,$options: 'i'} }
        ]
    });
    res.send(result);
});

//$options: 'i' :- is use to remove case sensitive search.


app.listen(4500);