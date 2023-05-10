import { useState } from "react"

export default function Ff2({ data2 }) {
    const { heroes, villains } = data2
    const [endData, setendData] = useState([])
    function heroHandler() {
        setendData(heroes)
    }
    function villainHandler() {
        setendData(villains)
    }
    return (<div>

        <button onClick={heroHandler}>Show heroes</button>
        <button onClick={villainHandler}>Show villains</button>
        <div>
            {endData.map((val) => <p><h1>{val.name}</h1> {val.powers} {val.costume}</p>)}
        </div>

    </div>)
}