import React from 'react'
import { mobileData } from '../data/mobiles'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
const MobilePage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      mobileData.map((item)=>{
        return(
          
         <div>
            <Link to={`/mobiles/${item.id}`}>
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

export default MobilePage
