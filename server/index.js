require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    methods : ['POST', 'GET', 'PUT', 'DELETE'],
    allowedHeaders : ['Content-Type', 'Authorization']
}))
const PORT = 5173;
const connectDb = require('./utils/db');
const bookRouter = require('./router/book-router');
const authRouter = require('./router/auth-router');

app.use(express.json());
app.use('/api', authRouter);   
app.use('/book',bookRouter);
app.get('/', (req, res)=>{
    res.status(200).send(`Welcome to home page`);
})

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server listening at http://localhost:${PORT}`);
    
    })
})
