import React from 'react'
import { usecart } from '../stores/context/CartContext'
import Navbar from '../stores/components/Navbar';

const Cart = () => {
    const {cartitem,addtocart,removeitem}=usecart();
    let total=0;
    let exact_charge=0
  return (
    
    <>
    <Navbar/>
    <center><h1 >Your Cart Page</h1></center>

    {
    (cartitem.length===0)?(<div className='empty'><h1 > Cart is Empty</h1></div>):
    <div className="full">
      
    <div className='left'>
        {
            cartitem.map((item)=>{
                return(
                    <div className="cart-section">
                        <div className="cart-img">
                            <img src={item.image} alt="Note found" />
                        </div>
                        <div className="cart-detail">
                            <h3>{item.product}</h3>
                            <h3>{item.title}</h3>
                            <h3>{item.model}</h3>
                            <h2>{item.price}</h2>
                            <div style={{display:'none'}}>{total+=Number(item.price)}</div>
                        </div>
                        <div className="cart-btn">
                            <button onClick={()=>{removeitem(item)}}>Remove from Cart</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
    <div className="right">
       <div className="amount-section d-flex flex-column justify-content-center gap-10">
       <div className="amount ">
        <h3>Total Amount :  <span>{(total).toFixed(2)}</span></h3>
       
       </div>
       <div className="charge">
        
           
            <h3>Delivery Charge :  <span>{(exact_charge=(total>500)?0:50).toFixed(2)}</span></h3>
        </div>
        <div className="total">
            <h3>-----------------------------</h3>
            <h3>Total : <span>{(total+exact_charge).toFixed(2)}</span></h3>
            <h3>-----------------------------</h3>
        </div>

    </div>
       </div>
    </div>
    }
    </>
  )
}
export default Cart;