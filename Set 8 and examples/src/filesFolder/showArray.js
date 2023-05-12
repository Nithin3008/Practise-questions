import { myContext } from "..";
import {useContext} from "react"
export default function Ff2()
{
    const arrOperations=useContext(myContext)

    return(<div>
        <h1>{arrOperations.arr1}</h1>
    </div>)
}