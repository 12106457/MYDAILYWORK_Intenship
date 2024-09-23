import React from 'react'
import Navbar from '../components/Navbar'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const AcPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      acData.map((item)=>{
        return(
         <div>
          <Link to={`/ac/${item.id}`}>
            <div className="pageimg">
            <img src={item.image} alt="Not found" />
            </div>
            </Link>
            <div className="productdetail">
                
                    {item.company},{item.model}
            
            </div>
         </div>
        )
      })
    }
    </div>
    </>
  )
}

export default AcPage
