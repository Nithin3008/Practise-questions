import { useState } from "react";
function colorHandler(event) {
    console.log(event.target.value)

}
export default function color1() {
    return (<div>
        <h1>Change color</h1>
        <select onChange={colorHandler}>
            <option>blue</option>
            <option>red</option>
            <option>green</option>
        </select>
    </div>)
}