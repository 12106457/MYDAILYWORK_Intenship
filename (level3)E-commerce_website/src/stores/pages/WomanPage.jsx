import React from 'react'
import Navbar from '../components/Navbar'
import { womanData } from '../data/woman'
import { Link } from 'react-router-dom'



const WomanPage = () => {
  // const mystyle={
  //   height:'90%'
  // }
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      womanData.map((item)=>{
        return(
         <div>
          <Link to={`/woman/${item.id}`}>
            <div className="pageimg">
            <img src={item.image} alt="Not found"  />
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

export default WomanPage
