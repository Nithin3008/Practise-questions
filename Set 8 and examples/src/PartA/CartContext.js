import { createContext, useState } from "react";

export const CartContext=createContext()
export function CartProvider({children})
{
    let [cartItems,setItems]=useState([])
    let [ListItems,setList]=useState([])
    function addCartItems(values)
    {
        cartItems=[...cartItems,values]
        setItems(cartItems)
    }
    function addWhisItems(values)
    {
        ListItems=[...ListItems,values]
        setList(ListItems)
    }
    function removeCartItems(values1)
    {
        cartItems=cartItems.filter((val)=>val.id!=values1)
        // console.log(cartItems)
        setItems(cartItems)
    }
    function removeWhisItems(values1)
    {
        ListItems=ListItems.filter((val)=>val.id!=values1)
        console.log(ListItems)
        setList(ListItems)
    }
    return(
        <CartContext.Provider value={{cartItems,addCartItems,removeCartItems,removeWhisItems,addWhisItems,ListItems}}>
            {children}
        </CartContext.Provider>
    )
}