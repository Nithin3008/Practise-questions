import { useState } from "react"

export default function Q2({ ti, con }) {

    let [state1, setState] = useState("")
    function handler1() {
        setState(con)
    }
    return (<div>
        <h1>{ti}</h1>
        <p>{state1}</p>
        <button onClick={handler1}>Know More</button>
    </div>)
}