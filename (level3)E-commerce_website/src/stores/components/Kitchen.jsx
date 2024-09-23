import React from 'react'
import {kitchenData} from '../data/kitchen'
import { Link } from 'react-router-dom';
 const Kitchen = () => {
   const firstfiveitem=kitchenData.slice(0,5);
  return (
    <>
    <div className="producttitle">
        <h2>Kitchen</h2>
    </div>
    <div className="productsection">
        {
            firstfiveitem.map((item)=>{
              return(  <div className="imgbox">
                   <Link to='/Kitchen'> <img src={item.image} alt="Not found" className='productimage' /></Link>
                </div>
              )
            })
        }
    </div>
    </>
  )
}
export default Kitchen

