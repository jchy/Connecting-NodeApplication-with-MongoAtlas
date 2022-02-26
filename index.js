const mongoose = require('mongoose');
const express = require('express');
const User = require('./models/user.model');

const app = express();

const PORT = 3000;

const dbUrl = "mongodb+srv://Jaswant:UvKK5hfnKtBaSaQ2@cluster0.awjw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log("Error connecting", err);
    });

app.listen(PORT, ()=>{
    console.log(`Server is listening on PORT : ${PORT}`);
});

app.get('/insert',(req, res)=>{
    var user = new User();
    user.name = "Jaswant"
    user.email = "abc@gmail.com"
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
