import { useState } from "react";
export default function Q6() {
    const [colorCode, setColor] = useState("")
    function colorHandlerRed() {
        setColor("#EE4B2B")
    }
    function colorHandlerBlue() {
        setColor("#89CFF0")
    }
    function colorHandlerGreen() {
        setColor("#7FFFD4")
    }
    return (<div>
        <p>{colorCode}</p>
        <button onClick={colorHandlerRed}>Red color</button>
        <button onClick={colorHandlerBlue}>Blue color</button>
        <button onClick={colorHandlerGreen}>Green color</button>
    </div>)
}