import React from 'react'
import {acData} from '../data/ac'
import { Link } from 'react-router-dom';
const AC = () => {
    const firstfiveac=acData.slice(0,5);
  return (
    <>
   <div className="producttitle">
   <h2>AC</h2>
   </div>
    <div className='productsection'>
        {
            firstfiveac.map((item)=>{
                return(
                    <div className="imgbox">
                        <Link to='/ac'><img src={item.image} alt="Not Found" className="productimage" /></Link>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default AC
