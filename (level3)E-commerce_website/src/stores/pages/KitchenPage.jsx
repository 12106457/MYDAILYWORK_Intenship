import React from 'react'
import Navbar from '../components/Navbar'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      kitchenData.map((item)=>{
        return(
         <div>
          <Link to={`/Kitchen/${item.id}`}>
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

export default KitchenPage
