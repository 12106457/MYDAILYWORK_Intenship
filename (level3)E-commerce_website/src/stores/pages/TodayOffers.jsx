import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const TodayOffers = () => {
  const[product,setproduct]= useState([]);
  
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setproduct(json))
  },[])
 
  
  return (
    <>
    <Navbar/>
    
    <div className='pagesection'>
    
      {
      product.map((item)=>{
        return(
         <div>
          <div className='tag-img'>
           <img src='https://th.bing.com/th/id/OIP.BrYUv4Xy5YYgbhNKzhXVjAHaH_?rs=1&pid=ImgDetMain'  width={"44px"}/>
           </div>
         
          <Link to={`/special/${item.id}`}>
            <div className="pageimg special-img">
            <img src={item.image} alt="Not found"  />
            </div>
            </Link>
            <div className="productdetail">
                
                    {item.title}
            
            </div>
           
         </div>
         
        )
      })
    }
    </div>
    </>
  )
}

export default TodayOffers
