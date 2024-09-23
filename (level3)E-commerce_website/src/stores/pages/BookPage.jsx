import React from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'
import { Link } from 'react-router-dom'
const BookPage = () => {
  const mystyle={
    height:'90%'
  }
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      booksData.map((item)=>{
        return(
         <div>
          <Link to={`/books/${item.id}`}>
            <div className="pageimg">
            <img src={item.image} alt="Not found" style={mystyle}/>
            </div>
            </Link>
            <div className="productdetail">
                
                    {item.title},{item.author}
            
            </div>
         </div>
        )
      })
    }
    </div>
    </>
  )
}

export default BookPage
