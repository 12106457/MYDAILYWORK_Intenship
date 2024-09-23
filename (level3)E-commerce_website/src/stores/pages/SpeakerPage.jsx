import React from 'react'
import Navbar from '../components/Navbar'
import {speakerData} from '../data/speaker'
import { Link } from 'react-router-dom'
const SpeakerPage = () => {
  return (
    <>
    <Navbar/>
    <div className='pagesection'>
      {
      speakerData.map((item)=>{
        return(
         <div>
          <Link to={`/speakers/${item.id}`}>
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

export default SpeakerPage
