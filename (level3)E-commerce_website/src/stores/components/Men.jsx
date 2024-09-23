import React from 'react'
import {menData} from '../data/men'
import { Link } from 'react-router-dom';

const Men = () => {
    const firstfiveMen=menData.slice(0,5);
  return (
   <>
   <div className="producttitle">
   <h2>Men Clothes</h2>
   </div>
    <div className='productsection'>
        {
            firstfiveMen.map((item)=>{
                return (
                    <div className="imgbox">
                          <Link to='/men'><img className='productimage' src={item.image} alt='Not found'/></Link>
                    </div>
                )
            })
        }
      
    </div>
   </>
  )
}

export default Men
