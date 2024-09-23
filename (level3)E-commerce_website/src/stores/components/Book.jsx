import React from 'react'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom';

const Book = () => {
    const firstfivebooks=booksData.slice(0,5);
  return (
    <>
    <div className="producttitle">
   <h2>Books</h2>
   </div>
    <div className='productsection'>
      {firstfivebooks.map((item)=>{
        return(
            
                <div className="imgbox">
                   <Link to='/books'><img className='productimage' src={item.image} alt='Noty found'/></Link> 
                </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Book
