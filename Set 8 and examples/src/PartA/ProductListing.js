import {useContext} from "react"
import {DataContext} from "./DataContext"
import { CartContext } from "./CartContext";
import {Link} from "react-router-dom"
export default function FF1()
{
    const {arrData}=useContext(DataContext)
    const {addWhisItems,addCartItems}=useContext(CartContext)
    console.log(arrData)
    return(<div>
        <h1>Product Listing page</h1>
        {arrData.map((val)=><div><h1>{val.name}</h1><p>{val.description}</p><p>Price:{val.price}</p> <Link to={`/productDetail/${val.id}`}>Visit Item</Link><button onClick={()=>addCartItems(val)}>Add to Cart</button><button onClick={()=>addWhisItems(val)}>Add to WhisList</button></div>)}
        {/* {arrData.map((val)=>{<div><h2>{val.name}</h2><p>{val.description}</p><p>{val.price}</p> <Link to={`/productDetail/${val.id}`}>Visit Item</Link></div>})} */}
    </div>)
}