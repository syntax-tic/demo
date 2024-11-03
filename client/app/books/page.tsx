
import React from 'react'
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';

interface Book{
  author:string,
  title:string,
  isbn:string
}

const Books = async () => {
    const response = await fetch('http://localhost:5173/book/data/getAllBooks');
    const data = await response.json();

  return (
    <>
    <Navbar/>
    {data.map((book:Book) =>{
        return (
          <BookCard key={book.isbn} book={book}/>
        )
    })}
    </>
  );
}

export default Books
