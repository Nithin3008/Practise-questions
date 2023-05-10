import { useState } from "react"

export default function Ff2({ data2 }) {

    const [items, setItems] = useState(data2)
    console.log(items)
    const allHandler = () => setItems(data2)
    const fruitsHandler = () => setItems(data2.filter((val) => val.category === "Fruit"))
    const vegHandler = () => setItems(data2.filter((val) => val.category === "Vegetable"))
    return (<div>
        <button onClick={allHandler}>All</button>
        <button onClick={fruitsHandler}>Fruits</button>
        <button onClick={vegHandler}>Vegetable</button>
        {items.map((val) => <p style={{ color: val.category == "Fruit" ? "yellow" : "green" }}>{val.name}</p>)}
    </div>)

}