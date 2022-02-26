const mongoose = require('mongoose');
const url = process.env.MONGO_ATLAS_URL ;
// mongoose.connect();
mongoose.connect(dbUrl, connectionParams)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.log("Error connecting", err);
    });