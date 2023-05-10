import { useState } from "react"

export default function Ff3({ data1 }) {
    const date1 = data1[1].pickDate
    console.log(date1)
    const [color1, setColor] = useState(false)
    function colorHandler() {
        setColor(true)
    }
    return (<div>
        <ol>
            {data1.map((val) =>
                <li style={{ color: color1 && val.pickDate === '2023 - 03 - 30' ? "green" : "" }}>{val.id}-{val.name}-{val.pickDate}</li>)}
            <button onClick={colorHandler}>color Change</button>
        </ol>

    </div >)
}