import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom';

const Mobiles = () => {
     
    const firstfivemobiles=mobileData.slice(0,5);

  return (
   <>
   <div className="producttitle">
   <h2>Mobiles</h2>
   </div>
   <div className='productsection'>
      {
        firstfivemobiles.map((item)=>{
            return(
                <div className='imgbox'>
                    <Link to={`/mobiles`}><img  className='productimage' src={item.image} alt='Not found'/></Link>
                </div>
            )
        })
      }
    </div>
   </>
  )
}

export default Mobiles
