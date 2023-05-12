import { CartContext } from "./contextProvider1"
import {useContext} from "react"
export default function Prod()
{
    const {arrSetter}=useContext(CartContext)
    function addingItem()
    {
        const x=Math.random()*95
        arrSetter(x)
    }
    return(<div>
        <button onClick={()=>addingItem()}>Add value</button>
    </div>)
}