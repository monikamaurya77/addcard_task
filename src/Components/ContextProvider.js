import { createContext, useEffect, useState } from "react";

 export const allContext =createContext();

function CustomProvider({children}){
    const [product,setProduct]=useState([]);
    const[cart,setCart]=useState([])
    const [cartCount,setCartCount]=useState(0);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((data)=>{
          setProduct(data);
        })

    },[])
    return <allContext.Provider value={{product,cart,setCart,cartCount,setCartCount}}>
        {children}
    </allContext.Provider>
}
export  default  CustomProvider;
