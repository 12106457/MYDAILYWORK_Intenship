import React from 'react'
import Navbar from '../components/Navbar'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom'
const TvPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      tvData.map((item)=>{
        return(
         <div>
          <Link to={`/tv/${item.id}`}>
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

export default TvPage
