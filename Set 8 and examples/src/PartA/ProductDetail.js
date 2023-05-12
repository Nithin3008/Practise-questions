import {DataContext} from "./DataContext"

import {useContext} from "react"
import { useParams } from "react-router"

export default function Details()
{
    const {arrData}=useContext(DataContext)
    
    const {prdId}=useParams()
    const data1=arrData.find((val)=>val.id==prdId)
    console.log(data1)
    console.log(prdId)
    return(<div>
        <h1>{prdId}</h1>
        <div>
            <h1>{data1.name}</h1>
            <p>{data1.description}</p>
            <h3>Price: {data1.price}</h3>
            <p>Quantity: {data1.quantity}</p>
            <p>Category : {data1.category}</p>
        </div>
    </div>)
}