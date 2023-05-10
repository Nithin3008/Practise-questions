import { useState } from "react"

export default function Ff() {
    const [size, setSize] = useState(18)
    function incrSize() {
        setSize(size + 1)
    }
    function decSize() {
        setSize(size - 1)
    }
    return (<div>
        <p style={{ fontSize: `${size}px` }}>Welcome</p>
        <button onClick={incrSize}>+</button>
        <button onClick={decSize}>-</button>
    </div>)
}