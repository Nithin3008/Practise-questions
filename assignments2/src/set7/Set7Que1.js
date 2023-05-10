import {fakeFetch} from "./fakeFetch/fakeFetch1"
import {useEffect, useState} from"react"
export default function FF1()
{
    const [outputData,setOutput]=useState({})
    const [buttonChekcer,setChecker]=useState(false)
    const [buttonValue,setButton]=useState("Switch to farhenit")
    useEffect(()=>
    {
        const url=async ()=>
        {
            const data1=await fakeFetch('https://example.com/api/weather')
            console.log(data1.data)
            setOutput(data1.data)
        }
        url()
    },[])
   
    function converter()
    {
       if(buttonChekcer===false)
       {
        const value=(outputData.temperature * 1.8) + 32
        const farheData={...outputData}
        farheData.temperature=value
        setOutput(farheData)
        setButton("set to celsius")
        setChecker(true)
       }
       else
       {
            const value1=(outputData.temperature - 32) / 1.8
            const celsiusData={...outputData}
            celsiusData.temperature=value1
            setOutput(celsiusData)
            
            setChecker(false)
            setButton("Switch to farhenit")
       }

    }
    return(<div>
        <h1>Set 7</h1>
        <h1>Weather</h1>
        <div>
            <p>
               temperature: {outputData.temperature}
            </p>
<p>
    humidity:{outputData.humidity}
</p>
            <p>
             windSpped:   {outputData.windSpeed}
            </p>
        </div>
        <button onClick={()=>converter()}>{buttonValue}</button>
    </div>)
}