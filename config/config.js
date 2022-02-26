const mongoose = require('mongoose');
require('dotenv').config();
const dbUrl = process.env.MONGO_ATLAS_URL ;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const connect = ()=>{
    return mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log("Error connecting", err);
    });
}

module.exports = connect;