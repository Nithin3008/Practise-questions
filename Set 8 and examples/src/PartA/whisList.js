import { useContext } from "react";
import { CartContext } from "./CartContext";
export default function F2()
{
    const {ListItems,removeWhisItems}=useContext(CartContext)
    console.log(ListItems)
    return(<div>
        <h1>This is the WhisList</h1>
        <h2>Items :{ListItems.length}</h2>
        {ListItems.map((val)=><div><h1>{val.name}</h1><p>{val.description}</p><p>Price:{val.price}</p><button onClick={()=>removeWhisItems(val.id)}>Remove Item from WhisList</button> </div>)}
    </div>)

}