import { useState } from "react"
export default function Q4({ data }) {
    const [color1, setColor] = useState(false)
    function colorHandler() {
        setColor(true)
    }
    return (<div>
        {data.map((val) => <p style={{ backgroundColor: val.price > 50000 && color1 === true ? "green" : "" }}>id:{val.id} name:{val.name} description:{val.description} price:{val.price}</p>)}
        <button onClick={colorHandler}>Know More</button>
    </div>)
}