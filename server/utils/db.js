const mongoose = require("mongoose");
const URI = process.env.MONGODB_URI;

const connectDb = async () =>{
    try{
        mongoose.connect(URI);
        console.log("Connection to database successful");
    }catch(e){
        console.log("Error connecting to database\nerror:", e);
    }
}

module.exports = connectDb;