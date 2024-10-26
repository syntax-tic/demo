require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const connectDb = require('./utils/db');
const bookRouter = require('./router/book-router');

app.use(express.json());
app.use('/book',bookRouter);
app.get('/', (req, res)=>{
    res.status(200).send(`Welcome to home page`);
})

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening at http://localhost:${PORT}`);
    
    })
})
