import React from 'react'
import {computerData} from '../data/computers'
import { Link } from 'react-router-dom';
const Computer = () => {
    const firstfivecomputer=computerData.slice(0,5);
  return (
    <>
    <div className="producttitle">
   <h2>Computers</h2>
   </div>
    <div className='productsection'>
      {firstfivecomputer.map((item)=>{
        return(
            
                <div className="imgbox">
                      <Link to='/computers'><img className='productimage' src={item.image} alt='Noty found'/></Link>
                </div>
        )
      })
    }
    </div>
    </>
  )
}

export default Computer
