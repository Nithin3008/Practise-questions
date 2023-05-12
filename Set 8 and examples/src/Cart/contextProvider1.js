import React from "react"
import {useState} from "react"
export const CartContext=React.createContext()

export  function CartProvider({children})
{
    let [arr1,setArr1]=useState([1,2,3,4,5])
    function arrSetter(values)
    {
        arr1=[...arr1,values]
        setArr1(arr1)
        console.log(arr1)
    }
    return(<CartContext.Provider value={{arr1,arrSetter}}>
        {children}
    </CartContext.Provider>)

}