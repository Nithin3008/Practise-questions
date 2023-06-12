import { useContext } from "react";
import { PizzaContext } from "./context/DataContext";
import {HandlerContext} from "./context/functionHandlers"
import { CartPizza } from "./context/PizzaCart";
export function Menu1()
{
    const {Pizza}=useContext(PizzaContext)
    const{settingVeg,settingSpicy,settingSearch,newData}=useContext(HandlerContext)
    
    const {AddtoCart}=useContext(CartPizza)
        
    
    return(<div>
        <h2>Filters:</h2>
        <div>
            <input onChange={(e)=>settingSearch(e)}  placeholder="Enter Pizza"></input>
            <input onClick={(e)=>settingVeg(e)}   value="is_vegetarian" type="checkbox"></input>Veg
            <input  onClick={(e)=>settingSpicy(e)}  value="is_spicy" type="checkbox"></input>Spicy
            <input   value="l2h" type="Radio"></input>Sort(Low to High)
            <input value="h2l" type="Radio"></input>Sort(High to low)
        </div>
        <h1>Menus</h1>
        <div style={{display:"flex",border:"2px grey solid"}}>
            {newData.map((val)=><div style={{border:"2px grey solid"}}>
                <div>
                    <img style={{height:"200px"}} src={val.image}></img>
                </div>
                <div>
                    <p>Name: {val.name}</p>    
                    <p>Description: {val.description}</p>
                    <p>Price: {val.price}</p>
                    <p>Delivery Time: {val.delivery_time}</p>
                    <button onClick={(e)=>AddtoCart(val,e)}>Add to Cart</button>
                </div>
            </div>)}
        </div>





    </div>)
}