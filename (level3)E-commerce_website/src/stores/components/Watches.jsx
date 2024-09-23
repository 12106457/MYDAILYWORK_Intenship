
import React from 'react'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom';


const Watches = () => {
    const firstfivewatch=watchData.slice(0,5);
    return (
      <>
      <div className="producttitle">
      <h2>Watches</h2>
      </div>
      <div className='productsection'>
        {firstfivewatch.map((item)=>{
          return(
              
                  <div className="imgbox">
                        <Link to='/watches'><img className='productimage' src={item.image} alt='Not found'/></Link>
                  </div>
          )
        })
      }
      </div>
      </>
    )
}

export default Watches
