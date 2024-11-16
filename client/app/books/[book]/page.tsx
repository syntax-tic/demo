import Navbar from '@/app/components/Navbar';
import React from 'react'

interface ParamsProps{
  params : {
    book: string
  }
}

const page = async ({params} : ParamsProps) => {
  const book = await params.book;
  return (
    <>
    <Navbar/>
    <div>
      <h1>Hello World</h1>
      {book} 
    </div>
    </>
  )
}

export default page;
