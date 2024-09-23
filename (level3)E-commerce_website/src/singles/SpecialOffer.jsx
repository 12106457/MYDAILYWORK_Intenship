import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar';
import { usecart } from '../stores/context/CartContext'


const SpecialOffer = () => {
    const [product,setProduct]=useState({});
    
    const {id}=useParams();
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(info=>setProduct(info))
    },[])
    // const product =mobileData.find((item)=>{return item.id===id});
    console.log(id);
    
    const {cartitem,addtocart}=usecart();
    console.log(cartitem.length);
  return (
    <>
    <Navbar/>
    <div className='detailpage'>
        <div className="detail-img">
            <img src={product.image} alt="Not found"  />
        </div>
        <div className="product-details space">
        <div className="detail-company">
            <h2>{product.title}</h2>
        </div>
        <div className="detail-model space">
            <h3>{product.category}</h3>
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

export default SpecialOffer
