import { useState } from "react"

export default function FF9()
{
    const [borderSize,setSize]=useState("")
    function changeSize(event)
    {
        const size=event.target.value
        setSize(size)
        console.log(size)
    }
   
    return(<div>
        <div style={{border:"5px black solid",borderRadius:`${borderSize}px`}}>
            <h1>Card with Rounded Corners</h1>
            Border Radius: <input type="range" id="points" name="points" min="0" max="100" onChange={changeSize}></input>
        </div>
       
    </div>)
}