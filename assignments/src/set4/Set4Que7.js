import { useState } from "react";

export default function Ff3() {
    const [lifes, setLife] = useState(3)
    const [lifeMsg, setLifeMsg] = useState("")
    function loseLife() {
        if (lifes > 0) {
            setLife(lifes - 1)

        }
        else {
            setLifeMsg("Game over Buddy")
        }
    }
    return (<div>
        <h1>Current Lifes {lifes}</h1>
        <button onClick={loseLife}>Lose a Life</button>
        <h2>{lifeMsg}</h2>
    </div>)
}