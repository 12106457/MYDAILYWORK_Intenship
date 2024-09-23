import { createContext, useContext, useState } from "react"

const Cartcontext=createContext();

export const CartProvider=({children})=>{
    const [cartitem,setcart]=useState([]);

    const addtocart=(item)=>{
        setcart([...cartitem, item]);
    }
    
    const removeitem=(item)=>{
        setcart(cartitem.filter((p)=> p!==item))
    }

    return(
        <Cartcontext.Provider value={{cartitem,addtocart,removeitem}}>
            {children}
        </Cartcontext.Provider>
    )
}

export const usecart=()=>{
    return useContext(Cartcontext);
}