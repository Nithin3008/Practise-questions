import { FavContext } from "./Context/FavContext"
import { useContext } from "react"

export function FavBook1()
{   
    const {Fav}=useContext(FavContext)
    console.log(Fav)
    return(<div>
        <h1>THis is Fav</h1>
    </div>)

}