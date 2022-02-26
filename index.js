const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/user.model');
const connect = require('./config/config');
require('dotenv').config();


const app = express();

const PORT = 3000;

const start = async ()=>{
    await connect();

    app.listen(PORT, ()=>{
        console.log(`Server is listening on PORT : ${PORT}`);
    });
}
start();

app.get('/insert', (req, res)=>{
    var user = new User();
    user.name = "Jaswant"
    user.email = "lmn@gmail.com"
    user.password = "abcd@123"
    user.save((err,data)=>{
        if(err){ 
            console.log(err);
        }
        res.status(200).send({"msg" : "Inserted in databse"})
    })
})

app.get("/read",(req,res)=>{
    User.find((err, data)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    })
});

app.get("/update", (req, res)=>{
    User.findByIdAndUpdate(req.query.id, {name : req.query.name}, (err, data)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    })
});

app.get("/delete", (req,res)=>{
    User.findByIdAndDelete(req.query.id, (err, data)=>{
        if(err){
            return res.status(500).send(err);
        }
        return res.status(200).send(data);
    })
})
