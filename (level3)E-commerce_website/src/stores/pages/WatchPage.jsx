import React from 'react'
import Navbar from '../components/Navbar'
import { watchData } from '../data/watch'
import { Link } from 'react-router-dom'

const WatchPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      watchData.map((item)=>{
        return(
         <div>
            <Link to={`/watches/${item.id}`}>
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

export default WatchPage
