import React from 'react'
import {mobileData} from '../stores/data/mobiles'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { usecart } from '../stores/context/CartContext'

const MobileSingle = () => {
    const {id}=useParams();
    const product =mobileData.find((item)=>{return item.id===id});
    console.log(id);
    
    const {cartitem,addtocart}=usecart();
    console.log(cartitem.length);
  return (
    <>
    <Navbar/>
    <div className='detailpage'>
        <div className="detail-img">
            <img src={product.image} alt="Not found" />
        </div>
        <div className="product-details space">
        <div className="detail-company">
            <h2>{product.company}</h2>
        </div>
        <div className="detail-model space">
            <h3>{product.model}</h3>
        </div>
        <div className="detail-price space">
            <h2>{product.price}</h2>
        </div>
        <div className="detail-des space">
            <p>{product.description}</p>
        </div>
        <button onClick={()=>addtocart(product)}>Add to Cart</button>
        </div>
      
    </div>
    </>
  )
}

export default MobileSingle
