import { createContext, useState } from "react";

export const CartPizza=createContext()
export function Cart1({children})
{
    const [cartItems,setCart]=useState([{
        id: 1,
        name: 'Margherita Pizza',
        description: 'Fresh mozzarella, tomato sauce, and basil.',
        price: 12.99,
        image:
          'https://www.cookingchanneltv.com/content/dam/images/cook/fullset/2011/1/6/0/CCEV103_Margherita-Pizza_s4x3.jpg',
        is_vegetarian: true,
        is_spicy: false,
        delivery_time: 30,
      },])
    function AddtoCart(pizza,e)
    {
        e.target.innerText="Go to Cart"
        let newPizza
        let finder=cartItems.find((val)=>val.id==pizza.id)
        if(finder===undefined)
        {
            newPizza=[...cartItems,pizza]
        }
        else if(finder.id==pizza.id)
        {
            newPizza=[...cartItems]
        }
        else
        {
            newPizza=[...cartItems,pizza]
        }
        setCart([...newPizza])
    }
    return(
        <CartPizza.Provider value={{AddtoCart,cartItems}}>
            {children}
        </CartPizza.Provider>
    )
}