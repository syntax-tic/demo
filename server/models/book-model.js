const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
    isbn:{type:String, required:true},
    title:{type:String, required:true},
    author:{type:String, required:true},
    
});

const Book = new model('Book', bookSchema);

module.exports = {Book};