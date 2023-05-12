import { useContext } from "react";
import { CartContext } from "./CartContext";
export default function F1()
{
    const {cartItems,removeCartItems}=useContext(CartContext)
    console.log(cartItems)
    return(<div>
        <h1>This is the cart</h1>
        <h2>Items :{cartItems.length}</h2>
        {cartItems.map((val)=><div><h1>{val.name}</h1><p>{val.description}</p><p>Price:{val.price}</p><button onClick={()=>removeCartItems(val.id)}>Remove Item from Cart</button> </div>)}
    </div>)

}