import React from 'react'
import Navbar from '../components/Navbar'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'
const FridgePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      fridgeData.map((item)=>{
        return(
         <div>
          <Link to={`/fridge/${item.id}`}>
            <div className="pageimg">
            <img src={item.image} alt="Not found" />
            </div></Link>
            <div className="productdetail">
                
                    {item.brand},{item.model}
            
            </div>
         </div>
        )
      })
    }
    </div>
    </>
  )
}

export default FridgePage
