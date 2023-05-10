import { useEffect, useState } from "react"
import { fakeFetch } from "./fakeFetch/fakeFetch5"
export default function Ff5()
{
    const [quote,setQuote]=useState({})
    const [num,setNum]=useState(0)
    useEffect(()=>
    {
        const url=async ()=>
        {
            const recData=await fakeFetch()
            console.log(recData)
            setQuote(recData)
        }
        url()
    },[num])
    function newQuote()
    {
        setNum(num+1)
    }
    console.log("set 7 que5")
    return(<div>
        <h1>Quotes</h1>
        <div>
            <p>{quote.content}</p>
            <p>{quote.author}</p>
        </div>
        <button onClick={()=>newQuote()}>New Quote</button>
    </div>)
}