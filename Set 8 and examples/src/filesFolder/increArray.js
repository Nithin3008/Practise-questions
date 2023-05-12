import { myContext } from "..";
import {useContext} from "react"
export default function Ff1()
{
    const arrOperations=useContext(myContext)

    return(<div>
        <button onClick={()=>arrOperations.arrayIncre(10)}>Add element</button>    
    </div>)
}