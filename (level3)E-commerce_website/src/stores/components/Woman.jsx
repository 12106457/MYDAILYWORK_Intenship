import React from 'react'
import {womanData} from '../data/woman'
import { Link } from 'react-router-dom';
const Woman = () => {
    const firstfivewoman=womanData.slice(0,5);
  return (
   <>
   <div className="producttitle">
   <h2>Woman Clothes</h2>
   </div>
     <div className='productsection'>
      {
        firstfivewoman.map((item)=>{
          return(
            <div className="imgbox">
                <Link to='/woman'><img src={item.image} alt="Not found" className='productimage' /></Link>
            </div>
          )
        })
      }
    </div>
   </>
  )
}

export default Woman
