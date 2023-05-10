import { useState } from "react"

export default function FF5()
{
    const [color,setColor]=useState("")
    function changeColor(event)
    {
        const value=event.target.value
        setColor(value)
        console.log(value)
    }
    return(<div style={{backgroundColor:`${color}`}}>
        <h1>Set BackGround Color      </h1>
        <select onChange={changeColor}>
            <option value="white">white</option>
            <option value="pink">pink</option>
            <option value="#FF6347">Tomato</option>
            <option value="#7FFFD4">Aqua Marine</option>
        </select>
    </div>)
}