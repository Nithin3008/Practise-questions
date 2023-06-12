import { useContext, useEffect, useState } from "react";
import { CartPizza } from "./context/PizzaCart";
export function Cartwatcher()
{
    const {cartItems}=useContext(CartPizza)
    let [totalPrice,setPrice]=useState(cartItems.reduce((acc,{price})=>(acc+price),0))

    useEffect(()=>
    {
       setPrice(cartItems.reduce((acc,{price})=>(acc+price),0))
    },[cartItems])
   
    function applyCoupon()
    {
        // totalPrice=totalPrice-5
        setPrice(totalPrice=totalPrice-5)
    }
    return(<div>
        <h1>Welcome to Cart</h1>
        <h2>Total PRice: {totalPrice}</h2>
        <button onClick={()=>applyCoupon()}>Apply Coupon</button>
         <div style={{display:"flex",border:"2px grey solid"}}>
            {cartItems.map((val)=><div style={{border:"2px grey solid"}}>
                <div>
                    <img style={{height:"200px"}} src={val.image}></img>
                </div>
                <div>
                    <p>Name: {val.name}</p>    
                    <p>Description: {val.description}</p>
                    <p>Price: {val.price}</p>
                    <p>Delivery Time: {val.delivery_time}</p>
                    
                </div>
            </div>)}
        </div>
    </div>)
}