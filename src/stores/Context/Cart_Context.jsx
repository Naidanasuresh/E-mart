import { createContext, useContext, useState } from "react";



const CartContext= createContext()
export const CartProvider=({children})=>{
    const [cartitems, setcartitems]=useState([])
    const addtocart =(item)=>{
        setcartitems([...cartitems, item])

    }

const removefromcart=(item)=>{
    setcartitems(cartitems.filter((apple)=> apple!==item));

}

return (
    <CartContext.Provider value={{cartitems, addtocart, removefromcart}}>
        {children}
    </CartContext.Provider>
);
};

export const usecart=()=>{
    return useContext(CartContext)

};