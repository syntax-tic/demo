import React, { useState } from 'react'


const Books = async () => {
    const response = await fetch('http://localhost:5173/book/data/getAllBooks');
    const data = await response.json();
   

  return (
    <>
    {JSON.stringify(data)}
    </>
  );
}

export default Books
