import React from 'react'
import Navbar from '../stores/components/Navbar';
import { fridgeData } from '../stores/data/fridge';
import { useParams } from 'react-router-dom';
import { usecart } from '../stores/context/CartContext';

const FridgeSingle = () => {
    const {id}=useParams();
    const product=fridgeData.find((item)=>{return item.id===id});
    const {cartitem,addtocart}=usecart();
    
  return (
   <>
    <Navbar/>
    <div className="detailpage">
        <div className="detail-img">
            <img src={product.image} alt="not found" />
        </div>
        <div className="product-details ">
            <div className="detail-company space">
                <h2>{product.brand}</h2>
            </div>
            <div className="detail-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="detail-price space">
                <h2>{product.price}</h2>
            </div>
            <div className="detail-desc space">
                <p>{product.description}</p>
            </div>
            <button onClick={()=>{addtocart(product)}}>Add to Card</button>
        </div>
    </div>
   </>
  )
}

export default FridgeSingle
