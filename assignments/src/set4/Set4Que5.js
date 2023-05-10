import { useState } from "react"

export default function F2({ data2 }) {
    const [todo, setTodo] = useState(data2)
    function colorHandler(toDoId) {
        const newTodo = todo.map(function (val) {
            if (val.id == toDoId) {
                return { ...val, isDone: !val.isDone }
            }
            else {
                return { ...val }
            }
        })
        setTodo(newTodo)
    }
    return (<div>
        <h1>New todoList</h1>
        {todo.map((val) => <li style={{ color: val.isDone ? "red" : "" }}>{val.task}<button onClick={() => colorHandler(val.id)}>Mark as Done</button></li>)
        }

    </div >)
}