import { useState } from "react";

export default function Ff1({ data2 }) {
    const [todo, setToDo] = useState(data2)
    function remoeHandler(toDoid) {
        const newTodo = todo.filter((val) => val.id != toDoid )
        console.log(newTodo)
        setToDo(newTodo)
    }
    return (<div>
        <h1>Todo Lists</h1>
        {todo.map((val) => <li style={{ textDecoration: val.isDone ? "line-through" : "" }}> {val.task}<button onClick={() => remoeHandler(val.id)}>X</button></li>)}
    </div >)
}

