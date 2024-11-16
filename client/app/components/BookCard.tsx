"use client"
import React from 'react'
import styled from 'styled-components'


interface Book{
    author:string,
    title:string,
    isbn:string
}
const Card = styled.div`
  border: 1px solid #ddd;
  padding: 1rem;
  border-radius: 8px;
  width: 250px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 1rem;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  color: #4e54c8;
`;

const Author = styled.p`
  font-size: 1rem;
  color: #333;
  margin: 0.5rem 0;
`;

const ISBN = styled.p`
  font-size: 0.9rem;
  color: #555;
`;
const Button = styled.button`
  padding: 0.5rem;
  margin-top: 1rem;
  background-color: #4e54c8;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4348b5;
  }
`;
interface BookCardProps {
    book: Book;
    
  }


const BookCard:React.FC<BookCardProps> = ({book}) => {
    const handleClick = (book:Book) => {
        alert(`Details\n\nBook: ${book.title}\nAuthor: ${book.author}\nISBN: ${book.isbn} `);
      };
  return (
    <Card>
         <Title>{book.title}</Title>
    <Author>By {book.author}</Author>
    <ISBN>ISBN: {book.isbn}</ISBN>
    <Button onClick={()=>handleClick(book)}>Details</Button>
  </Card>
  )
}

export default BookCard;
