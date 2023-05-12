import { CartContext } from "./contextProvider1"
import {useContext} from "react"
export default function Cart()
{
    const {arr1}=useContext(CartContext)
    return(<div>
       {arr1.map((val)=><h1>{val}</h1>)}
    </div>)
}