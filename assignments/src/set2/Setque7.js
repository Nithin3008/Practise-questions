import { useState } from "react"

export default function Q3({ ti, name, con }) {

    let [state1, setState] = useState("")
    function handler1() {
        console.log(con)
        setState(con)
    }
    return (<div>
        <h1>{ti}</h1>
        <h2>{name}</h2>
        <button onClick={handler1}>Know More</button>
        <p>{state1}</p>
    </div>)
}