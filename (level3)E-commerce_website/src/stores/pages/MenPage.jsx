import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'
import { Link } from 'react-router-dom'


const MenPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      menData.map((item)=>{
        return(
         <div>
            <Link to={`/men/${item.id}`}>
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

export default MenPage
