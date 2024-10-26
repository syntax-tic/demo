const {Book} = require('../models/book-model');

const addBook = async (req, res) =>{
    try{
        const {isbn, title, author} = req.body;
        const bookExists = await Book.findOne({isbn:isbn});

        if(bookExists){
            return res.status(400).json({msg:"Book already exists with same ISBN"});
        }

        const bookCreated = await Book.create({isbn, title, author});
        res.status(201).json({
            msg:"Book added successfully",
            bookCreated
        });

    }catch(e){
        console.log(e);
    }
}


const getBook = async (req, res)=>{
    try{
        let found;
        const {isbn} = req.body;
        if(isbn){
             found = await Book.findOne({isbn:isbn});
             return found? res.json({found}):res.status(404).json({msg:"Book not found"});
        }
        return res.json({msg:"enter correct isbn"});
        
    }catch(e){
        console.log(e);
    }
}

const getAllBooks = async  (req, res)=>{
    const booksExist = await Book.find();
    if(booksExist){
        
        return res.status(200).json(booksExist);

    }

    return res.json({msg:"No books found"});

}

module.exports = {addBook, getBook, getAllBooks};
