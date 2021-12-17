
import React, { useState, createContext, useContext } from "react";

const CartContext  = createContext()


export default function CartProvider ({children}) {
   const [count,setCount]= useState(0);
   return(
       <CartContext.Provider value={
           { count ,setCount}
       }>
       {children}
       </CartContext.Provider>
   );
};

export function useCount()
{
   const context = useContext(CartContext)
   const {count, setCount} = context;
   return { count,setCount}
}