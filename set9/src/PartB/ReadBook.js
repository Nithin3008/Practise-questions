import { ReadContext } from "./Context/ReadContext"
import { useContext } from "react"

export function ReadBook1()
{   
    const {Read}=useContext(ReadContext)
    console.log(Read)
    return(<div>
        <h1>This is Read Section</h1>
    </div>)

}