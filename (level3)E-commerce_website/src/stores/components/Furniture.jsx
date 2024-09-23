import React from 'react'
import {furnitureData} from '../data/furniture'
import { Link } from 'react-router-dom';
const Furniture = () => {
    const firstfivefurniture=furnitureData.slice(0,5);
  return (
    <>
    <div className="producttitle">
   <h2>Furniture</h2>
   </div>
    <div className='productsection'> 
        {
            firstfivefurniture.map((item)=>{
                return (
                    <div className="imgbox">
                       <Link to='/furniture'> <img src={item.image} alt="Not found" className="productimage" /></Link>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}

export default Furniture
