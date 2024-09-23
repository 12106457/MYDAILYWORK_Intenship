import React from 'react'
import Navbar from '../components/Navbar'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const FurniturePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      furnitureData.map((item)=>{
        return(
         <div>
          <Link to={`/furniture/${item.id}`}>
            <div className="pageimg">
            <img src={item.image} alt="Not found" />
            </div>
            </Link>
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

export default FurniturePage
